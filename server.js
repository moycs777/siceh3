
var five = require("johnny-five"),
  board, led;

var Firebase = require('firebase');

var myFirebaseRef = new Firebase('https://moy.firebaseio.com/');

myFirebaseRef.set({
              led1: "on",
              led2: "on",
              led3: "on"
});


//myRootRef.set( ledStatus);

console.log(myFirebaseRef+' ok');

myFirebaseRef.child("led1").on("value", function(snapshot) {
  console.log(snapshot.val());  // Alerts "San Francisco"
});

myFirebaseRef.child("led2").on("value", function(snapshot) {
  console.log(snapshot.val());  // Alerts "San Francisco"
});

myFirebaseRef.child("led3").on("value", function(snapshot) {
  console.log(snapshot.val());  // Alerts "San Francisco"
}); 


//Jonny-five section
    // or "./lib/johnny-five" when running from the source
    board = new five.Board();

board.on("ready", function() {

  (new five.Led(13));

  (new five.Led(9));

  (new five.Led(8));

  led = new five.Led({
    pin: 13
  });

  led2 = new five.Led({
    pin: 9
  });

  led3 = new five.Led({
    pin: 8
  });

  // "on" turns the led _on_
  //led.on();

  

   myFirebaseRef.child("led1").on("value", function(snap) {
    if(snap.val() == "on") {
      led.on();
      
    }; if (snap.val() == "off") {
      led.off();
      

    }
  })

   myFirebaseRef.child("led2").on("value", function(snap) {
    if(snap.val() == "on") {
      led2.on();
      
    }; if (snap.val() == "off") {
      led2.off();
      

    }
  })

    myFirebaseRef.child("led3").on("value", function(snap) {

     

    if(snap.val() == "on") {
      led3.on();
      
    }; if (snap.val() == "off") {
      led3.off();
      

    }
  })
  

});