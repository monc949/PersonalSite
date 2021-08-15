function Time() {
    // Creating object of the Date class
        var currentdate = new Date();

    // Get current date
        var date = currentdate.getDate();

    // Get current date
        var day = currentdate.getDay();

    // Get current hour
        var hour = currentdate.getHours();

    // Get current minute
        var minute = currentdate.getMinutes();

    // Get current second
        var second = currentdate.getSeconds();

    // Variable to store AM / PM
        var period = "";

    // Assigning AM / PM according to the current hour
        if (hour >= 12) {
            period = "PM";
        } else {
            period = "AM";
        }

    // Converting the hour in 12-hour format
        if (hour == 0) {
            hour = 12;
        } else {
        if (hour > 12) {
            hour = hour - 12;
        }
    }
        day = convertDay(day);


    // Updating minute, and second
    // if they are less than 10
        minute = update(minute);
        second = update(second);

    // Adding time elements to the div
        document.getElementById("digital-clock").innerText = hour + ":" + minute + ".";
        document.getElementById("second").innerText = second;
        document.getElementById("period").innerText = period;
        document.getElementById("date").innerText = day + " " + date;

    // Set Timer to 1 sec (1000 ms)
        setTimeout(Time, 1000);

   }


    // Function to update time elements if they are less than 10
    // Append 0 before time elements if they are less than 10


   function convertDay(n) {
       let dayName = "";
        switch (n) {
            case 0:
                    dayName = "Su"
                break;
            case 1:
                    dayName = "Mo"
                break;
            case 2:
                    dayName = "Tu"
                break;
            case 3:
                    dayName = "We"
                break;
            case 4:
                    dayName = "Th"
                break;
            case 5:
                    dayName = "Fr"
                break;
            case 6:
                    dayName = "Sa"
                break;

        
            default:
                break;
        }
        return dayName;
   }


   function update(t) {
        if (t < 10) {
            return "0" + t;
        }
        else {
            return t;
        }
    }
   Time();

