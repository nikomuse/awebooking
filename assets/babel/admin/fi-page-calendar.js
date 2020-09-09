import $ from 'jquery';
import BookingScheduler from './page-calendar';

const plugin = window.awebooking;

const DATE_FORMAT = 'YYYY-MM-DD';

class AdminCalendar extends BookingScheduler {

    constructor() {
        super();
        console.log("C'est moi");
        this.scheduler.on('action:book', this.handleBookRoom.bind(this))
    }

    handleBookRoom(e, model) {
        plugin.confirm(plugin.i18n.warning, () => {
            const $controls = this.compileHtmlControls('book', model);
            $controls.closest('form').submit();
        })
    }
}

$(function () {
    new AdminCalendar()
});