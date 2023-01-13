/**My first js practice with evangadi */
/**Function */
// var n = 0;
// console.log(n)
function adder(x, y) {
    var c;
    c = x + y;
    // let l = average(x, y)
    return c;

}
var added = adder (8, 5)
console.log(added)
function average(z, kk) {
var av = 0;
av = adder(z, kk)/2;
return av;

}
var k = average(100, 50)
console.log(k)
/**Arrow Function */
// var  kebede = function () {
//     console.log("kebede");
// }
// function anotherfunction()
//     return "Hi There";

// }
// const anotherfunction = () => {
//     return "Hi There";
// }
// const anotherfunction = function (){
//     return "Hi There";
// }
// const anotherfunction = () => "Hi There";
/** Conditional statement */
// if(1 <= 1) {
//     console.log("abebe hede");
// }
/**If Statement */
// var pass = 50;
// var score = 89;

// if (score >= pass) {
//     console.log("Hey you passed");
// }
// if (score < pass) {
//     console.log("you failed");
// }
/**array example */
// if (score >= pass) console.log("Hey you passed");
/**function example */
// function checkmark(pass, score, name){
//     if (score >= pass){
//         console.log(name + "=> Hey you passed")
    
//     }
//     if (score < pass){
//         console.log(name + "=> you failed")

//     }
// }
// checkmark (50, 85, "abebe")
// checkmark (50, 48, "kebe")
// checkmark (50, 18, "chala")
// checkmark (50, 89, "tura")
// checkmark (50, 48, "alexis")
// checkmark (50, 8, "amazon")
// checkmark (50, 86, "google")
/**If..Else Statement */
// var pass = 50;
// var score = 89;

// if (score >= pass) {
//     console.log("Hey you passed");
// }else {
//     console.log("you failed");
// }
/**ternary operator */
// var pass = 50;
// var score = 52;
// let result = score <= pass ? "hey you pass" : "you faild";

// console.log(result);
/**switch statment */
// var greeting = "";
// var timeofday;
// timeofday = "morning";

// switch (timeofday){
//     case  "morning":
//  greeting = "Goodmorning";
//  break;
//  case "afternoon":
//  greeting = "good afternoon"
//  break;

// }
/**Algorithm */
// add two numbers
// only adds numbers and returnns error if provide a non numerical value

/**For Loop */
// for (i = 7; i <= 10; i = i + 1){
//     console.log("hello")
// }
// i = 7
// if (1 <= 10){
//     console.log("hello")
// }
// i = i + 1
// if(i <= 10){
//     console.log("hello")
// }

// var pass = 50;
// let p = 5;
// var studentgrades = [20, 50, 69, "abebe", p, "20 + 30", 45];

// for( abe = 0; abe < studentgrades.length; abe++){
//     console.log(studentgrades[abe])
// }


// console.log(studentgrades.length)
// /**while loop */
// var f = 0;
// while (f <= 3) {
//     console.log ("chala");
//     f = f + 1;
// }
// var a = [1, 0, "abe"]
// console.log(a)
// var o = {
//     ex: 1,
//     ex2: 3,
//     m3: "f",
// }
// console.log(o)

// let abebe = {
//     firstname: "Abebe",
//     lastname: "Kebede",

//     fulname: function(){
//         return this.firstname + " " + this.lastname;
//     }
// }
// console.log(abebe["lastname"])
// console.log(abebe.lastname)
// function getMilk (money) {
//     var NB = Math.floor(money / 1.5);
//     return money % 1.5;
    
// }
// var NB = Math.floor(4 / 1.5)
// var change = getMilk (4);
// console.log ("your money can buy " + Math.floor(4 / 1.5)  + " bottles of milk and your remaining money is " + getMilk(4));
//Create your function below this line.
//The first parameter should be the weight and the second should be the height.



/**BMI */
/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
// 


    // var n = Math.random()
    // n = n * 8
    // n = Math.floor(n) + 1
    //      console.log(n);
    // var d = n.length
    // console.log(d)

    // function lovecalculator (){
    //     var n = Math.random();
    //     Math.floor (n * 100) + 1
    //     var ret = prompt("Your Name")
    //     var ret2 = prompt("Your Lover Name")
        
    // }
    // alert(ret);

// var output = [];
// var count = 1;

// function fizzBuzz(){

//    output.push(count); 
    

//     console.log(output);
// }
/**OOP */
// var a = [1,"asda", 25];
// console.log(a)
// console.log(a[2])
// var o = {
//     meleya1: 1,
//     meleya2: "asda",
//     meleya3: 25,
// }
// console.log(o)

// console.log(o["meleya1"])
// let abebe = {
//     fn: "abebe",
//     ls: "kebede",

//     xx: function(){
//         console.log("abebe meta debrot hede")
//     }
// };
// console.log(abebe)
// console.log(abebe.ls)

// abebe.xx();

// let kebede = {
// fn: "kebede",
// ln: "abebe",

// fulname: function (){
//     return this.fn + " " + this.ls;
// }

// };

// let employee = {
//     firstName: "abenezer",
//     lastName: "megersa",
//     age: 22,

//     fulInfo: function () {
//         return "reverse name is " + this.lastName +" "+this.firstName;
//     },
//     selambel: function(){
//         return "Hello World";
//     },

// };
// console.log(employee);

// employee.firstName = "fdfhdf"
// console.log(employee.fulInfo());

  








/**constructor function */
// let abebe = {
//     fn: "abebe",
//     ls: "kebede",

//     xx: function(){
//         console.log("abebe meta debrot hede")
//     }
// };
// console.log(abebe)
// console.log(abebe.ls)

// abebe.xx();

// let kebede = {
// fn: "kebede",
// ln: "abebe",

// fulname: function (){
//     return this.fn + " " + this.ls;
// }

// };
// function student (frn, lsn){
//     this.fn = frn;
//     this.ls = lsn;

// };
// var chala = new student ("tola", "chala")
// console.log(chala)
       /** Algorithm Thinking */
function detectWord(a){

    let hidden = "";

    for (i = 0; i <= a.length; i++){
    let singleLetter = a.charAt(i)
if (singleLetter == singleLetter.toLowerCase()){
hidden = hidden + singleLetter;
} else {

}

    };

    return hidden;
}
var hidden = detectWord("UDGJKcLKHIYaOIYLVt");
 console.log(hidden)

 
// /** Tri Area */
// function triArea (b, h){
//     if (isNaN(b) || isNaN(h)){
//         return ("please use only number")
//     }
//     var c = (b * h) / 2;
//     return c;
// }
// console.log(triArea(3,"k"))
// function pointCal(w, d, l){
//     if(isNaN(w) || isNaN(l) || isNaN(d)){
//         return ("please enter only number value");
//     } else if ( w < 0 || d < 0 || l < 0){
//         return ("use natural number only");
//     }
//     return (w * 3) + (d * 1) + (l * 0);
// }
// console.log(pointCal(16,5,5));
// function printNumbers() {
//   let i = 1;
//   while (i <= 10) {
//     console.log(i);
//     i++;
//   }
// }
//  printNumbers();
// let i =0
// do{
// console.log(i)
//   i++;
// }
// while(i <= 10);