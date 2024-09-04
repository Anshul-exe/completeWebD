function fibonacciGenerator (n) {
    var output = [];
    var numA;
    var numB;
    var numC;
    
    if (n === 1) {
        output.push(0)
    } else {
        output.push(0,1)
        
        while (output.length <= n - 1) {
            numA = output.length - 2;
            numB = output.length - 1;
            numC = output[numA] + output[numB]
            output.push(numC)
        }
        
    }

    return output;
}

//------------------------------------------------------------------------------

function fibonacciGenerator (n) {
    var output = [];
    
    if (n === 1) {
        output.push(0)
    } else {
        output.push(0,1)
        
        while (output.length <= n - 1) {
            output.push(output[output.length - 2] + output[output.length - 1])
        }
    }
    return output;
}
