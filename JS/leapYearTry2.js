function isLeap(year) {
    
        var leap
        if (leapOnot(year) && year % 400 === 0) {
            leap = "Leap year";
        }
        else if (leapOnot(year) && year % 100 === 0){
            leap = "Not leap year";
        }
        else{
            leap = "Error"
        }
        return leap
    
    }
    function leapOnot (year){
        var check = year % 4
        return check;
    }
    isLeap(2000)