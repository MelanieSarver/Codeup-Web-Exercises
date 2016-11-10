/**
 * Created by mel on 11/3/16.
 */
"use strict";
(function() {
    //Average 3 grades and console.log the appropriate message.

    var avg = function(x,y,z) {
        return(x + y + z) / 3;
    };

    var gradeOne = 70;
    var gradeTwo = 80;
    var gradeThree = 95;

    if (avg(gradeOne,gradeTwo,gradeThree) > 80) {
        console.log("You're Awesome")
    } else {
        console.log("You need to practice more")
    }


    //Decide which customers get a discount and how much they should pay.
    var discount = 25;
    var discountMin = 200;
    var groceries = 180;

    var total = function(x) {
        return(x - discount);
    };

    if (groceries > discountMin) {
        console.log("Cameron pays $" + total(groceries));
    } else {
        console.log("Cameron pays $" + groceries + ". Sorry, no discount today.");
    }
    groceries = 250;
    if (groceries > discountMin) {
        console.log("Ryan pays $" + total(groceries));
    } else {
        console.log("Ryan pays $" + groceries + ". Sorry, no discount today.");
    }
    groceries = 320;
    if (groceries > discountMin) {
        console.log("George pays $" + total(groceries));
    } else {
        console.log("George pays $" + groceries + ". Sorry, no discount today.");
    }


    var flipACoin = Math.floor(Math.random() * 2);

    if (flipACoin == 0) {
        console.log("You get a car!!")
    } else {
        console.log("I know a good agent.")
    }








})();

