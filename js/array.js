let myClassmates =['Wayen','Kalufa','Alvin','Nigel','Gabriela','Angela','Baraka','Kelsi','Samantha','Wachira'];


// Method toString()
// Example:
let myClassmatesAsAString = myClassmates.toString(); // returns all the items into one string separated with commas;
console.log(myClassmatesAsAString);


// Method join() //it acts just like to string but in addition  you can specify the separator inside the bracket
// Example:

let myaray = myClassmates.join('^');
console.log(myaray);

//Method pop()removes adds a new elementfroman array
//Example:

let myClassmatesPop  = myClassmates.pop();
console.log(myClassmates);


//Method push()adds a new element from an array
//Example:
let myClassmatesPush = myClassmates.push('Mary');
console.log(myClassmates);

//Method shift(): 
//Example:
let myClassmatesShift = myClassmates.shift();
console.log(myClassmates);
//Method unshift(): 
//Example:
let myClassmatesUnshift = myClassmates.unshift('Rayan','christophar');
console.log(myClassmates)