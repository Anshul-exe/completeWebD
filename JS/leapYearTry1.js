function isLeap(year) {
        
        var leap;
        if (year%4 == 0 && year%400 == 0){
            leap = "Leap year"
        }
        else if (year%4 == 0 && year%100 == 0) {
            leap = "Not Leap year."
        } else { leap = "something went wrong."}
        
        return leap;
     
    }