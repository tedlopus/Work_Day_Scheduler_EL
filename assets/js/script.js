//var container = document.getElementsByClassName("container");

// Use moment to display todays date
var clock = setInterval(function(){
var today = moment().format('MMMM Do YYYY');
var todaysTime = moment().format("H A");
$("#currentDay").text(today + "/n " + todaysTime);
},1000)
//

// Create a table for the time blocks and make it so text can be written in each time block
//function createTimeblocks() {

//}

// Write a function for you to save the text for each in local storage - maybe an event listener will work



// Refreshing the page should not affect what it is saved in the planner


//createTimeblocks();

$(".saveBtn").on("click", function(){
    var userSave = $(this).siblings("textarea").val()
    var timeBlock = $(this).parent().attr("id")
    console.log(userSave, timeBlock)

})