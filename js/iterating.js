(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ['Jeff', 'Melanie', 'Devin', 'Flynn'];

    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);

    // TODO: Create log statements that will print each of the names array elements individually.
    for(var i = 0; names.length; i++) {
        console.log("name " + (i+1) + " " + names[i]);
    }
    // This is broken. Not sure why. Don't push to Git til it's fixed
    names.forEach(function (name) {
        console.log("name: " + name);
    });
})();
