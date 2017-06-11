//TypeScript
//Javascript does not have classes
// All functions can be specified as to what type of parameters are expected, and what type of return value is expected (or lack there of). Here are some examples, we are simply using the same basic types we learned earlier, and we are additionally adding a basic type at the end of our parameters (after the closing parentheses) as the return type expected from this function. #}
//Never type (will never reach the end of the function)
function errorHandler(message) {
    throw new Error(message);
}
//Void (returns nothing)
function printValue(val) {
    console.log(val);
    return;
}
//Classes (Also in ES6)
//Classes are the syntactical sugar version of an object constructor, don't forget that TypeScript is a superset of JavaScript, so all of this code will convert to JavaScript, even with Classes being included in JavaScript ES6, they are still function constructors that use prototypes.
//In this example below, each time we create a new instance of SLNode class, the parameters we pass, will be expected in our constructor function of our class.
//The constructor function is a built-in function, expected to be used when we either want to to always run during a construction of a new object, and when we are passing values into the object.
//We will later use this pattern to create objects in Angular applications, specifically during the creation of forms.
var SLNode = (function () {
    function SLNode(valueP) {
        this.val = valueP;
    }
    SLNode.prototype.doSomethingFun = function () {
        console.log("This is FUN!");
    };
    return SLNode;
}());
var firstSLNode = new SLNode(1);
