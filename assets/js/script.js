// display current date
$("#currentDay").text(moment().format('LL'));

$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
})

// load events
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

// color coding time audit
var auditTime = function() {
// get current time
var currentTime = moment().hour();

// loop over time blocks to audit time (if/else statement)
$(".time-block").each(function (index, element) {
  
var eventHour = parseInt($(element).attr("id"));

// if the event hour is less than current time, add .past and remove all others
if (eventHour < currentTime) {
  $(this).addClass("past");
  $(this).removeClass("present");
  $(this).removeClass("future");


// if the eventHour is equal in all ways to the current time, add .present and remove all others
} else if (eventHour === currentTime) {
  $(this).addClass("present");
  $(this).removeClass("past");
  $(this).removeClass("future");

// if the eventHour is neither of the others, add .future and remove all others
} else {
  $(this).addClass("future");
  $(this).removeClass("present");
  $(this).removeClass("past");
}
});
}
// re-run function
auditTime();