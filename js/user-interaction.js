"use strict";

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.
var response = prompt("What is your name?");
    while (response == "" || response == null) {
        response = prompt("What is your name?")
    }
//while (!username) { works much easier :(

// TODO: Show an alert message that welcomes the user based on their input.

alert("Welcome, " + response);

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.

var pizza = confirm("Do you like pizza? (Click Okay for Yes, Cancel for No)");
if (pizza) {
    alert(response + " is a Ninja Turtle!!!!")
} else {
    alert( response + " is an alien spy!!")
}
