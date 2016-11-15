/**
 * Created by mel on 11/15/16.
 */
(function() {
"use strict";
    var puppies = [
        {
            name: 'muffins',
            photo: '<img src= img/muffin.jpeg/>',
            description: 'this dog is as cute as a muffin!',
            spayed: true
        },
        {
            name: 'buddy',
            photo: '<img src = img/buddy.jpeg/>',
            description: 'buddy is just waiting to be your best friend!',
            spayed: false
        },
        {
            name: 'ein',
            photo: '<img src = img/ein.jpeg/>',
            description: 'this corgi has quite seems like he\'s seen outer space...',
            spayed: true
        },
        {
            name: 'nibler',
            photo: '<img src = img/nibler.jpeg/>',
            description: 'this puppy like to nibble, but she won\'t bite!',
            spayed: false
        }
    ];
console.log(puppies);
//    randomly insert puppy objects into html file
//     function getRandomInt(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }
//     var random = puppies[Math.floor(Math.random() * puppies.length)];
//     console.log(random);

    puppies.forEach(function (puppy, i){
        document.getElementsByClassName('puppy-photo')[i].innerHTML = puppy.photo;
        document.getElementsByClassName('puppy-name')[i].innerHTML = '<em>' + puppy.name + '</em>';
        document.getElementsByClassName('description')[i].innerHTML = puppy.description;
        if(puppy.spayed == true){
            document.getElementsByClassName('fixed')[i].innerHTML = "spayed/neutered";
            console.log('spayed');
        } else {
            document.getElementsByClassName('fixed')[i].innerHTML = "spay/neuter voucher included with adoption";
        }
    });

    // });

})();

