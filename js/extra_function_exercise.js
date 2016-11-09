/**
 * Created by mel on 11/8/16.
 */
"use strict";



var userNumberOne = parseInt(prompt("Please select a number"));
    while(!userNumberOne) {
         userNumberOne = parseInt(prompt("Please select a number"));
    }
var userNumberTwo = parseInt(prompt("Please select a second number"));
while(!userNumberTwo) {
    userNumberTwo = parseInt(prompt("Please select a second number"));
}


var userFunction = prompt("Would you like to add, subtract, divide, or multiply?");
while(!userFunction) {
    userFunction = prompt("Would you like to add, subtract, divide, or multiply?");
}
switch(userFunction) {
    case "add":
        var addition = function (a, b) {
            console.log(a + b);
        };
        addition(userNumberOne, userNumberTwo);
        break;

    case "subtract":
        var subtraction = function (a, b) {
            console.log(a - b);
        };
        subtraction(userNumberOne, userNumberTwo);
        break;

    case "divide":
        var division = function (a, b) {
            console.log(a / b);
        };
        division(userNumberOne, userNumberTwo);
        break;

    case "multiply":
        var multiply = function (a, b) {
            console.log(a * b);
        };
        multiply(userNumberOne, userNumberTwo);
        break;
    default:
        alert("I don't know that function. Please refresh and try again")
}

