/**
 * Created by mel on 11/7/16.
 */
"use strict";

exercise 2
var i = 6;

for (var j = 1; j < 11; j += 1) {
    console.log(i + "x" + j + "=" + (i * j));
}

//exercise 3

for (var i = 1; i <= 10; i++) {
    var x = Math.floor(Math.random() * 180) + 20;
    if (x % 2 == 0) {
        console.log(x + " is even");
    } else {
        console.log(x + " is odd");
    }
}

