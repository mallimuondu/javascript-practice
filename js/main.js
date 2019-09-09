var myFavoriteGame = 'Roblox';
console.log(myFavoriteGame);


var myName = 'Malli';
console.log(myName);



var myBrothersName = 'nesh';
console.log('My Name is ' + myBrothersName);

var mySistersName = 'manna';
console.log('My sister\'s name is ' + mySistersName);


var mytechersName = 'victor';
console.log('My teachers name ' + mytechersName);

console.log('My Teacher is called ' + mytechersName + '. My brother\'s name is ' + myBrothersName);


var mathTeacher = 'Mrs Mureithi';
console.log('my math teacher is called ' + mathTeacher);


var textBook = 'Primary Science 4';
console.log('My ' + textBook + ' is a text book or exersis book ');


var exerciseBook = 'Maths Class work';
console.log('where ' + exerciseBook + 'is my maths classwok is a text book or exersis book')


var mathTeacher = 'Mrs Mureithi';
var textBook = 'Primary Science 4';
var exerciseBook = 'Maths home  work';
var chair = 'Chair';
var desk = 'Desk';



console.log('Early in the morning when I arrive at Consoata' +
    ' I go to my classroom. I usually find  ' + mathTeacher + ' I go  and place my ' + exerciseBook + ' book then I go to my ' + desk + ' and ' + chair + '  I like my shoool.');

// using backtick
let myFavoriteSchool = `consolata`;
let myFavoriteSchoolStory = `My favorite school is called ${myFavoriteSchool} `;
console.log(myFavoriteSchoolStory);
//alert(myFavoriteSchoolStory);

let bodyElement = document.getElementById("demo");
//bodyElement.innerHTML = 'manna';
let myButton = document.getElementById("button");

myButton.addEventListener('click', function () {
    // Do anything you want here....
    bodyElement.innerHTML = 'manna';
})

let myButton2 = document.getElementById("button2");
myButton2.addEventListener('click', function () {
    bodyElement.innerHTML = 'i clickt button2';
})



// An Object Variable about my school
let mySchool = {
    name: 'Consolata',
    principals: [`Fr. Caroli`, `Mr. Kariuki`, `Mrs. Fanandis`],
    games: ['Hide and Seek', 'British Bulldog', 'Chess', 'Monopoly'],

    sports: ['Swimming', 'Basketball', 'Football', 'Netball'],

    pupils: ['Alvin', 'Kalufa', 'Nigel', 'Wayine', 'Francis', 'Ryan'],

    teacher: ['Class teacher', 'Math teacher', 'English teacher', 'Kiswahili v teacher', 'Science teacher', 'Social teacher',
        'CRE teacher'],
    subjects: ['maths', 'English', 'Kiswahili', 'sst', 'C.R.E'],
};



var favouriteSubject = 'Social Studies';
console.log('  My favourite Subject is called ' + favouriteSubject)

let tennis = {
    numberOfplayers: 2,
    typesOfPitches: ['clay', 'grass', 'hardcort'],
    sizeOfcourt: '78 feeat'
};


//============== SHOW A LIST OF TYPE OF PITCHES ==================
//Get the Element by id
var data = document.getElementById('ul');

//Go through the list of type of pitches
tennis.typesOfPitches.forEach(function(pitch) {
    
    // Create a new element where you will put your pitch
    var nameOfThePitch = document.createElement('div');
    
    nameOfThePitch.innerHTML = pitch;
    
    data.append(nameOfThePitch);
});



/*
var name = document.createElement('div');
var numberOfPlayer = document.createElement('div');
var typesOfPitches = document.createElement('div');

data.append(name)

*/
//Object in an object
let myHome = {
  place: 'Kangemi',
  estate: 'Mt. View',
  members: ['Dad','Mum','Nesh','Malli','Manna'],
  familyMembers: {
    malli: {
      name: 'Malli Muondu',
      favoriteSports: ['Tennis', 'Swimming','Football'],
      friends: {
        friend1: 'Wayn',
        friend2: 'Alvin',
        friend3: 'Kalufa',
        friend4: 'Wachira',
        friend5: 'Earn'
      },
      favoriteGame: {
        name: 'Roblox',
         details: {
           whereToGetIt: 'Google',
           doYouDownloadIt: true
          
        }
      }
    },
    manna: {},
    mum: {},
    dad: {},
    nesh: {
      name: 'Nesh',
      favoriteSport: 'tennis',
      friends: {
        friend1: 'caleb',
        friend2: 'nick',
        friend3: 'nathan',
        friend4: 'victor',
        friend5: {
          name:'ablvkthug1346',
          friends: {
            friend1: {}
          },
          favoriteSport: {
            sport1: 'Tennis',
            sport2: 'Swimming',
            sport3: 'Football'
          }
        },
        friend6: {}
    }
      
    }
  },
  ourRules: {
    ruleOne: 'Never Give up',
    ruleTwo: 'We live for Excellence',
  }
  
  
};

// =
// ==
// % 
// 5%3 : 2
// 5/3 : 2 rem 2
for(num = 1; num <= 100; num = num + 1){
    // Check if num is divisible by 5
    // Check if the modulus of num and 5 is zero (use the if statement)
    if ((num%3) ==0){
        console.log(num);
    }
};  


