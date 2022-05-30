var events = {}
// display current date: moment().format('LL');
$("#currentDay").text(moment().format('LL'));


// create an event
var createEvent = function(eventText, eventTime, eventList) {
  // create elements that make up an event item
    var eventLi = $("<li>").addClass("list-group-item");
    var eventSpan = $("<span>").addClass("badge").text(eventTime);
    var eventP = $("<p>").addClass("m-1").text(eventText);


    // append span and p element to parent li
  eventLi.append(eventSpan, eventP);

  // check due date
  auditEvent(eventLi);

  // append to ul list on the page
  $("#list-" + eventList).append(eventLi);
}

$(".list-group").on("click", "p", function(){
  console.log("<p> was clicked");
});

// load events

// save events
var saveEvents = function () {
    localStorage.setItem("events", JSON.stringify(events));
    console.log("event saved")
  };

  // event text was clicked
$(".list-group").on("click", "p", function () {
    // get current text of p element
    var text = $(this)
      .text()
      .trim();
  
    // replace p element with a new textarea
    var textInput = $("<textarea>").addClass("form-control").val(text);
    $(this).replaceWith(textInput);

      // update task in array and re-save to localstorage
  tasks[status][index].text = text;
  saveEvents();

  // recreate p element
  var eventP = $("<p>")
    .addClass("m-1")
    .text(text);

  // replace textarea with new content
  $(this).replaceWith(eventP);
});