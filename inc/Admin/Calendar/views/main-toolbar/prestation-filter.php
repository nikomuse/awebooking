<?php
$available_prestations = \App\Tools\OptionsTools::getAvailableActivityTypes(true);
if ( ! $available_prestations || empty($available_prestations) ) {
	return;
}

?>

<div class="abrs-ptb1">
	<select name="prestation_id" id="prestation_id">
		<option value=""><?php esc_html_e( 'Filter by Service', 'awebooking' ) ?></option>
		<?php foreach ( $available_prestations as $key => $available_prestation ) : ?>
			<option value="<?php echo $available_prestation['const']; ?>" <?php selected( isset( $_GET['prestation'] ) ? $_GET['prestation'] : $available_prestations[0]['const'], $available_prestation['const'] ); ?>><?php echo $available_prestation['label']; ?></option>
		<?php endforeach; ?>
	</select>
</div>

<script>
	(function($, awebooking) {
		'use strict';

		$(function() {
			var plugin = window.awebooking || {};

			$('#prestation_id').on('change', function (e) {
				var prestation_id = this.value;

				setTimeout(function() {
					window.location.href = plugin.utils.addQueryArgs({ prestation: prestation_id });
				}, 500);
			});
		});

	})(jQuery);
</script>
