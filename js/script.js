$(document).ready(function() {

    // variables for luxon
    const DateTime = luxon.DateTime;
    const Interval = luxon.Interval;
    var today = DateTime.local();
    // note: toLocaleString for people
    //       toISO, toJSON, toObject, etc for computers

    // variables for displaying time on page
    var now = document.getElementById('currentDay');
    var display = document.getElementById('clock');
    var g = {hour: 'numeric', minute: 'numeric'};
    var f = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'};

    // display current date and time
    now.textContent = today.toLocaleString(f);
    display.textContent = today.toLocaleString(g);

    // hour block variables, using something resembling the verbalization of military time for each hour
    var oh800 = document.body.children[1].children[0].children; // this is the row associated with 8am
    var oh900 = document.body.children[1].children[1].children; 
    var ten100 = document.body.children[1].children[2].children;
    var eleven100 = document.body.children[1].children[3].children;
    var twelve100 = document.body.children[1].children[4].children;
    var thirteen100 = document.body.children[1].children[5].children;
    var fourteen100 = document.body.children[1].children[6].children;
    var fifteen100 = document.body.children[1].children[7].children;
    var sixteen100 = document.body.children[1].children[8].children;
    var seventeen100 = document.body.children[1].children[9].children;
    var eighteen100 = document.body.children[1].children[10].children;
    var nineteen100 = document.body.children[1].children[11].children;
    var twenty100 = document.body.children[1].children[12].children;
    var twentyone100 = document.body.children[1].children[13].children;
    var twentytwo100 = document.body.children[1].children[14].children;
    // console.log(oh800[2]);  ***** this is the save button attached to 8am
    var hourAreas = [oh800, oh900, ten100, eleven100, twelve100, thirteen100, fourteen100, fifteen100, sixteen100, seventeen100, eighteen100, nineteen100, twenty100, twentyone100, twentytwo100]


    // variables for input (and buttons)
    
//     $('.saveBtn').on('click', function() {
//         // function to do local storage
//     })
//     // functions and methods
//     $('textarea').on('load', function() {
//         var $currentTime;
//         $(hourAreas).each(function() {
//             $blockStart = today.startOf('day').plus({hours: (8 + $currentElem)});
//             $blockEnd = today.startOf('day').plus({hours: ((9) + $currentElem)});
//             $color = hourAreas[$currentElem][1];
//             $currentElem = $(this);
//             console.log(this);
//         })



    // event listeners (need one for whole section of hour blocks to input into any of them)
    // $(".saveBtn").on("click", saveItem);
// })

    function colorCode() {
        for (var i = 0; i < hourAreas.length; i++) {
            var blockStart = today.startOf('day').plus({hours: (8+i)});
            var blockEnd = today.startOf('day').plus({hours: ((9)+i)});
            var color = hourAreas[i][1];
            if (today > blockEnd) {
                color.className = "col-8 past";
            } else if (today > blockStart && today < blockEnd){
                color.className = "col-8 present";
            } else {
                color.className = "col-8 future";
            };
    // need to display from local storage
        }

    }

    function loadItems() {
        var keybase = "Maggie-day-planner-";
        var storage = localStorage.getItem(keybase);
            // console.log("I made it this far");

        if(true) {
            for(var j = 0; j < hourAreas.length; j++) {
              var item = hourAreas[j][1];
              console.log($(this), item)
                // $(this).text
            }
            
        //     $(time[1]).text
        // }
        }
    }
    $('.saveBtn').on('click', function (ev) {
        ev.preventDefault();
        var keybase = "Maggie-day-planner-";
        var button = $('.saveBtn');
        hourAreas;
        if(true) {
            for(var k = 0; k < hourAreas.length; k++) {
                var timeStart = today.startOf('day').plus({hours: (8+k)});
                var key = keybase + timeStart;
                var event = (hourAreas[k][1].value);
                localStorage.setItem(key, JSON.stringify(event));
                console.log(localStorage);
            }
             
        console.log(button);
    }} )
        // if(save) {
        //     localStorage stuff
        // }

        // calling functions
    colorCode();
    loadItems();
    // document.addEventListener('DOMContentLoaded', fillSchedule)

    })
