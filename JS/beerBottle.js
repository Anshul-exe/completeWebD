function peg(){
    var noOfBeerBottle = 99;
    while (noOfBeerBottle >= 1) {

    console.log(noOfBeerBottle+ " bottles of beer on the wall, "+noOfBeerBottle+" bottles of beer.");
    noOfBeerBottle--;
        
        if (noOfBeerBottle === 0) {
    console.log("Take one down and pass it around, no more bottle of beer on the wall.");
        } else {
    console.log("Take one down and pass it around, "+noOfBeerBottle+" bottles of beer on the wall.");
        }
    }
    console.log("No more bottle of beer on the wall, no more bottle of beer. \nGo to the store and buy some more, 99 bottle of beer on the wall.");
}