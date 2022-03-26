// Update date to users current
var currentDate = moment().format('dddd, MMM Do, YYYY');
$('#currentDay').html(currentDate);

// Check Local Storage when users refresh. Display saved content if applicable. 
$("#time9 .description").val(localStorage.getItem("time9"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time13 .description").val(localStorage.getItem("time13"));
$("#time14 .description").val(localStorage.getItem("time14"));
$("#time15 .description").val(localStorage.getItem("time15"));
$("#time16 .description").val(localStorage.getItem("time16"));
$("#time17 .description").val(localStorage.getItem("time17"));

// Color code time slots and store users inputs when they click save
$(document).ready(function () {

    // Listen for user to save input, store users inputs in local storage
    $('.saveBtn').on('click', function() {
        // Assign users text entry to variable
        var userText = $(this).siblings('.description').val();
        // Assing users corresponding time to variable
        var userTime = $(this).parent().attr("id");
        // Store user inputs in local storage
        localStorage.setItem(userTime, userText);
    })
    
    // Determine current time/hour for users location
    function timeNow() {
        var currentTime = moment().hour();

        // Color code time/hour slots by going checking if slot is greater, equal or less than users currentTime
        $('.plannerRow',document).each(function() {
            var id = $(this).attr('id');
            var plannerTime = parseInt(id.split('time')[1]);

            if (plannerTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (plannerTime === currentTime) {
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");
            }
            else if (plannerTime > currentTime) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        })
    }
    // Call the timeNow function defined above
    timeNow();
})

