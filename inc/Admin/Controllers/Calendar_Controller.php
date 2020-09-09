<?php

namespace AweBooking\Admin\Controllers;

use AweBooking\Model\Booking;
use WP_Error;
use WPLibs\Http\Request;
use AweBooking\Admin\Calendar\Booking_Scheduler;
use AweBooking\Model\Booking\Room_Item;

class Calendar_Controller extends Controller {
	/**
	 * Constructor.
	 */
	public function __construct() {
		$this->require_capability( 'manage_awebooking' );
	}

	/**
	 * Show the booking scheduler.
	 *
	 * @param  \WPLibs\Http\Request $request The current request.
	 * @return mixed
	 */
	public function index( Request $request ) {
		$scheduler = new Booking_Scheduler;

		$scheduler->prepare( $request );

		return $this->response( 'calendar/index.php', compact( 'scheduler' ) );
	}

	/**
	 * Update state.
	 *
	 * @param \WPLibs\Http\Request $request The current request.
	 * @return mixed
	 */
	public function update( Request $request ) {
		check_admin_referer( 'awebooking_update_state', '_wpnonce' );

		if ( ! $request->filled( 'action', 'room', 'end_date', 'start_date' ) ) {
			return new WP_Error( 'missing_request', esc_html__( 'Hey, you\'re missing some request parameters.', 'awebooking' ) );
		}

		if ( ! $room = abrs_get_room( $request->get( 'room' ) ) ) {
			return new WP_Error( 'room_not_found', esc_html__( 'Sorry, the request room does not exists.', 'awebooking' ) );
		}

		$timespan = abrs_timespan( $request->get( 'start_date' ), $request->get( 'end_date' ), 1 );
		if ( is_wp_error( $timespan ) ) {
			return $timespan;
		}

		switch ( $action = $request->get( 'action', 'unblock' ) ) {
			case 'block':
				$updated = abrs_block_room( $room, $timespan );
				break;

			case 'unblock':
				$updated = abrs_unblock_room( $room, $timespan );
				break;
            /*
             * START &ForceInteractive : add book action management to book directly from calendar
             */
            case 'book':
                $timespan = abrs_timespan( $request->get( 'start_date' ), $request->get( 'end_date' ), 1 );
                $room_type_id = $room->get_attribute('room_type');

                /** @var \AweBooking\Availability\Room_Rate $room_rate */
                $room_rate = abrs_retrieve_room_rate([
                    'room_type' => $room_type_id,
                    'check_in' => $request->get( 'start_date' ),
                    'check_out' => $request->get( 'end_date' )
                ]);
                $rate_plan = $room_rate->get_rate_plan();

                $booking = new Booking();
                $booking->set_status('draft');
                $booking->save();

                $room_item = ( new Room_Item )->fill([
                    'name'           => $room->get( 'name' ),
                    'room_id'        => $room->get_id(),
                    'booking_id'     => $booking->get_id(),
                    'room_type_id'   => $room_type_id,
                    'rate_plan_id'   => $rate_plan->get_id(),
                    'adults'         => 1,
                    'children'       => 0,
                    'infants'        => 0,
                ]);

                $room_item->set_timespan( $timespan );
                $room_item->set_total( $room_rate->get_rate() );
                $room_item->save();

                return $this->redirect()->to( get_edit_post_link( $booking->get_id(), 'raw' ) );
                break;
            /**
             * END &ForceInteractive
             */
		}

		return $this->redirect()->back( abrs_admin_route( '/calendar' ) );
	}

	/**
	 * Bulk update state.
	 *
	 * @param \WPLibs\Http\Request $request The current request.
	 * @return mixed
	 */
	public function bulk_update( Request $request ) {
		check_admin_referer( 'awebooking_bulk_update_state', '_wpnonce' );

		if ( ! $request->filled( 'bulk_rooms', 'check-in', 'check-out' ) ) {
			return new WP_Error( 'missing_request', esc_html__( 'Hey, you\'re missing some request parameters.', 'awebooking' ) );
		}

		$timespan = abrs_timespan( $request->get( 'check-in' ), $request->get( 'check-out' ), 1 );
		if ( is_wp_error( $timespan ) ) {
			return $timespan;
		}

		$only_days = $request->get( 'bulk_days' );

		foreach ( (array) $request->get( 'bulk_rooms' ) as $room ) {
			$action = $request->get( 'bulk_action', 'unblock' );

			switch ( $action ) {
				case 'block':
					$updated = abrs_block_room( absint( $room ), $timespan, compact( 'only_days' ) );
					break;

				case 'unblock':
					$updated = abrs_unblock_room( absint( $room ), $timespan, compact( 'only_days' ) );
					break;
			}
		}

		return $this->redirect()->back( abrs_admin_route( '/calendar' ) );
	}
}
