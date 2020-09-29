<?php

namespace AweBooking\Calendar\Period;

use DateInterval;

class Hour extends Iterator_Period {
	/**
	 * The date interval specification for the period.
	 *
	 * @var string
	 */
	protected $interval = 'PT1H';

	/**
	 * Create a Week period.
	 *
	 * @param string|\DateTime $start_date The start date point.
     * @param string $end_period The start date point.
	 */
	public function __construct( $start_date, $end_period ) {
		$final_start_date = abrs_date_time( $start_date );
		if(!is_string($end_period)) {
		    $end_interval = $start_date->diff($end_period);
		    //var_dump($end_interval);exit;
        } else {
            $end_interval = new DateInterval($end_period);
        }
		//var_dump($start_date);exit;

		$end_date = $start_date->add($end_interval);
		//list( $start_date, $end_date ) = $this->filter_from_datepoint( $start_date );

		parent::__construct( $final_start_date, $end_date );
	}

	/**
	 * {@inheritdoc}
	 */
	public function getIterator() {
		// @codingStandardsIgnoreLine
		$initial = $this;

		return $this->generate_iterator( $initial, function( $current ) {
			/* @var \AweBooking\Calendar\Period\Iterator_Period $current */
			//var_dump($current->get_start_date());exit;
			return $this->contains( $current->get_start_date() );
		});
	}

	/**
	 * Return a string representation of this Period
	 *
	 * @return string
	 */
	public function __toString() {
		// @codingStandardsIgnoreLine
		return $this->startDate->format( 'h' );
	}
}
