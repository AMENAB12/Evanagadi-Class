/**Q1 - Define a simple function named myFirst that prints the word "Hello" on the console.
○ First define the function
○ Then call the function*/
function myFirst (){
    console.log("hello")
}
myFirst();
/**Q2 - Define a function called mySecond that takes a parameter and prints the parameter on console
○ Feel free to give any value as a parameter in your function.*/
function mySecond (x, y){
var d;
d = x - y;
return d;
}
var sub = mySecond(9, 5)
console.log(sub)
/**Q3 ● Define a function called myThird that takes a parameter and prints the parameter on the console. But, it uses mySecond function to print the parameter on the console.*/
function myThird (x, y){
    var per;
    per = mySecond(x, y) * 6;
    return per;
}
var k = myThird(6, 2);
console.log(k)
/**● Write a function named myFourth that takes an array as a parameter and prints only the first value of the array on the console. Remember, this question is here to explain the concept of function delegation in JavaScript. */
function myFourth (){
   var d = [myFirst, mySecond, myThird]
    return d;
}
var b = myFourth()
console.log(b);
/** ● Write a function named myFifth that takes an array with two numbers in it as a parameter and prints the sum of the two numbers on console*/
function myFifth (){
    var  c = [mySecond(9, 5), myThird(6, 2)]
    return c;

}
var n = myFifth
console.log(n[mySecond(9, 5) + myThird(6, 2)])
/**Q6 ● Write a function that takes an integer minutes and converts it to seconds.*/
function convert(m,){
var j;
j = m * 60;

return j;
}
var con = convert(5)
console.log(con)
/**Q7 ● Create a function that takes a number as a parameter, increments the number by +1 and returns the result.*/
function addition(num){
    var add;
    add = num + 1
    return add;

}
var additions = addition(5)
console.log(additions)
/**Q8 ● Write a function that takes the base and height of a triangle and returns its area.*/
//A = 1/2bh
function area(b, h){
    let A;
A = 1/2 * (b * h)
return A;
}
let Z = area(5, 4)
console.log(Z)
/**Q9  */
function animal(ch, c, p,){
    var ANI;
ANI = (ch*2 + c*4 + p*4);
return ANI;
}
var AN = animal(2, 4, 4)
console.log(AN)
/**Q10 -Create a function that takes an array containing only TWO numbers as a parameter and returns a value that is 3 times the first element of the array*/
function times3(num1, num2){
    let X = num1;
let Y = num2;
var P = [X * 3 , Y * 3];

return P;
}
var Q = times3(2, 3)
console.log(Q)
/**11 */
function same(num1, num2){
   return num1 === num2
}
console.log(same)
                 /**A2CV Problems */
// FizzBuzz
function fizzBuzz(){
    var i;
        for (i = 0 ; i <= 100; i++){
            if (i % 3 == 0 && i % 5 == 0){
                alert("FizzBuzz");
            }
            else if (i % 3 == 0){
                alert("Fizz");
            }
            else if (i % 5 == 0){
                alert("Buzz");
            }
            else {
                alert(i)
            }
        }
    }
    alert(fizzBuzz())
    //or
    var output = [];
var count = 1;

function fizzBuzz(){


    if (count % 3 == 0 && count % 5 == 0 ){
        
        
       output.push("FizzBuzz")  
    }
    if (count % 3 == 0){
            output.push("Fizz") 
        }
        if (count % 5 == 0){
            output.push("Buzz") 
        }

    else {
        output.push(count);
    }
   
    count++; 
    
    console.log(output);
}
var output = [];


function fizzBuzz(){
for (var count = 1; count <= 100; count++){
	if (count % 3 == 0 && count % 5 == 0 ){  
       output.push("FizzBuzz")  
    } else if (count % 3 == 0){
        output.push("Fizz")
	} else if (count % 5 == 0){
		output.push("Buzz")
	} else {
		output.push(count);
    }
}
    console.log(output);
}
/**Who's Buying Lunch? Code Challenge */
function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
        
        
        
        console.log(names[3] + " is going to buy lunch today!");
    
    
    /******Don't change the code below*******/    
    }
    alert(whosPaying())
    // to authomate it
    function whosPaying(names) {
    
        /******Don't change the code above*******/
            
            //Write your code here.
            names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
        var numberOfPeople = names.length;
            var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
            var randomPerson = names[randomPersonPosition];
            return randomPerson + " is going to buy lunch today!";
        
        
            
        /******Don't change the code below*******/    
        }
        alert(whosPaying())
        typeof("12")
        