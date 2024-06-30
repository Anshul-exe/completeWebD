function isLeap(year) {

        var leap
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (year % 400 == 0) {
                    leap = "Leap year."
                } else { leap = "Not leap year."}
            } else {
                leap = "Leap year."
            }
        } else {
            leap = "Not leap year."
        }
        return leap
        
    }