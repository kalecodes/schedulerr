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
var hour6 = $("#hr-6").attr("hour", "13");
var hour7 = $("#hr-7").attr("hour", "14");
var hour8 = $("#hr-8").attr("hour", "15");
var hour9 = $("#hr-9").attr("hour", "16");
var hour10 = $("#hr-10").attr("hour", "17");
var hour11 = $("#hr-11").attr("hour", "18");
var hour12 = $("#hr-12").attr("hour", "19");

//Displaying moment.js object hour in each task
$(document).ready(function() {
    $("#hr-1 .hour").text(moment().hour(hour1.attr("hour")).format("h a"));
    $("#hr-2 .hour").text(moment().hour(hour2.attr("hour")).format("h a"));
    $("#hr-3 .hour").text(moment().hour(hour3.attr("hour")).format("h a"));
    $("#hr-4 .hour").text(moment().hour(hour4.attr("hour")).format("h a"));
    $("#hr-5 .hour").text(moment().hour(hour5.attr("hour")).format("h a"));
    $("#hr-6 .hour").text(moment().hour(hour6.attr("hour")).format("h a"));
    $("#hr-7 .hour").text(moment().hour(hour7.attr("hour")).format("h a"));
    $("#hr-8 .hour").text(moment().hour(hour8.attr("hour")).format("h a"));
    $("#hr-9 .hour").text(moment().hour(hour9.attr("hour")).format("h a"));
    $("#hr-10 .hour").text(moment().hour(hour10.attr("hour")).format("h a"));
    $("#hr-11 .hour").text(moment().hour(hour11.attr("hour")).format("h a"));
    $("#hr-12 .hour").text(moment().hour(hour12.attr("hour")).format("h a"));
    
});

//adding hour audit functionality---------------------------------
function timeAudit() {
    var currentTime = moment().hour();

    //---8 am time audit
    function timeAudit1() {
        var taskHour = hour1.attr("hour");

        if (taskHour < currentTime) {
            $("#hr-1 .description").removeClass("present");
            $("#hr-1 .description").removeClass("future");
            $("#hr-1 .description").addClass("past");
        } else if (taskHour == currentTime) {
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

        if (taskHour < currentTime) {
            $("#hr-2 .description").removeClass("present");
            $("#hr-2 .description").removeClass("future");
            $("#hr-2 .description").addClass("past");
        } else if (taskHour == currentTime) {
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

        if (taskHour < currentTime) {
            $("#hr-3 .description").removeClass("present");
            $("#hr-3 .description").removeClass("future");
            $("#hr-3 .description").addClass("past");
        } else if (taskHour == currentTime) {
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

        if (taskHour < currentTime) {
            $("#hr-4 .description").removeClass("present");
            $("#hr-4 .description").removeClass("future");
            $("#hr-4 .description").addClass("past");
        } else if (taskHour == currentTime) {
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

        if (taskHour < currentTime) {
            $("#hr-5 .description").removeClass("present");
            $("#hr-5 .description").removeClass("future");
            $("#hr-5 .description").addClass("past");
        } else if (taskHour == currentTime) {
            $("#hr-5 .description").removeClass("past");
            $("#hr-5 .description").removeClass("future");
            $("#hr-5 .description").addClass("present");
        } else {
            $("#hr-5 .description").removeClass("past");
            $("#hr-5 .description").removeClass("present");
            $("#hr-5 .description").addClass("future");
        }
    }
    //---1 pm time audit
    function timeAudit6() {
        var taskHour = hour6.attr("hour");

        if (taskHour < currentTime) {
            $("#hr-6 .description").removeClass("present");
            $("#hr-6 .description").removeClass("future");
            $("#hr-6 .description").addClass("past");
        } else if (taskHour == currentTime) {
            $("#hr-6 .description").removeClass("past");
            $("#hr-6 .description").removeClass("future");
            $("#hr-6 .description").addClass("present");
        } else {
            $("#hr-6 .description").removeClass("past");
            $("#hr-6 .description").removeClass("present");
            $("#hr-6 .description").addClass("future");
        }
    }
    //--2 pm time audit
    function timeAudit7() {
        var taskHour = hour7.attr("hour");

        if (taskHour < currentTime) {
            $("#hr-7 .description").removeClass("present");
            $("#hr-7 .description").removeClass("future");
            $("#hr-7 .description").addClass("past");
        } else if (taskHour == currentTime) {
            $("#hr-7 .description").removeClass("past");
            $("#hr-7 .description").removeClass("future");
            $("#hr-7 .description").addClass("present");
        } else {
            $("#hr-7 .description").removeClass("past");
            $("#hr-7 .description").removeClass("present");
            $("#hr-7 .description").addClass("future");
        }
    }
    //--3 pmm time audit
    function timeAudit8() {
        var taskHour = hour8.attr("hour");

        if (taskHour < currentTime) {
            $("#hr-8 .description").removeClass("present");
            $("#hr-8 .description").removeClass("future");
            $("#hr-8 .description").addClass("past");
        } else if (taskHour == currentTime) {
            $("#hr-8 .description").removeClass("past");
            $("#hr-8 .description").removeClass("future");
            $("#hr-8 .description").addClass("present");
        } else {
            $("#hr-8 .description").removeClass("past");
            $("#hr-8 .description").removeClass("present");
            $("#hr-8 .description").addClass("future");
        }
    }
    //--4 pm time audit 
    function timeAudit9() {
        var taskHour = hour9.attr("hour");

        if (taskHour < currentTime) {
            $("#hr-9 .description").removeClass("present");
            $("#hr-9 .description").removeClass("future");
            $("#hr-9 .description").addClass("past");
        } else if (taskHour == currentTime) {
            $("#hr-9 .description").removeClass("past");
            $("#hr-9 .description").removeClass("future");
            $("#hr-9 .description").addClass("present");
        } else {
            $("#hr-9 .description").removeClass("past");
            $("#hr-9 .description").removeClass("present");
            $("#hr-9 .description").addClass("future");
        }
    }
    //--5 pm time audit 
    function timeAudit10() {
        var taskHour = hour10.attr("hour");

        if (taskHour < currentTime) {
            $("#hr-10 .description").removeClass("present");
            $("#hr-10 .description").removeClass("future");
            $("#hr-10 .description").addClass("past");
        } else if (taskHour == currentTime) {
            $("#hr-10 .description").removeClass("past");
            $("#hr-10 .description").removeClass("future");
            $("#hr-10 .description").addClass("present");
        } else {
            $("#hr-10 .description").removeClass("past");
            $("#hr-10 .description").removeClass("present");
            $("#hr-10 .description").addClass("future");
        }
    }
    //---6 pm time audit
    function timeAudit11() {
        var taskHour = hour11.attr("hour");

        if (taskHour < currentTime) {
            $("#hr-11 .description").removeClass("present");
            $("#hr-11 .description").removeClass("future");
            $("#hr-11 .description").addClass("past");
        } else if (taskHour == currentTime) {
            $("#hr-11 .description").removeClass("past");
            $("#hr-11 .description").removeClass("future");
            $("#hr-11 .description").addClass("present");
        } else {
            $("#hr-11 .description").removeClass("past");
            $("#hr-11 .description").removeClass("present");
            $("#hr-11 .description").addClass("future");
        }
    }
    //--7 pm time audit
    function timeAudit12() {
        var taskHour = hour12.attr("hour");

        if (taskHour < currentTime) {
            $("#hr-12 .description").removeClass("present");
            $("#hr-12 .description").removeClass("future");
            $("#hr-12 .description").addClass("past");
        } else if (taskHour == currentTime) {
            $("#hr-12 .description").removeClass("past");
            $("#hr-12 .description").removeClass("future");
            $("#hr-12 .description").addClass("present");
        } else {
            $("#hr-12 .description").removeClass("past");
            $("#hr-12 .description").removeClass("present");
            $("#hr-12 .description").addClass("future");
        }
    }

    timeAudit1()
    timeAudit2()
    timeAudit3()
    timeAudit4()
    timeAudit5()
    timeAudit6()
    timeAudit7()
    timeAudit8()
    timeAudit9()
    timeAudit10()
    timeAudit11()
    timeAudit12()

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