// display current date
$("#currentDay").text(moment().format('LL'));

$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
})

// load events
$("#9 .description").val(localStorage.getItem("hour9"));
$("#10 .description").val(localStorage.getItem("hour10"));
$("#11 .description").val(localStorage.getItem("hour11"));
$("#12 .description").val(localStorage.getItem("hour12"));
$("#13 .description").val(localStorage.getItem("hour13"));
$("#14 .description").val(localStorage.getItem("hour14"));
$("#15 .description").val(localStorage.getItem("hour15"));
$("#16 .description").val(localStorage.getItem("hour16"));
$("#17 .description").val(localStorage.getItem("hour17"));

// color coding time audit
var auditTime = function() {
// get current time
var currentTime = moment().hour();

// loop over time blocks to audit time (if/else statement)
$(".time-block").each(function () {
  
var eventHour = parseInt($(".time-block").attr("id"));

console.log(eventHour, currentTime)

// if the event hour is less than current time, add .past and remove all others
if (eventHour < currentTime) {
  $(this).addClass("past");
  $(this).removeClass("present");
  $(this).removeClass("future");


// if the eventHour is equal in all ways to the current time, add .present and remove all others
} else if (eventHour = currentTime) {
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