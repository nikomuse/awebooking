<?php
/**
 * &ForceInteractive
 *
 * Template displaying row days and hours.
 *
 * @var \AweBooking\Admin\Calendar\Abstract_Scheduler $calendar
 * @var \AweBooking\Calendar\Calendar                 $loop_calendar
 *
 * @package AweBooking\Admin\Calendar
 */

if ( ! isset( $loop_scheduler ) ) {
	$loop_scheduler = null;
}

?><div class="scheduler__hours">

	<?php foreach ( $calendar->period as $day ) : ?>
        <?php for ($i = 0; $i < 24; $i++) : ?>
            <div class="scheduler__column_hours  scheduler__date <?php echo esc_attr( implode( ' ', abrs_date_classes( $day ) ) ); ?>"
                 data-date="<?php echo esc_attr( $day->format( 'Y-m-d' ) ); ?>"
                 data-hour="<?php echo esc_attr( $day->format( 'Y-m-d' ));?> <?php echo $i < 10 ? '0' . $i : $i; ?>:00:00"
                >
                <span class="scheduler__datehover"></span>
                <?php //$calendar->call( 'display_day_column', $day, $loop_calendar, $loop_scheduler ); ?>
            </div>
        <?php endfor; ?>
	<?php endforeach; ?>

</div><!-- /.scheduler__days -->
