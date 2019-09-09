let numbers = [23, 45, 14, 66, 95, 33, 4, 9];
let breakpoint = 30;


let smallNumbers numbers.filter(function(num){
    return num <breakpoint;
});

let bigNumbers

let oddNumbers

console.log('smaller than thirty', smallNumbers);

console.log('large than thirty', bigNumbers);

console.log('odd number', oddNumbers);