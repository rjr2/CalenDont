//for fullcalendar.io 

// var Calendar = require('tui-calendar'); /* CommonJS */
// require("tui-calendar/dist/tui-calendar.css");


// If you use the default popups, use this.
// require("tui-date-picker/dist/tui-date-picker.css");
// require("tui-time-picker/dist/tui-time-picker.css");
// import Calendar from 'tui-calendar'; /* ES6 */
// import "tui-calendar/dist/tui-calendar.css";


// If you use the default popups, use this.
// import 'tui-date-picker/dist/tui-date-picker.css';
// import 'tui-time-picker/dist/tui-time-picker.css';
var tpSelectbox = new tui.TimePicker('#timepicker-selectbox', {
    initialHour: 3,
    initialMinute: 30,
    disabledHours: [1, 2, 14],
    inputType: 'selectbox'
});

const DatePicker = tui.DatePicker;
const picker2 = new DatePicker('#wrapper', {
    showAlways: true,
    timePicker: true
 });
 




// var datepicker = new DatePicker('#wrapper', {
//     date: new Date(),
//     input: {
//         element: '#datepicker-input',
//         format: 'yyyy-MM-dd'
//     }
// });
