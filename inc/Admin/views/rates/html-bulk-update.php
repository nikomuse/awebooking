<?php
/**
 * Partial html to display bulk adjust price form.
 *
 * @package AweBooking
 *
 * @var $scheduler \AweBooking\Admin\Calendar\Pricing_Scheduler
 */

// Create the form builder.
$controls = abrs_create_form( 'bulk-adjust-price' );

if ( $scheduler->is_nested() ) {
	$all_rates = [];
} else {
	$all_rates = $scheduler->scheduler->mapWithKeys( function ( $calendar ) {
		return [ $calendar->get_uid() => $calendar->get_name() ];
	} )->all();
}

?>

<div id="bulk-update-dialog" class="awebooking-dialog-contents" title="<?php echo esc_html__( 'Bulk Adjust Price', 'awebooking' ); ?>" style="display: none;">
	<form method="POST" action="<?php echo esc_url( abrs_admin_route( '/rates/bulk-update' ) ); ?>">
		<?php wp_nonce_field( 'awebooking_bulk_update_price' ); ?>

		<div class="cmb2-wrap awebooking-wrap" style="width: 720px;">
			<div class="cmb2-metabox cmb2-inline-metabox">

				<div class="abrow abrs-pb1">
					<div class="abcol-4 abcol-sm-12">

						<?php if ( $scheduler->is_nested() ) : ?>
							<div class="cmb-row">
								<div class="cmb-td">
									<label for="bulk_rates"><?php esc_html_e( 'Select Rates', 'awebooking' ); ?> </label>

									<ul class="list-bulk-rooms">
										<?php foreach ( $scheduler->scheduler as $scheduler ) : ?>
											<li>
												<strong><?php echo esc_html( $scheduler->get_name() ); ?></strong>

												<ul>
													<?php foreach ( $scheduler as $calendar ) : ?>
														<li>
															<input type="checkbox" class="cmb2-option" name="bulk_rates[]" id="bulk_rates<?php echo esc_attr( $calendar->get_uid() ); ?>" value="<?php echo esc_attr( $calendar->get_uid() ); ?>">
															<label for="bulk_rates<?php echo esc_attr( $calendar->get_uid() ); ?>"><?php echo esc_html( $calendar->get_name() ); ?></label>
														</li>
													<?php endforeach ?>
												</ul>
											</li>
										<?php endforeach ?>
									</ul>
								</div>
							</div>
						<?php else : ?>
							<?php
							$controls->show_field( [
								'id'                => 'bulk_rates',
								'type'              => 'multicheck',
								'name'              => esc_html__( 'Select Rates', 'awebooking' ),
								'options'           => $all_rates,
								'select_all_button' => false,
							] );
							?>
						<?php endif; ?>
					</div>

					<div class="abcol-8 abcol-sm-12">
						<?php
						$controls->show_field([
							'id'          => 'bulk_date',
							'type'        => 'abrs_dates',
							'name'        => esc_html__( 'Select dates', 'awebooking' ),
							'input_names' => [ 'bulk_start_date', 'bulk_end_date' ],
							'show_js'     => false,
							// 'default'     => [ abrs_date( 'today' )->toDateString(), abrs_date( 'tomorrow' )->toDateString() ],
							// 'attributes'  => [ 'tabindex' => '-1' ],
						]);
						?>

						<div class="cmb-row">
							<div class="cmb-th"><label for="amount"><?php esc_html_e( 'Amount', 'awebooking' ); ?></label></div>

							<div class="cmb-td">
								<div class="abrs-input-addon group-operator-amount">
									<select class="cmb2_select" name="bulk_operator" id="bulk_operator" tabindex="-1">
										<?php foreach ( abrs_get_rate_operations() as $key => $label ) : ?>
											<option value="<?php echo esc_attr( $key ); ?>" <?php selected( 'replace', $key ); ?>><?php echo esc_html( $label ); ?></option>
										<?php endforeach ?>
									</select>

									<input type="text" class="cmb2-text-small" name="bulk_amount" id="bulk_amount" value="0" tabindex="1">
								</div>

								<p class="cmb2-metabox-description"><?php esc_html_e( 'Note: Replace with zero will be reset custom price.', 'awebooking' ); ?></p>
							</div>
						</div>

						<?php
						$controls->show_field([
							'id'                => 'bulk_days',
							'type'              => 'multicheck_inline',
							'name'              => esc_html__( 'Apply on days', 'awebooking' ),
							'default'           => [ 0, 1, 2, 3, 4, 5, 6 ],
							'attributes'        => [ 'tabindex' => '-1' ],
							'select_all_button' => false,
							'options'           => abrs_days_of_week( 'abbrev' ),
						]);
						?>
					</div>
				</div>

			</div><!-- /.cmb2-inline-metabox -->
		</div><!-- /.awebooking-wrap -->

		<div class="awebooking-dialog-buttons">
			<button type="submit" class="button button-primary abrs-button"><?php echo esc_html__( 'Submit', 'awebooking' ); ?></button>
		</div>
	</form>
</div>
