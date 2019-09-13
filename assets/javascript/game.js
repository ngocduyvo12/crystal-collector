

//Image array
var imgArray = [
    "assets/images/black-crystal.png",
    "assets/images/green-crystal.png",
    "assets/images/pink-crystal.png",
    "assets/images/yellow-crystal.png"];
//set score counter for player
var counter = 0;
//set win count:
var wins = 0;
//set losses count:
var losses = 0;
//create a random number array with same length as imgArray:
var randomNumberArray = [];
//empty target number variable to assign number later
var targetNumber = "";

//populate randomNumberArray with random numbers. This can also be used to reset the game and reassign value to crystals. Therefore make this a function to be called upon:
function reset() {

    counter = 0;
    targetNumber = Math.floor(Math.random() * 50) + 100;
    //Random Target number
    //Assign the target number into html
    $("#random").text(targetNumber);
    //
    $("#total").text(counter);
    //initialize randomNumberArray to repopulate whenever function reset is called
    //randomNumberArray = [];
}

reset()

function createCrystals() {
    //Use for loop to loop through the imgArray and append assign img id to html
    for (var i = 0; i < imgArray.length; i++) {
        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");
        //add class to each crystal to be called upon
        imageCrystal.addClass("crystal-image");
        //add the src to img. point to imgArray to get pictures from there
        imageCrystal.attr("src", imgArray[i]);
        imageCrystal.attr("id", "crystal-buttons")
        //assign number grabbed from randomNumberArray to a new element for the img
        imageCrystal.attr("data-crystalValue", Math.floor(Math.random() * 10) + 2);
        //append to html
        $("#crystals").append(imageCrystal);
    }
}

createCrystals()

// This time, our click event applies to every single crystal on the page. Not just one.
$("#crystals").on("click", ".crystal-image", function () {

    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    $("#total").text(counter);
    // All of the same game win-lose logic applies. So the rest remains unchanged.
    
    if (counter === targetNumber) {
        wins++;
        $("#winCount").text(wins);
        $("#statusText").text("You WON! Click NEW GAME to start a new game!")
        //reset();
    }
    
    else if (counter >= targetNumber) {
        losses++;
        $("#lossesCount").text(losses);
        $("#statusText").text("You LOST! Click NEW GAME to start a new game!")
        //reset();
    }
})

$("#reset").on("click", function () {
    $("#crystals").empty()
    reset();
    createCrystals();
})
