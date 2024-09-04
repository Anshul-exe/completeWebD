function bmiCalculator (weight, height) {
    var bmi = Math.round(weight/(Math.pow(height, 2)));
    var interpretation
    if (bmi <= 18.5) {
    interpretation = "Your BMI is "+bmi+", so you are underweight.";
    } else if ( 18.5 < bmi && bmi <= 24.9 ){
        interpretation = "Your BMI is "+bmi+", so you have a normal weight.";
    } else if ( bmi > 24.9){
        interpretation = "Your BMI is "+bmi+", so you are overweight.";
    }
    else{
        interpretation = "Wrong values inserted"
    }
return interpretation;
}
bmiCalculator(65, 1.8)