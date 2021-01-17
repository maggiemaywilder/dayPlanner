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
    var t = {month: 'long', day: 'numeric', }

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
    // variables for input (and localStorage)
    var times = [oh800[1], oh900[1], ten100[1], eleven100[1], twelve100[1], thirteen100[1], fourteen100[1], fifteen100[1], sixteen100[1], seventeen100[1], eighteen100[1], nineteen100[1], twenty100[1], twentyone100[1], twentytwo100[1]]

    function colorCode() {
        for (var i = 0; i < hourAreas.length; i++) {
            var blockStart = today.startOf('day').plus({hours: (8+i)});
            var blockEnd = today.startOf('day').plus({hours: ((9)+i)});
            var color = hourAreas[i][1];
            if (today > blockEnd) {
                color.className = "col-8 past";
            } else if (today > blockStart && today < blockEnd) {
                color.className = "col-8 present";
            } else {
                color.className = "col-8 future";
            };
        }
    }

    function loadItems() {
            var schedule = localStorage;

            times[0].textContent = schedule['8:00 AM'];
            times[1].textContent = schedule['9:00 AM'];
            times[2].textContent = schedule['10:00 AM'];
            times[3].textContent = schedule['11:00 AM'];
            times[4].textContent = schedule['12:00 PM'];
            times[5].textContent = schedule['1:00 PM'];
            times[6].textContent = schedule['2:00 PM'];
            times[7].textContent = schedule['3:00 PM'];
            times[8].textContent = schedule['4:00 PM'];
            times[9].textContent = schedule['5:00 PM'];
            times[10].textContent = schedule['6:00 PM'];
            times[11].textContent = schedule['7:00 PM'];
            times[12].textContent = schedule['8:00 PM'];
            times[13].textContent = schedule['9:00 PM'];
            times[14].textContent = schedule['10:00 PM'];
            };
        
        
    $('.saveBtn').on('click', function (ev) {
        ev.preventDefault();
        hourAreas;
        if(true) {
            for(var k = 0; k < hourAreas.length; k++) {
                var timeStart = today.startOf('day').plus({hours: (8+k)}).toLocaleString(g);
                var key = timeStart;
                var event = (hourAreas[k][1].value);
                console.log(event);
                localStorage.setItem(key, event);
            }
        }    
    } )

    
        // calling functions
    colorCode();
    loadItems();
    })
