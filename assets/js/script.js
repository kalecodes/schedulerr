$(document).ready(function() {
    $("#currentDay").text( moment().format("[Today is] dddd, MMMM Do YYYY"));
    $("#currentTime").text( moment().format("[The time is] h:mm a"))
});

setInterval(function(){
    $(document).each(function(){
        $("#currentTime").text( moment().format("[The time is] h:mm a"))
    })
}, (15 * 1000));

