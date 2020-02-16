

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
//set state of the game to prevent playing until clicking on the new game button:
var isFinished = false;

//populate randomNumberArray with random numbers. This can also be used to reset the game and reassign value to crystals. Therefore make this a function to be called upon:
function reset() {

    counter = 0;
    //generate new target number between 100 to 130
    targetNumber = Math.floor(Math.random() * 30) + 100;
    //Random Target number
    //Assign the target number into html
    $("#random").text(targetNumber);
    //Assign the counter to html
    $("#total").text(counter);
    //clear away status text
    $("#statusText").text("")
    //set state to false so button can be clicked on again
    isFinished = false;
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
        //assign random number from 2 to 12 to data-crystalValue
        imageCrystal.attr("data-crystalValue", Math.floor(Math.random() * 10) + 2);
        //append to html
        $("#crystals").append(imageCrystal);
    }
}

//Call createCrystal function to create crystals
createCrystals()

//Set up click even and retrieve data-crystalValue
$("#crystals").on("click", ".crystal-image", function () {

    //CHeck to see if the game is already finished. if it is prevent further action.
    if (isFinished) {
        return false;
    }

    //retrieve data-crystalValue
    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);

    //update clicked value to player's counter
    counter += crystalValue;
    $("#total").text(counter);

    //Win condition will occur when the counter is exactly equal to the target number
    if (counter === targetNumber) {
        wins++;
        $("#winCount").text(wins);
        $("#statusText").text("You WON! Click NEW GAME to start a new game!")
        //set state isFinished to true to end the loop
        isFinished = true;
    }
    //lose condition will occur when the counter is larger than the target number
    else if (counter >= targetNumber) {
        losses++;
        $("#lossesCount").text(losses);
        $("#statusText").text("You LOST! Click NEW GAME to start a new game!")
        //set state to finished to end the loop
        isFinished = true;
    }
})

//Replace with new crystals and start new game.
$("#reset").on("click", function () {
    $("#crystals").empty()
    reset();
    createCrystals();
})
