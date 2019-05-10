const moment = require("moment");

let val;

val = moment().format("YYYY-MM-DD");
val = moment("2005-03-05").format("MMMM Do YYYY");
val = moment().format("dddd");
val = moment().format("[the year is] YYYY");
val = moment("19900713", "YYYYMMDD").fromNow();
val = moment()
  .startOf("year")
  .fromNow();
val = moment()
  .endOf("month")
  .fromNow();

val = moment()
  .subtract(10, "weeks")
  .calendar();

val = moment()
  .add(5, "days")
  .calendar();

console.log(val);
