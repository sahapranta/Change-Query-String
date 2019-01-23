var l=location;
//l.href=l.origin+l.href.replace(l.origin, '.ezp.lib.unimelb.edu.au');
//alert(`${l.protocol}//${l.hostname}/${l.pathname}${l.origin}`);

function getParams(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}
String.prototype.toDate = function(format) {
    format = format || "dmy";
    var separator = this.match(/[^0-9]/)[0];
    var components = this.split(separator);
    var day, month, year;
    for (var key in format) {
        var fmt_value = format[key];
        var value = components[key];
        switch (fmt_value) {
            case "d":
                day = parseInt(value);
                break;
            case "m":
                month = parseInt(value)-1;
                break;
            case "y":
                year = parseInt(value);
        }
    }
    return new Date(year, month, day);
};
function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return ''+(d <= 9 ? '0' + d : d)+ '/' + (m<=9 ? '0' + m : m) + '/' + y;
}

var data = getParams('date');
var date = new Date(data.toDate("dmy"));

var send = dateToYMD(date.addDays(1));

var url = `${l.origin}${l.pathname}?date=${send}`;

l.href=url;
//setTimeout(window.scrollBy(0, 500), 5000);
//window.onload=function(){
//window.scrollBy(0, 100);
//}
