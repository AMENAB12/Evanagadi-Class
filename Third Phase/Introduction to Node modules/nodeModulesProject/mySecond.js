const mySecond = (function(){
    function myMultiplier (a){
        return a * 3;
    }
return{
    myMultiplier: myMultiplier
};

} )();

var result = mySecond.myMultiplier(4);
// console.log(result);
module.exports = mySecond;
// console.log(mySecond);