<?php

use AweBooking\Constants;
use AweBooking\Multilingual;
use AweBooking\Gateway\Gateway;
use AweBooking\Bootstrap\Load_Textdomain;
use AweBooking\Component\Currency\Symbol;
use AweBooking\Component\Form\Form;
use Awethemes\WP_Object\WP_Object;

foreach ( [ // Requires other core functions.
	'dates.php',
	'formatting.php',
	'calendar.php',
	'concierge.php',
	'rooms.php',
	'rates.php',
	'hotels.php',
	'bookings.php',
	'services.php',
	'taxes.php',
	'customers.php',
] as $core_file ) {
	require trailingslashit( __DIR__ ) . $core_file;
}

/**
 * Returns the multilingual instance.
 *
 * @return \AweBooking\Multilingual
 */
function abrs_multilingual() {
	return awebooking()->make( 'multilingual' );
}

/**
 * Gets the plugin URL.
 *
 * @param  string $path Optional, extra path to added.
 * @return string
 */
function abrs_plugin_url( $path = null ) {
	return awebooking()->plugin_url( $path );
}

/**
 * Returns the logger.
 *
 * @return \Psr\Log\LoggerInterface
 */
function abrs_logger() {
	return awebooking()->make( 'logger' );
}

/**
 * Report an exception.
 *
 * @param  Exception $e Report the exception.
 * @return void
 */
function abrs_report( $e ) {
	try {
		$logger = awebooking()->make( 'logger' );
		$logger->error( $e->getMessage(), [ 'exception' => $e ] );
	} catch ( \Exception $ex ) {} // @codingStandardsIgnoreLine
}

/**
 * Returns the Http request.
 *
 * @return \Awethemes\Http\Request
 */
function abrs_http_request() {
	return awebooking()->make( 'request' );
}

/**
 * Returns the redirector.
 *
 * @return \AweBooking\Component\Routing\Redirector
 */
function abrs_redirector() {
	return awebooking()->make( 'redirector' );
}

/**
 * Returns the Url_Generator.
 *
 * @return \AweBooking\Component\Routing\Url_Generator
 */
function abrs_url() {
	return awebooking()->make( 'url' );
}

/**
 * Retrieves the route URL.
 *
 * @param  string $path       Optional, the admin route.
 * @param  array  $parameters The additional parameters.
 * @param  bool   $is_ssl     Force the SSL in return URL.
 * @return string
 */
function abrs_route( $path = '/', $parameters = [], $is_ssl = false ) {
	return abrs_url()->route( $path, $parameters, $is_ssl );
}

/**
 * Retrieves the admin route URL.
 *
 * @param  string $path       Optional, the admin route.
 * @param  array  $parameters The additional parameters.
 * @return string
 */
function abrs_admin_route( $path = '/', $parameters = [] ) {
	return abrs_url()->admin_route( $path, $parameters );
}

/**
 * Returns the Mailer.
 *
 * @param  string $email Get specified email.
 * @return \AweBooking\Email\Mailer|\AweBooking\Email\Mailable
 */
function abrs_mailer( $email = null ) {
	return is_null( $email )
		? awebooking()->make( 'mailer' )
		: awebooking( 'mailer' )->driver( $email );
}

/**
 * Returns the WP_Session instance.
 *
 * @param  string|null $key     Optional, get a specified session key.
 * @param  mixed       $default Optional, default value if $key is not exists.
 * @return \Awethemes\WP_Session\WP_Session|mixed
 */
function abrs_session( $key = null, $default = null ) {
	return is_null( $key )
		? awebooking( 'session' )
		: awebooking( 'session' )->get( $key, $default );
}

/**
 * Returns the Flash_Notifier.
 *
 * @param  string $message The notice message.
 * @param  string $level   The notice level.
 * @return \AweBooking\Component\Flash\Flash_Notifier
 */
function abrs_flash( $message = null, $level = 'info' ) {
	$flash = awebooking()->make( 'flash' );

	if ( is_null( $message ) ) {
		return $flash;
	}

	return $flash->add_message( $message, $level );
}

/**
 * Create a new form builder.
 *
 * @param  string      $form_id The form ID.
 * @param  object|null $data    Optional, form data.
 *
 * @return \AweBooking\Component\Form\Form
 */
function abrs_create_form( $form_id = '', $data = null ) {
	return new Form( $form_id, $data ?: 0, 'static' );
}

/**
 * Gets the gateway manager.
 *
 * @return \AweBooking\Gateway\Gateways
 */
function abrs_payment_gateways() {
	return awebooking()->make( 'gateways' );
}

/**
 * Get list payment methods.
 *
 * @return array
 */
function abrs_list_payment_methods() {
	$methods = apply_filters( 'abrs_base_payment_methods', [
		'cash' => esc_html__( 'Cash', 'awebooking' ),
	]);

	$gateways = abrs_payment_gateways()
		->enabled()->map( function( Gateway $gateway ) {
			return $gateway->get_method_title();
		})->all();

	return array_merge( $methods, $gateways );
}

/**
 * Returns plugin current currency.
 *
 * @return string
 */
function abrs_current_currency() {
	return abrs_get_option( 'currency', 'USD' );
}

/**
 * Returns list of currencies.
 *
 * @return array[]
 */
function abrs_list_currencies() {
	return abrs_collect( awebooking( 'currencies' )->all() )
		->pluck( 'name', 'alpha3' )
		->all();
}

/**
 * Get the currency symbol by code.
 *
 * @param  string $currency The currency code.
 * @return string
 */
function abrs_currency_symbol( $currency = null ) {
	if ( ! $currency ) {
		$currency = abrs_current_currency();
	}

	$symbols = apply_filters( 'abrs_currency_symbols', Symbol::$symbols );

	$symbol = array_key_exists( $currency, $symbols )
		? $symbols[ $currency ]
		: '';

	return apply_filters( 'abrs_currency_symbol', $symbol, $currency );
}

/**
 * Get the currency name by code.
 *
 * @param  string $currency The currency code.
 * @return string
 */
function abrs_currency_name( $currency = null ) {
	if ( is_null( $currency ) ) {
		$currency = abrs_current_currency();
	}

	$name = abrs_rescue( function() use ( $currency ) {
		return awebooking( 'currencies' )->find( $currency )['name'];
	});

	return apply_filters( 'abrs_currency_name', (string) $name, $currency );
}

/**
 * Returns list of countries indexed by alpha2 code.
 *
 * @return array[]
 */
function abrs_list_countries() {
	return abrs_collect( awebooking( 'countries' )->all() )
		->pluck( 'name', 'alpha2' )
		->all();
}

/**
 * Returns list dropdown of currencies.
 *
 * @return array[]
 */
function abrs_list_dropdown_currencies() {
	return abrs_collect( abrs_list_currencies() )
		->transform( function( $name, $code ) {
			return $name . ' (' . abrs_currency_symbol( $code ) . ')';
		})->all();
}

/**
 * Normalize the option name according to the given language.
 *
 * @param  string $language The language name (2 letters).
 * @return string
 */
function abrs_normalize_option_name( $language = null ) {
	if ( empty( $language ) || in_array( $language, [ 'en', 'all', 'default', 'original' ] ) ) {
		return Constants::OPTION_KEY;
	}

	return Constants::OPTION_KEY . '_' . trim( $language );
}

/**
 * Gets translatable options.
 *
 * TODO: ...
 *
 * @return array
 */
function abrs_get_translatable_options() {
	$core_fields = apply_filters( 'abrs_get_translatable_options', [
		// General.
		'measure_unit',
		'page_checkout',
		'page_check_availability',
		'currency',
		'currency_position',
		'price_thousand_separator',
		'price_decimal_separator',
		'price_number_decimals',
		'hotel_name',
		'hotel_address',
		'hotel_address_2',
		'hotel_city',

		// Checkout.
		'gateway_direct_payment_title',
		'gateway_direct_payment_description',
		'gateway_direct_payment_instructions',

		'gateway_bacs_title',
		'gateway_bacs_description',
		'gateway_bacs_instructions',
		'gateway_bacs_accounts',

		// Email.
		'email_from_name',
		'email_from_address',
		'email_header_image',
		'email_copyright',

		'email_invoice_recipient',
		'email_invoice_subject',
		'email_invoice_content',

		'email_new_booking_recipient',
		'email_new_booking_subject',
		'email_new_booking_content',

		'email_cancelled_recipient',
		'email_cancelled_subject',
		'email_cancelled_content',

		'email_reserved_booking_subject',
		'email_reserved_booking_content',

		'email_processing_booking_subject',
		'email_processing_booking_content',

		'email_completed_booking_subject',
		'email_completed_booking_content',

		'email_customer_note_subject',
		'email_customer_note_content',
	]);

	return array_unique( $core_fields );
}

/**
 * Retrieves an option by key-name.
 *
 * @param  string $key     The key name.
 * @param  mixed  $default The default value.
 * @return mixed
 */
function abrs_get_option( $key, $default = null ) {
	return awebooking()->get_option( $key, $default );
}

/**
 * Gets the current reservation mode.
 *
 * Modes: single_room, multiple_room
 *
 * @return string
 */
function abrs_get_reservation_mode() {
	return abrs_get_option( 'reservation_mode', 'multiple_room' );
}

/**
 * Determines if current reservation mode match with given modes.
 *
 * @param string|array $modes The modes.
 * @return bool
 */
function abrs_is_reservation_mode( $modes ) {
	return in_array( abrs_get_reservation_mode(),
		is_array( $modes ) ? $modes : func_get_args()
	);
}

/**
 * Is current WordPress is running on multi-languages.
 *
 * @return bool
 */
function abrs_running_on_multilanguage() {
	return apply_filters( 'abrs_is_running_multilanguage', Multilingual::is_polylang() || Multilingual::is_wpml() );
}

/**
 * Determines if plugin enable multiple hotels.
 *
 * @return bool
 */
function abrs_multiple_hotels() {
	return apply_filters( 'abrs_is_multiple_hotels', 'on' === abrs_get_option( 'enable_location', 'on' ) );
}

/**
 * Determines if plugin allow children in reservation.
 *
 * @return bool
 */
function abrs_children_bookable() {
	return apply_filters( 'abrs_is_children_bookable', 'on' === abrs_get_option( 'children_bookable', 'on' ) );
}

/**
 * Determines if plugin allow infants in reservation.
 *
 * @return bool
 */
function abrs_infants_bookable() {
	return apply_filters( 'abrs_is_infants_bookable', 'on' === abrs_get_option( 'infants_bookable', 'on' ) );
}

/**
 * Returns the maximum rooms allowed in the scaffold.
 *
 * @return int
 */
function abrs_maximum_scaffold_rooms() {
	return (int) apply_filters( 'abrs_maximum_scaffold_rooms', 25 );
}

/**
 * Return a list of common titles.
 *
 * @return array
 */
function abrs_list_common_titles() {
	return apply_filters( 'abrs_list_customer_titles', [
		'mr'   => esc_html__( 'Mr.', 'awebooking' ),
		'ms'   => esc_html__( 'Ms.', 'awebooking' ),
		'mrs'  => esc_html__( 'Mrs.', 'awebooking' ),
		'miss' => esc_html__( 'Miss.', 'awebooking' ),
		'dr'   => esc_html__( 'Dr.', 'awebooking' ),
		'prof' => esc_html__( 'Prof.', 'awebooking' ),
	]);
}

/**
 * Switch AweBooking to site language.
 *
 * @return void
 */
function abrs_switch_to_site_locale() {
	if ( function_exists( 'switch_to_locale' ) ) {
		switch_to_locale( get_locale() );

		// Filter on plugin_locale so load_plugin_textdomain loads the correct locale.
		add_filter( 'plugin_locale', 'get_locale' );

		// Init AweBooking locale.
		( new Load_Textdomain )->bootstrap( awebooking() );
	}
}

/**
 * Switch AweBooking language to original.
 *
 * @return void
 */
function abrs_restore_locale() {
	if ( function_exists( 'restore_previous_locale' ) ) {
		restore_previous_locale();

		// Remove filter.
		remove_filter( 'plugin_locale', 'get_locale' );

		// Init AweBooking locale.
		( new Load_Textdomain )->bootstrap( awebooking() );
	}
}

/**
 * Locate a template and return the path for inclusion.
 *
 * @param  string $template_name The template name.
 * @return string
 */
function abrs_locate_template( $template_name ) {
	// Locate in your {theme}/awebooking.
	$template = locate_template([
		trailingslashit( awebooking()->template_path() ) . $template_name,
	]);

	// Fallback to default template in the plugin.
	if ( ! $template || ABRS_TEMPLATE_DEBUG ) {
		$template = awebooking()->plugin_path( 'templates/' ) . $template_name;
	}

	// Return what we found.
	return apply_filters( 'abrs_locate_template', $template, $template_name );
}

/**
 * Include a template by given template name.
 *
 * @param  string $template_name Template name.
 * @param  array  $vars          Optional, the data send to template.
 * @return void
 */
function abrs_get_template( $template_name, $vars = [] ) {
	$located = abrs_locate_template( $template_name );

	if ( ! file_exists( $located ) ) {
		/* translators: %s template */
		_doing_it_wrong( __FUNCTION__, sprintf( wp_kses_post( __( '%s does not exist.', 'awebooking' ) ), '<code>' . esc_html( $located ) . '</code>' ), '3.1' );
		return;
	}

	// Allow 3rd party plugin filter template file from their plugin.
	$located = apply_filters( 'abrs_get_template', $located, $template_name, $vars );

	do_action( 'abrs_before_template_part', $template_name, $located, $vars );

	// Extract $vars to variables.
	if ( ! empty( $vars ) && is_array( $vars ) ) {
		extract( $vars, EXTR_SKIP ); // @codingStandardsIgnoreLine
	}

	// Include the located file.
	include $located;

	do_action( 'abrs_after_template_part', $template_name, $located, $vars );
}

/**
 * Returns a template content by given template name.
 *
 * @see abrs_get_template()
 *
 * @param  string $template_name Template name.
 * @param  array  $vars          Optional, the data send to template.
 *
 * @return string
 */
function abrs_get_template_content( $template_name, $vars = [] ) {
	$level = ob_get_level();

	ob_start();

	try {
		abrs_get_template( $template_name, $vars );
	} catch ( Exception $e ) {
		awebooking()->handle_buffering_exception( $e, $level );
	} catch ( Throwable $e ) {
		awebooking()->handle_buffering_exception( $e, $level );
	}

	return trim( ob_get_clean() );
}

/**
 * Loads a template part into a template.
 *
 * @param mixed  $slug The slug name for the generic template.
 * @param string $name The name of the specified template.
 */
function abrs_get_template_part( $slug, $name = '' ) {
	$template = '';

	// Try locate {$slug}-{$name}.php first.
	if ( '' !== $name ) {
		$template = abrs_locate_template( "{$slug}-{$name}.php" );
	}

	// Then try locate in {$slug}.php.
	if ( ! $template || ! file_exists( $template ) ) {
		$template = abrs_locate_template( "{$slug}.php" );
	}

	// Allow 3rd party plugins to filter template file from their plugin.
	$template = apply_filters( 'abrs_get_template_part', $template, $slug, $name );

	if ( $template && file_exists( $template ) ) {
		load_template( $template, false );
	}
}

/**
 * Retrieve the page ID.
 *
 * @param  string $page The page slug: search_results, checkout.
 * @return int
 */
function abrs_get_page_id( $page ) {
	$page_alias = [ // Back-compat, we changed name but still keep ID.
		'search'         => 'check_availability',
		'search_results' => 'check_availability',
	];

	if ( array_key_exists( $page, $page_alias ) ) {
		$page = $page_alias[ $page ];
	}

	$page = apply_filters( "abrs_get_{$page}_page_id", abrs_get_option( 'page_' . $page ) );

	return $page ? absint( $page ) : 0;
}

/**
 * Retrieve page permalink.
 *
 * @param  string $page The retrieve page.
 * @return string
 */
function abrs_get_page_permalink( $page ) {
	$page_id = abrs_get_page_id( $page );

	$permalink = 0 <= $page_id ? get_permalink( $page_id ) : get_home_url();

	return apply_filters( "abrs_get_{$page}_page_permalink", $permalink );
}

/**
 * Returns the checkout page URL.
 *
 * @return string
 */
function abrs_get_checkout_url() {
	$checkout_url = abrs_get_page_permalink( 'checkout' );

	if ( abrs_get_option( 'force_ssl_checkout' ) || is_ssl() ) {
		$checkout_url = str_replace( 'http:', 'https:', $checkout_url );
	}

	return $checkout_url;
}

/**
 * Get an image size. TODO: ...
 *
 * @param array|string $image_size Image size.
 * @return array
 */
function abrs_get_image_size( $image_size ) {
	if ( is_array( $image_size ) ) {
		$width  = isset( $image_size[0] ) ? $image_size[0] : '300';
		$height = isset( $image_size[1] ) ? $image_size[1] : '300';
		$crop   = isset( $image_size[2] ) ? $image_size[2] : 1;

		$size = compact( 'width', 'height', 'crop' );

		$image_size = $width . '_' . $height;

	} elseif ( in_array( $image_size, array( 'thumbnail', 'archive', 'single' ) ) ) {
		$size           = abrs_get_option( $image_size . '_image_size', [] );
		$size['width']  = isset( $size['width'] ) ? $size['width'] : '300';
		$size['height'] = isset( $size['height'] ) ? $size['height'] : '300';
		$size['crop']   = isset( $size['crop'] ) ? $size['crop'] : 0;
	} else {
		$size = array(
			'width'  => '300',
			'height' => '300',
			'crop'   => 1,
		);
	}

	return apply_filters( 'abrs_get_image_size_' . $image_size, $size );
}

/**
 * Get rounding precision for internal calculations.
 *
 * @return int
 */
function abrs_get_rounding_precision() {
	$precision = abrs_get_option( 'price_number_decimals', 2 ) + 2;

	if ( absint( ABRS_ROUNDING_PRECISION ) > $precision ) {
		$precision = absint( ABRS_ROUNDING_PRECISION );
	}

	return $precision;
}

/**
 * Parse the object_id.
 *
 * @param  mixed $object The object.
 * @return int
 */
function abrs_parse_object_id( $object ) {
	if ( is_numeric( $object ) && $object > 0 ) {
		return (int) $object;
	} elseif ( ! empty( $object->ID ) ) {
		return (int) $object->ID;
	} elseif ( ! empty( $object->term_id ) ) {
		return (int) $object->term_id;
	} elseif ( $object instanceof WP_Object ) {
		return $object->get_id();
	}

	return 0;
}

/**
 * Sets nocache_headers which also disables page caching.
 *
 * @return void
 */
function abrs_nocache_headers() {
	// Do not cache.
	if ( ! defined( 'DONOTCACHEPAGE' ) ) {
		define( 'DONOTCACHEPAGE', true );
	}

	if ( ! defined( 'DONOTCACHEOBJECT' ) ) {
		define( 'DONOTCACHEOBJECT', true );
	}

	if ( ! defined( 'DONOTCACHEDB' ) ) {
		define( 'DONOTCACHEDB', true );
	}

	// Set the headers to prevent caching for the different browsers.
	nocache_headers();
}

/**
 * Run a MySQL transaction query, if supported.
 *
 * @param  string $type The transaction type, start (default), commit, rollback.
 * @return void
 */
function abrs_db_transaction( $type = 'start' ) {
	global $wpdb;

	// Hide the errros before perform the action.
	$wpdb->hide_errors();

	switch ( $type ) {
		case 'commit':
			$wpdb->query( 'COMMIT' );
			break;
		case 'rollback':
			$wpdb->query( 'ROLLBACK' );
			break;
		default:
			$wpdb->query( 'START TRANSACTION' );
			break;
	}
}

/**
 * Delete expired transients.
 *
 * @see wc_delete_expired_transients()
 *
 * @return int
 */
function abrs_delete_expired_transients() {
	global $wpdb;

	$sql = "DELETE a, b FROM $wpdb->options a, $wpdb->options b
		WHERE a.option_name LIKE %s
		AND a.option_name NOT LIKE %s
		AND b.option_name = CONCAT( '_transient_timeout_', SUBSTRING( a.option_name, 12 ) )
		AND b.option_value < %d";
	$rows = $wpdb->query( $wpdb->prepare( $sql, $wpdb->esc_like( '_transient_' ) . '%', $wpdb->esc_like( '_transient_timeout_' ) . '%', time() ) ); // WPCS: unprepared SQL ok.

	$sql = "DELETE a, b FROM $wpdb->options a, $wpdb->options b
		WHERE a.option_name LIKE %s
		AND a.option_name NOT LIKE %s
		AND b.option_name = CONCAT( '_site_transient_timeout_', SUBSTRING( a.option_name, 17 ) )
		AND b.option_value < %d";
	$rows2 = $wpdb->query( $wpdb->prepare( $sql, $wpdb->esc_like( '_site_transient_' ) . '%', $wpdb->esc_like( '_site_transient_timeout_' ) . '%', time() ) ); // WPCS: unprepared SQL ok.

	return absint( $rows + $rows2 );
}
add_action( 'awebooking_installed', 'abrs_delete_expired_transients' );