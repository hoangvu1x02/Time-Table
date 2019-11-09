//get and display the current date and time
var currentDay = moment().format('LLLL');
$("#currentDay").text(currentDay);

//get the current hour
var currenthour = moment().get('hour');
console.log(typeof (currenthour), currenthour);

//Declaring variables
var nineam = $("#9am");
var tenam = $("#10am");
var elevenam = $("#11am");
var twelvepm = $("#12pm");
var onepm = $("#1pm");
var twopm = $("#2pm");
var threepm = $("#3pm");
var fourpm = $("#4pm");
var fivepm = $("#5pm");

var workinghours = [nineam, tenam, elevenam, twelvepm, onepm, twopm, threepm, fourpm, fivepm];


//Changing schedule color accdoring to time
for (var i = 0; i < workinghours.length; i++) {
    var convert = parseInt(workinghours[i].attr("value"));

    if (currenthour == convert) {
        $(workinghours[i]).css("background-color", "red");
        $(workinghours[i]).css("color", "white");
    } else if (currenthour < convert) {
        $(workinghours[i]).css("background-color", "limegreen");
        $(workinghours[i]).css("color", "white");
    } else if (currenthour > convert) {
        $(workinghours[i]).css("background-color", "grey");
        $(workinghours[i]).css("color", "white");
    };
}

//Storing data in localstorage
$(".btn").on("click", function () {
    var note = $(this).prev(".note").val();
    localStorage.setItem($(this).prev(".note").attr("id"), note);
})