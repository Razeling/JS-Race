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

class Car {
    constructor (id){
        this.id = id;
        this.speed = 0;
        this.distance = 0;

    }
    accelerate (howMuch) {
        this.speed += howMuch;
    }
    slowdown(howMuch) {
        this.speed -= howMuch;
        if(this.speed <0) this.speed = 0;

    }
    move(){
        this.distance += this.speed;

    }
}

console.log(new Car(5));

getUserInput();
console.log(numberOfCars,distance);