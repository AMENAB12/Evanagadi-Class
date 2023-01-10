     /**Function Practice Questions */
/**Q1 - Define a simple function named myFirst that prints the word "Hello" on the console.
○ First define the function
○ Then call the function*/
// function myFirst (){
//     console.log("hello")
// }
// myFirst();
/**Q2 - Define a function called mySecond that takes a parameter and prints the parameter on console
○ Feel free to give any value as a parameter in your function.*/
// function mySecond (x, y){
// return x - y;
// }
// console.log(mySecond(9, 5))
/**Q3 ● Define a function called myThird that takes a parameter and prints the parameter on the console. But, it uses mySecond function to print the parameter on the console.Remember, this question is here to explain the concept of function delegation in JavaScript.*/
// function myThird (k, p){
//     return mySecond(k, p) * 6;
// }
// console.log(myThird(6, 2))
/**● Write a function named myFourth that takes an array as a parameter and prints only the first value of the array on the console. */

// function myFourth (x){
//    var t = [x];
// //    x +1;
//     return t[0];
// }
// console.log(myFourth(5,2,2));
/** ● Write a function named myFifth that takes an array with two numbers in it as a parameter and prints the sum of the two numbers on console*/
// function myFifth (c){
//     if(c[2])
//     console.log( c[0] + c[1]);

// }
// myFifth([1,3,4])
/**Q6 ● Write a function that takes an integer minutes and converts it to seconds.*/
// function convert(m){

// return m * 60;
// }
// console.log(convert(5))
/**Q7 ● Create a function that takes a number as a parameter, increments the number by +1 and returns the result.*/
// function addition(num){
//     return num +1;

// }
// console.log(addition(5))
/**Q8 ● Write a function that takes the base and height of a triangle and returns its area.*/
//A = 1/2bh
// function area(b, h){ 
// return 1/2 * (b * h);
// } 
// console.log(area(5, 4))
// /**Q9  */
// function animal(ch, c, p,){

// return (ch*2 + c*4 + p*4);
// }
// console.log(animal(5, 7, 9))
/**Q10 -Create a function that takes an array containing only TWO numbers as a parameter and returns a value that is 3 times the first element of the array*/  //what about the rest ?
// function times3(x,y){
//  let times3 = [x, y]

// return 3*times3[0,1]
// }
// console.log(times3(5, 4),times3(2,5))
/** Or */
// function times3(num1, num2){


//     return (num1 * 3 + num2);
//     }
    
//     console.log(times3())
/**11 */
// function same(num1, num2){
//    return num1 === num2
// }
// console.log(same)
/**Q11- Create a function that returns true when num1 is equal to  num2 otherwise return false.
 */

// function trueFalse(num1,num2){
// if(isNaN(num1) && isNaN(num2)){
//     return "Please use only number value"
// }

//     if(num1 == num2)
//     {
// return "True";
//     } else {
//         return "False"
//     }

// }
// console.log(trueFalse(4,7))
/**Q12 - Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false. */
        /** Pseudo Code
         * declare function divisible(num)
         * check if isNaN(num) return "please use only number value"
         * if(num % 100 == 0)
         * return "True"
         * else return "False"
         * 
         * console.log(divisible())
        */
/** Code */
// function divisible(num){
//     if(isNaN(num)){
//         return "Please use only number value";
    
//     }
//     if(num % 100 === 0){
//         return "True";
//     } else {
//         return "False";
//     }
// }
// console.log(divisible("100"));
/**Q13 - Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers */
  /** Pseudo Code
   * declare function oddEven(num)
   * check if iaNaN(num)
   * return "Please use number value only"
   * if(num % 2 == 0)
   * return "It is Even Number"
   * if(num % 2 != 0)
   * return "It is Odd number"
   * 
   * console.log(oddEven())
   */
/**Code */
// function oddEven(num){
//     if(isNaN(num)){
//         return "please use number value only";
//     }
//     if(num % 2 == 0){
//         return "It is an Even number";
//     } else if (num % 2 != 0){
//         return "It is an Odd number";
//     }
// }
// console.log(oddEven());
/**Q14 - Create a function that returns
○ “Invalid score” if score is above 100 or score is a negative number
○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
○ “Grade C” for any score below 79 */
/** pseudo code 
 * declare function studentScore(score)
 * check if isNaN(score)
 * return "please use only number value"
 * if(score > 0 || score < 0)
 * return "Invalide"
 * else if (90 <= score && score <= 100)
 * return "Grade A"
 * else if(80 <= score && score <= 89)
 * return "Grade B"
 * else
 * return "Grade C"
 * 
 * console.log(studentScore())
*/
/**Code */
// function studentScore(score){
// if(isNaN(score)){
//     return "please use only number value";
// }
// if(score > 100 || score < 0){
//     return "Invalide"
// }
// else if (90 <= score && score <= 100){
//     return "Grade A" 
// }
// else if(80 <= score && score <= 89){
//     return "Grade B"  
// }
// else {
//     return "Grade C"  
// }
// }
// console.log(studentScore())


/** Decision loop and object oriented programing:
 *             practice exercises */
/**Question 1
● Write a function that prints the first 10 integers on the console starting from the number 1 using the JavaScript for loop.*/

/**Pseudo Code
 * declare function first10()
 * 
 * for (i = 1; i <= 10; i++)
 * 
 * 
 * console.log(first10())
 */
/**Code  */
// function first10(){

//     for(var i = 1; i <= 10; i++){
//     console.log(i)
    
//     }
// }
// first10()
/**Question 2
● Write a function that takes a single number as an argument and prints the next 5 numbers in the console. Note: each output should be displayed on a new line.*/
/** Pseudo code
 * declare function printNum(num)
 * check 
 * 
 */
// function printNum(num) {
//     for (var i = num + 1; i <= num + 5; i++) {
//       console.log(i);
//     }
//   }
//   printNum(5); 
  /***Q3 
   * Write a function that takes a single number and prints the sum of the next 10 numbers after the given number */
//   function addupp(number){
//     let sum = 0;

//     for (var i = number + 1; i <= number + 10; i++){
//         sum += i;
        
//     }
//     return sum;
//   }
  
// console.log(addupp(1)) 
/**Q4
 * Write a function that takes an array as an argument and prints every element of the array on the console */
function myArr(num){
    for (let i = 0; i < myArr.length; i++){
        console.log(num[i]);
    }
}
myArr([1,3,5])

/**Question 6
● Write a function that takes an array of numbers as a parameter and logs in the console the sum of all the numbers in the array.*/
function sumOfarray(arr){
    let sum = 0;

    for (let i = 0;i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}
console.log(sumOfarray([1,8]))
/**Question 7
● Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all odd numbers of the array from the total sum of all even numbers and logs the result in the console */
function oddEvenDiff(arr2){
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < arr2.length; i++){
        if(arr2[i] % 2 === 0){
            evenSum = evenSum + arr2[i]
        } else {
            oddSum = oddSum + arr2[i]
        }
    } 
    return evenSum - oddSum
}
console.log(oddEvenDiff([1,5,8,2]))
console.log(oddEvenDiff([0,3]))
/**Question 8
● Write a function that takes an array as a parameter and logs in the console the elements that have even indexes only. Notice: this question is not asking you to log elements with even value, but elements that are located on even indexes) */
function oddEvenDiff1(arr3){
    let oddSum = 0;
    let evenSum = 0;
    for (let i = 0; i < arr3.length; i+=2){
        if([i] % 2 === 0){
            console.log(arr3[i])
    } 
    
}
}
console.log("even index")
oddEvenDiff1([1,5,8,2,0,9,7,4,2])


































                 /**A2CV Problems */
// FizzBuzz
// function fizzBuzz(){
//     var i;
//         for (i = 0 ; i <= 100; i++){
//             if (i % 3 == 0 && i % 5 == 0){
//                 alert("FizzBuzz");
//             }
//             else if (i % 3 == 0){
//                 alert("Fizz");
//             }
//             else if (i % 5 == 0){
//                 alert("Buzz");
//             }
//             else {
//                 alert(i)
//             }
//         }
//     }
//     console.log(fizzBuzz())
    //or
//     var output = [];
// var count = 1;

// function fizzBuzz(){


//     if (count % 3 == 0 && count % 5 == 0 ){
        
        
//        output.push("FizzBuzz")  
//     }
//     if (count % 3 == 0){
//             output.push("Fizz") 
//         }
//         if (count % 5 == 0){
//             output.push("Buzz") 
//         }

//     else {
//         output.push(count);
//     }
   
//     count++; 
    
//     console.log(output);
// }
// var output = [1,2,3];


// function fizzBuzz(){
// for (var count = 1; count <= 100; count++){
// 	if (count % 3 == 0 && count % 5 == 0 ){  
//        output.push("FizzBuzz")  
//     } else if (count % 3 == 0){
//         output.push("Fizz")
// 	} else if (count % 5 == 0){
// 		output.push("Buzz")
// 	} else {
// 		output.push(count);
//     }
// }
//     console.log(output);
// }
/**Who's Buying Lunch? Code Challenge */
// function whosPaying(names) {
    
//     /******Don't change the code above*******/
        
//         //Write your code here.
//         var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
        
        
        
//         console.log(names[3] + " is going to buy lunch today!");
    
    
//     /******Don't change the code below*******/    
//     }
    // alert(whosPaying())
    // // to authomate it
    // function whosPaying(names) {
    
    //     /******Don't change the code above*******/
            
    //         //Write your code here.
    //         names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    //     var numberOfPeople = names.length;
    //         var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    //         var randomPerson = names[randomPersonPosition];
    //         return randomPerson + " is going to buy lunch today!";
        
        
            
    //     /******Don't change the code below*******/    
    //     }
    //     alert(whosPaying())
    //     typeof("12")


    
        /**Abe Q*/
      /**  create a function that tells us how many days, weeks and months we have left we live until 90 years old it will take your age as the input and console.logs a message with our time left in this format: You have x days, y weeks, and z months left.
 where x , y and z are replaced with the actual calculated numbers. For this challenge, assume there are 365 days in a year , 52 weeks in a year and 12months in a year.*/

 /** pseudo code */
 //declare function lifeInWeeks(age)
 /** check if (isNaN(age)) 
  * return "Please enter only number value"
  * if(age < 0)
  * return "Please give me +ve interger"
  * general formulas
  * leftAge = 90 - age
  * months = leftAge * 12
  * weeks = leftAge * 52
  * days = leftAge * 365
  * 
  * return months, weeks, days
  * 
 */
/**code */
function lifeInWeeks(age){
    if (isNaN(age)){
        return "Please enter only number value"
    }
    if(age < 0){
        return "Please give me +ve interger" 
    }

    leftAge = 90 - age;
    months = leftAge * 12;
    weeks = leftAge * 52;
    days = leftAge * 365;

    return ("You have " + months + ":months,\n " +  weeks + ":weeks,\n " +  days + ":days left")

}
console.log(lifeInWeeks())