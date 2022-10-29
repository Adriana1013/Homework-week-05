// setting the current date
var time = moment().format("dddd MMM Do YYYY, h:mma");
$("#currentDay").text(time);

// current time
function timeUpdate() {
  var currentTime = moment().hour();


//Save appointment to local storage when save button is clicked
$(".saveBtn").on("click", function () {
  var content = $(this).siblings(".description").val();
  var scheduledTime = $(this).siblings(".hour").text();

  localStorage.setItem(scheduledTime, content);
})

//loop time block
$(".time-block").each(function () {
  var timeBlockLoop = parseInt($(this).attr("id").split("hour")[1]);


//check if selected time is in the past
  if (timeBlockLoop < currentTime) {
    $(this).addClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
}
//check if selected time is in the present 
else if (timeBlockLoop === currentTime) {
    $(this).removeClass("past");
    $(this).addClass("present");
    $(this).removeClass("future");
}
//check if selected time is in the future
else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
}
})
};

// local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour1 .description").val(localStorage.getItem("hour1"));
$("#hour2 .description").val(localStorage.getItem("hour2"));
$("#hour3 .description").val(localStorage.getItem("hour3"));
$("#hour4 .description").val(localStorage.getItem("hour4"));
$("#hour5 .description").val(localStorage.getItem("hour5"));

timeUpdate();
