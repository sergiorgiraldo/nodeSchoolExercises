function doFactorial(number){
    var product = number;
    if (number == 1){
        return 1;
    }
    else{
        for (var i = number - 1; i >= 1; i--) {
            return product * doFactorial(i);
        }
    }
}

function *factorial(upper) {
    for(var i = 1; i <= upper; i++) {
        yield doFactorial(i);
    }
}

for (var n of factorial(5)) {
      console.log(n)
    }
