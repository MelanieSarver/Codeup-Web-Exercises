/**
 * Created by mel on 11/4/16.
 */
"use strict";

var number = 2;

while (number < 65537) {
    console.log(number);
    number = number * 2;
}

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    console.log("I have " + allCones);
    if (allCones <= cones) {
        console.log("Selling")
    }
    var cones = Math.floor(Math.random() * 5) + 1;
    allCones = allCones - cones;
}while (allCones -= cones);
console.log("Sorry folks, all sold out!")

var x = Math.floor(Math.random() * 20) + 1;

do {(x % 2 == 0)
    console.log(x);
}