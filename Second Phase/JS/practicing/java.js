/**Function */
var n = 0;
console.log(n)
function adder(x, y) {
    var c;
    c = x + y;
    return c;

}
var added = adder (8, 5)
console.log(added)
function average(x, y) {
var av = 0;
av = adder(x, y)/2;
return av;

}
var k = average(100, 50)
console.log(k)
/**Arrow Function */
var  kebede = function () {
    console.log("kebede");
}
function anotherfunction(){
    return "Hi There";

}
const anotherfunction = () => {
    return "Hi There";
}
const anotherfunction = function (){
    return "Hi There";
}
const anotherfunction = () => "Hi There";