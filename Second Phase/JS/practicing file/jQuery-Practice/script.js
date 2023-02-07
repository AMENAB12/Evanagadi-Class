
/** jQuery: Practice Exercises  */

//2.2.
let element = $("#techCompanies li");
console.log(element.length);

//2.3
let redClass = $("#techCompanies")
console.log(redClass.find(".red"));

//2.4
let addLi = $("<li>").text("face book");
console.log(addLi);

//2.5

addLi.addClass("blue");

//2.6

let app = $("#techCompanies").append(addLi);
console.log(app.children());


//2.7
let bc = $("#techCompanies .blue").length;

$("#blueCompanies").append(bc);

// 3
$("#adder").ready(function() {
    $("#submitButton").click(function() {
      var num1 = parseFloat($("#num1").val());
      var num2 = parseFloat($("#num2").val());
  
      if (!isNaN(num1) && !isNaN(num2)) {
        console.log("Sum: " + (num1 + num2));
        console.log("Average: " + (num1 + num2) / 2);
      } else {
        console.log("Please enter valid numbers");
      }
    });
  });