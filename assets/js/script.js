//Displays current date and time on page load, updates time every 15 seconds
$(document).ready(function() {
    $("#currentDay").text( moment().format("[Today is] dddd, MMMM Do YYYY"));
    $("#currentTime").text( moment().format("[The time is] h:mm a"))
});

setInterval(function(){
    $(document).each(function(){
        $("#currentTime").text( moment().format("[The time is] h:mm a"))
    })
}, (15 * 1000));
//----------------------------DO NOT TOUCH ABOVE THIS LINE----------------------------

//creating hour attribute
var hour1 = $("#hr-1").attr("hour", "08");
var hour2 = $("#hr-2").attr("hour", "09");
var hour3 = $("#hr-3").attr("hour", "10");
var hour4 = $("#hr-4").attr("hour", "11");
var hour5 = $("#hr-5").attr("hour", "12");

//Displaying moment.js object hour in each task
$(document).ready(function() {
    $("#hr-1 .hour").text(moment().hour(hour1.attr("hour")).format("h a"));
    $("#hr-2 .hour").text(moment().hour(hour2.attr("hour")).format("h a"));
    $("#hr-3 .hour").text(moment().hour(hour3.attr("hour")).format("h a"));
    $("#hr-4 .hour").text(moment().hour(hour4.attr("hour")).format("h a"));
    $("#hr-5 .hour").text(moment().hour(hour5.attr("hour")).format("h a"));
});

//adding hour audit functionality---------------------------------
function timeAudit() {
    var currentTime = moment().hour();

    //---8 am time audit
    function timeAudit1() {
        var taskHour = hour1.attr("hour");
        console.log(currentTime);
        console.log(taskHour);

        if (taskHour < currentTime) {
            $("#hr-1 .description").removeClass("present");
            $("#hr-1 .description").removeClass("future");
            $("#hr-1 .description").addClass("past");
        } else if (taskHour === currentTime) {
            $("#hr-1 .description").removeClass("past");
            $("#hr-1 .description").removeClass("future");
            $("#hr-1 .description").addClass("present");
        } else {
            $("#hr-1 .description").removeClass("past");
            $("#hr-1 .description").removeClass("present");
            $("#hr-1 .description").addClass("future");
        }
    }
    //--9am time audit
    function timeAudit2() {
        var taskHour = hour2.attr("hour");
        console.log(currentTime);
        console.log(taskHour);

        if (taskHour < currentTime) {
            $("#hr-2 .description").removeClass("present");
            $("#hr-2 .description").removeClass("future");
            $("#hr-2 .description").addClass("past");
        } else if (taskHour === currentTime) {
            $("#hr-2 .description").removeClass("past");
            $("#hr-2 .description").removeClass("future");
            $("#hr-2 .description").addClass("present");
        } else {
            $("#hr-2 .description").removeClass("past");
            $("#hr-2 .description").removeClass("present");
            $("#hr-2 .description").addClass("future");
        }
    }
    //--10am time audit
    function timeAudit3() {
        var taskHour = hour3.attr("hour");
        console.log(currentTime);
        console.log(taskHour);

        if (taskHour < currentTime) {
            $("#hr-3 .description").removeClass("present");
            $("#hr-3 .description").removeClass("future");
            $("#hr-3 .description").addClass("past");
        } else if (taskHour === currentTime) {
            $("#hr-3 .description").removeClass("past");
            $("#hr-3 .description").removeClass("future");
            $("#hr-3 .description").addClass("present");
        } else {
            $("#hr-3 .description").removeClass("past");
            $("#hr-3 .description").removeClass("present");
            $("#hr-3 .description").addClass("future");
        }
    }
    //--11am time audit 
    function timeAudit4() {
        var taskHour = hour4.attr("hour");
        console.log(currentTime);
        console.log(taskHour);

        if (taskHour < currentTime) {
            $("#hr-4 .description").removeClass("present");
            $("#hr-4 .description").removeClass("future");
            $("#hr-4 .description").addClass("past");
        } else if (taskHour === currentTime) {
            $("#hr-4 .description").removeClass("past");
            $("#hr-4 .description").removeClass("future");
            $("#hr-4 .description").addClass("present");
        } else {
            $("#hr-4 .description").removeClass("past");
            $("#hr-4 .description").removeClass("present");
            $("#hr-4 .description").addClass("future");
        }
    }
    //--12pm time audit 
    function timeAudit5() {
        var taskHour = hour5.attr("hour");
        console.log(currentTime);
        console.log(taskHour);

        if (taskHour < currentTime) {
            $("#hr-5 .description").removeClass("present");
            $("#hr-5 .description").removeClass("future");
            $("#hr-5 .description").addClass("past");
        } else if (taskHour === currentTime) {
            $("#hr-5 .description").removeClass("past");
            $("#hr-5 .description").removeClass("future");
            $("#hr-5 .description").addClass("present");
        } else {
            $("#hr-5 .description").removeClass("past");
            $("#hr-5 .description").removeClass("present");
            $("#hr-5 .description").addClass("future");
        }
    }

    timeAudit1()
    timeAudit2()
    timeAudit3()
    timeAudit4()
    timeAudit5()
}

timeAudit();

//-------------------------End hour audit------------------------

//processing click event to save task description
$(".saveBtn").on("click", function() {
    console.log(this);
    var descripText = $(this)
    var time = $(this).attr("id")

    localStorage.setItem(time, text)
})