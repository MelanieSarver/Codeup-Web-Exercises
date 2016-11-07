/**
 * Created by mel on 11/4/16.
 */
"use strict";
var luckyNumber = Math.floor(Math.random()* 6);
console.log ("Your lucky number is " + (luckyNumber));
var total = 60;
var discountPercent = 0;


switch (luckyNumber) {
    case 0 :
        console.log("Better luck next time");
        break;
    case 1 :
        discountPercent = 0.9;
        console.log("You get 10% off. Your total is $" + (total = discountPercent * total));
        break;
    case 2 :
        discountPercent = 0.75;
        console.log("you get 25% off. Your total is $" + (total = discountPercent * total));
        break;
    case 4 :
        discountPercent = 0.5;
        console.log("You get 50% off! Your total is $" + (total = discountPercent * total));
        break;
    case 5 :
        discountPercent = 1;
        console.log("Congratulations! Your cart is FREE!!!!");
        break;
    default :
        console.log("Free Spin");
}

var month = Math.floor(Math.random()* 12);
console.log (month);

switch (month) {
    case 1 :
        console.log("January");
        break;
    case 2 :
        console.log("February");
        break;
    case 3 :
        console.log("March");
        break;
    case 4 :
        console.log("April");
        break;
    case 5 :
        console.log("May");
        break;
    case 6 :
        console.log("June");
        break;
    case 7 :
        console.log("July");
        break;
    case 8 :
        console.log("August");
        break;
    case 9 :
        console.log("September");
        break;
    case 10 :
        console.log("October");
        break;
    case 11 :
        console.log("November");
        break;
    case 12 :
        console.log("December");
        break;
    default :
        console.log("Please enter a valid date.")
}
