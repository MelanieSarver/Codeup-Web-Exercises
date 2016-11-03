/**
 * Created by mel on 11/3/16.
 */
"use strict";
var x = 70;
var y = 80;
var z = 95;
var avg = (x + y + z) / 3;

if (avg > 80) {
    console.log("You're Awesome")
} else {
    console.log("You need to practice more")
}

var cameron = 180;
var ryan = 250;
var george = 320;
var discount = 25;

if (cameron > 200) {
    console.log("Cameron pays $" + (cameron - discount))
} else {
    console.log("Cameron pays $" + (cameron) + ". Sorry, no discount today.")
}
if (ryan > 200) {
    console.log("Ryan pays $" + (ryan - discount))
} else {
    console.log("Ryan pays $" + (ryan) + ". Sorry, no discount today.")
}
if (george > 200) {
    console.log("George pays $" + (george - discount))
} else {
    console.log("George pays $" (george) + ". Sorry, no discount today.")
}


var flipACoin = Math.floor(Math.random()* 2)

if (flipACoin == 0) {
    console.log("You get a car!!")
} else {
    console.log("I know a good agent.")
}

