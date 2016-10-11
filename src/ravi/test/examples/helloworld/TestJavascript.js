/**
 * Created by rbyakod on 10/11/2016.
 * Javascript playground
 */
for ( var line="#"; line.length<8; line+= "#") {
    console.log(line);
}

for( var n=0; n<100; n++) {
    var output = "";
    if (n % 3 == 0)
        output += 'Fizz';
    if (n % 5 == 0)
        output += "Buzz";

    console.log(output || n);

}

var size = 16;

var board = "";

for (var y = 0; y < size; y++) {
    for (var x = 0; x < size; x++) {
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}

console.log(board);

var square = function (x) {
    return x*x;
};

console.log("Square of 5 is = " + square(5));



var landscape = function() {
    var result = "";
    var flat = function(size) {
        for (var count = 0; count < size; count++)
            result += "_";
    };
    var mountain = function(size) {
        result += "/";
        for (var count = 0; count < size; count++)
            result += "'";
        result += "\\";
    };
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
};

console.log(landscape());
// . ___/''''\______/'\_





function power(base, exponent) {
    if (exponent === undefined)
        exponent = 2;
    var result = 1;
    for( var n=0; n<exponent; n++) {
        result *= base;
    }
    return result;
}

console.log(power(4));
console.log(power(4,3));


function wrapValue(n) {
    var localVar = n;
    return function() { return localVar; };
}

var wrapVal1 = wrapValue(2);
var wrapVal2 = wrapValue(5);

console.log(wrapVal1());
console.log(wrapVal2());


function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

var twice = multiplier(2);
console.log(twice(5));

function rangeSum(start, end) {
    var result = [];
    for(var i=start; i<=end; i++) {
        result.push(i);
    }
    return result;
}

console.log(rangeSum(2,7));


function forEach(array, action) {
    for (var i=0; i<array.length; i++) {
        action(array[i]);
    }
}

forEach( ["Uno", "Dos", "Tres"], console.log);

var numbers = [1,2,3,4,5];
var sum = 0;
forEach(numbers, function(number){
    sum += number;
});
console.log(sum);

// this will be committed now from desktop
