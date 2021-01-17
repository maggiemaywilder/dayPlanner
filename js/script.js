// variables for luxon
var DateTime = luxon.DateTime;
var today = DateTime.local();
// note: toLocaleString for people
//       toISO, toJSON, toObject, etc for computers
// hour block variables, using something resembling the verbalization of military time for each hour
var oh800 = document.body.children[1].children[0].children[1]; // this is the textarea associated with 8am
var oh900; 
var ten100
var eleven100;
var twelve100;
var thirteen100;
var fourteen100;
var fifteen100;
var sixteen100;
var seventeen100;
var eighteen100;
var nineteen100;
var twenty100;

// variables for displaying on page
var now = document.getElementById('currentDay');
var f = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};

// variables for input (and buttons)

var APP = {
    keybase: 'Maggie-day-planner-',
    keys: [oh800, oh900, ten100, eleven100, twelve100, thirteen100, fourteen100, fifteen100, sixteen100, seventeen100, eighteen100, nineteen100, twenty100],
    // the input data from the fields
};


// functions and methods
now.textContent = today.toLocaleString(f);
// function saveAppt() {
//     // if(save) {
//     //     localStorage stuff
//     // }
// }
// note: d1 < d2 means is d1 before d2?
