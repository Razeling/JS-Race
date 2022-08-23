let numberOfCars = 0;
let distance = 0;
let cars = [];

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

function drawCars(amount){
    for (let i = 0; i < amount; i++){
        cars.push(new Car(i));
    }
    cars.forEach((car) => {
        const newCar = document.createElement('div');
        newCar.classList.add('car');
        newCar.style.top = 60 * car.id + 'px';
        document.querySelector('body').append(newCar);
    });
}

function drawFinishLine(amountOfCars, distanceToCover) {
    const finishLine = document.createElement('div');
    finishLine.classList.add('finishLine');
    finishLine.style.height = 60 * amountOfCars + 'px';
    finishLine.style.left = 100 + distanceToCover + 'px';
    document.querySelector('body').append(finishLine);
}

function pace(){
    cars.forEach((car) => {
        const increment = Math.random() * 6;
        if (Math.random() > 0.5) {
            car.accelerate(increment);
        } else {
            car.slowdown(increment);
        }
        console.log(car.speed);
    });
}

function move() {
    cars.forEach((car) => {
        car.move();
        document.querySelectorAll('.car')[car.id].style.left = car.distance + 'px';
        console.log(car.distance);
    });
}


getUserInput();
drawCars(numberOfCars);
drawFinishLine(numberOfCars, distance);
pace();

let paceInterval = setInterval(pace, 2000);
let moveInterval = setInterval(move, 500);
console.log(cars);