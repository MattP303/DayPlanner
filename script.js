// Update date to users current
var currentDate = moment().format('dddd, MMM Do, YYYY');
$('#currentDay').html(currentDate);

// Check Local Storage when users refresh. Display saved content if applicable. 
$("#time9 .description").val(localStorage.getItem("time9"));
$("#time10 .description").val(localStorage.getItem("time10"));
$("#time11 .description").val(localStorage.getItem("time11"));
$("#time12 .description").val(localStorage.getItem("time12"));
$("#time1 .description").val(localStorage.getItem("time1"));
$("#time2 .description").val(localStorage.getItem("time2"));
$("#time3 .description").val(localStorage.getItem("time3"));
$("#time4 .description").val(localStorage.getItem("time4"));
$("#time5 .description").val(localStorage.getItem("time5"));

// Color code time slots and store users inputs when they click save
$(document).ready(function () {

    // Listen for user to save input, store users inputs in local storage
    $('.saveBtn').on('click', function() {
        // Assign users text entry to variable
        var userText = $(this).siblings('.description').val();
        // Assing users corresponding time to variable
        var userTime = $(this).parent().attr("id");
        // Store user inputs in local storage
        localStorage.setItem(userText, userTime);
    })
    
    // Determine current time/hour for users location
    function timeNow() {
        var currentTime = moment().hour();

        // Color code time/hour slots by going checking if slot is greater, equal or less than users currentTime
        $('.plannerRow').each(function() {
            var plannerTime = parseInt($(this).attr('id').split('hour')[1]);

            if (plannerTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (plannerTime === currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (plannerTime > currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
        })
    }
    // Call the timeNow function defined above
    timeNow();
})

