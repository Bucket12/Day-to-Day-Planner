//Implementing dayJS to display date on top of screen
let today = dayjs();
$('#currentDay').text(today.format('MMMM DD, YYYY'));


let currentHour = parseInt(dayjs().format("HH"));


//correctly assigns colors to time-div <div>
$(".time-div").each(function() {
  var timeDiv = parseInt($(this).attr("id").split("-")[1]);

  if (currentHour == timeDiv) {
      $(this).addClass("present");
      $(this).children(".description").addClass("present");

  } else if (currentHour < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");

  } else if (currentHour > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
  }
});

//Adds save functionallity to save button when clicked
$(".saveBtn").on('click',function (event) {
  event.preventDefault();
  var value = $(this).siblings(".time-block").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time,value);
});

//Stores tasks in local storage
$("#hour-9 .time-block").val(localStorage.getItem("9"));
$("#hour-10 .time-block").val(localStorage.getItem("10"));
$("#hour-11 .time-block").val(localStorage.getItem("11"));
$("#hour-12 .time-block").val(localStorage.getItem("12"));
$("#hour-13 .time-block").val(localStorage.getItem("13"));
$("#hour-14 .time-block").val(localStorage.getItem("14"));
$("#hour-15 .time-block").val(localStorage.getItem("15"));
$("#hour-16 .time-block").val(localStorage.getItem("16"));
$("#hour-17 .time-block").val(localStorage.getItem("17"));