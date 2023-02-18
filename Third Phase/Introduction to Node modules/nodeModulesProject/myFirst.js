console.log("My first module");

const myFirst = (function(){
    function myMultiplier (a){
        return a *2;
    }
return{
    myMultiplier: myMultiplier
};

} )();

var result = myFirst.myMultiplier(4);
console.log(result);
module.exports = myFirst;
console.log(myFirst)