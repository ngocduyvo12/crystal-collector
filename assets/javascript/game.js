

var imgArray = ["assets/images/black-crystal.png", "assets/images/green-crystal.png", "assets/images/pink-crystal.png", "assets/images/yellow-crystal.png"];


function initializeGame() {

    for (var i = 0; i < imgArray.length; i++) {
        
        var randomNumber = Math.floor(Math.random()* 10)+2;
        // For each iteration, we will create an imageCrystal
        var imageCrystal = $("<img>");
        
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");
    
    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", imgArray[i]);
    
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalValue", randomNumber);
    
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystalButton").append(imageCrystal);
}
}

//call game when browser start
initializeGame();

