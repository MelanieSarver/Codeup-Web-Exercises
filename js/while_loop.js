/**
 * Created by mel on 11/4/16.
 */
"use strict";
// (function() {

    // Exercise 3
    var number = 2;

    while (number < 65537) {
        console.log(number);
        number = number * 2;
    }

    //Exercise 2

    var sold = function(x,y) {
        return(x-y)
    };
    var allCones = Math.floor(Math.random() * 50) + 50;

    do {
        console.log("I have " + allCones);
        var cones = Math.floor(Math.random() * 5) + 1;
        if (allCones >= cones) {
            console.log("Selling " + cones);
            allCones = sold(allCones, cones);
        }
    } while (allCones > 0);

    console.log("Sorry folks, all sold out!");

    // var even = Math.floor(Math.random() * 20) + 1;

    // do {
    //     (even % 2 == 0);
    //     console.log(even);
    // } while (even % 2 != 0);

// })();

