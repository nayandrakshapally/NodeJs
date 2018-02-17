// var rect={
//     perimeter: (x,y) => (2*(x+y)),
//     area: (x,y) => (x*y)
// };
var rect = require("./rectangle");

function solveRect(l,b){
console.log("Solving for rectangle with l = " + l + " and b = " + b);

if(l<=0 || b<=0){
    console.log("values of l and b must be greater than zero");
}else{
    console.log("value of perimeter", + rect.perimeter(l,b));
    console.log("value of area", + rect.area(l,b));
}

}
solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);