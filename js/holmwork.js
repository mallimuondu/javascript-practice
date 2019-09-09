//food prices
var beer_cost = 200;
var burger_cost = 250;
var pop_cost = 30;

//use of money
var accunt_ballance = 1000;

//drinkbeer
function drink_beer() {
    accunt_ballance = accunt_ballance - beer_cost;
    console.log(accunt_ballance);
}
//eat buger
function eat_buger() {
    accunt_ballance = accunt_ballance - burger_cost;
    console.log(accunt_ballance);
}
//drink pop
function drink_pop() {
    accunt_ballance = accunt_ballance - pop_cost;
    console.log(accunt_ballance);
}

drink_beer();
drink_pop();
drink_pop();
drink_beer();
var mealList = [drink_beer, drink_pop, eat_buger, drink_pop,eat_buger,drink_beer];
function visitCanival(mealList,msg) {
    for (var i = 0, num = mealList.length; i < num; i++) {
        mealList[i]();
    }

}
//visitCanival(mealList,"helow");
visitCanival(mealList,"hello");
