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
/**Q10  */
