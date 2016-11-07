/**
 * Created by mel on 11/7/16.
 */
"use strict";

//exercise 2
var p = Math.floor((Math.random()*50)+1);

while (p % 2 == 0) {
    p = Math.floor((Math.random()*50)+1);
}
console.log("Random odd number to skip is: " + p);

// exercise 3
for (var n = 1; n <= 50; n += 2) {
    if (n == p) {
        console.log("Yikes! Skipping number: " + n);
    } else {
        console.log("Here is an odd number: " + n);
    }
}
// This was a break/continue exercise, but break/continue sucks, so I wrote the code without it.... "KISS Code"

// for (var m = 1, m <= 50; m += 1) {
//     if (i % 2 == 0) {
//         continue;
//     } if (m == p) {
//     console.log("Yikes! Skipping number: " + m);
// } else {
//     console.log("Here is an odd number: " + m);
//     }
// }
