(function(){
    "use strict";

    // TODO: Create person object
    var person = {};

    // TODO: Create firstName and lastName properties in your person object; assign your name to them
    person.firstName = "Melanie";
    person.lastName = "Sarver";

    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties
    person.sayHello = function(){
        console.log("Hello from " + person.firstName + " " + person.lastName);
    };

    // Say hello from the person object.
    person.sayHello();
})();
