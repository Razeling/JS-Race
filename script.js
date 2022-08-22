let numberOfCars = 0;
let distance = 0;

function getUserInput(){
    do {
    numberOfCars = +prompt("How many cars will be racing?", 5);
    } while (!isPositiveInteger(numberOfCars));
    do{
    distance = +prompt("How far will they be racing? (Enter meters)", 100);
    }while (!isPositiveInteger(distance));
}

function isPositiveInteger(input){
    return Number.isInteger(input) && input > 0;
}

getUserInput();
console.log(numberOfCars,distance);