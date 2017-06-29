var moment = require('moment');

console.log(moment().format());

// January 1st, 1970 at 12:00am -> 0
// January 1st, 1970 at 12:01am -> 60

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1498739315;
var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'));

//June 29th, 2017 @ 8:28 AM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));
