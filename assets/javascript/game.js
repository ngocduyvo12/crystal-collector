

//Image array
var imgArray = ["assets/images/black-crystal.png", "assets/images/green-crystal.png", "assets/images/pink-crystal.png", "assets/images/yellow-crystal.png"];
//Random Target number
var targetNumber = 53;
//Assign the target number into html
$("#random").text(targetNumber);
//set score counter for player
var counter = 0;
//set win count:
var wins = 0;
//set losses count:
var losses = 0;
//create a random number array with same length as imgArray:
var randomNumberArray = [];


//populate randomNumberArray with random numbers. This can also be used to reset the game and reassign value to crystals. Therefore make this a function to be called upon:
function reset() {

    for (var i = 0; i < imgArray.length; i++) {

        var numberOptions = Math.floor(Math.random() * 10) + 2;
        randomNumberArray.push(numberOptions);
    }
}


//Use for loop to loop through the imgArray and append assign img id to html
for (var i = 0; i < imgArray.length; i++) {
    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");
    //add class to each crystal to be called upon
    imageCrystal.addClass("crystal-image");
    //add the src to img. point to imgArray to get pictures from there
    imageCrystal.attr("src", imgArray[i]);

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalValue", randomNumberArray[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
}



// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalValue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;
    $("#total").text(counter);
    // All of the same game win-lose logic applies. So the rest remains unchanged.

    if (counter === targetNumber) {
        alert("You win!");
        counter = 0;
        initializeGame();
    }

    else if (counter >= targetNumber) {
        alert("You lose!!");
        counter = 0;
        initializeGame();
    }

});
