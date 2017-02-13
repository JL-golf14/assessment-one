// 1 - Create an object constructor
// for RightTriangle that takes 3 arguments
// - side1
// - side2
// - base
// The object should have two functions
// - area() returns the area of this triangle
// - perimeter() returns the perimeter of this triangle

// 2 - Create two instances of the RightTriangle
// object. Console log the results of calling
// both functions on both instances.
function RightTriangle(side1, side2, base){
  this.area = function(){
    var s= (side1+side2+base);
  var area =  Math.sqrt(s*(s-side1)*(s-side2)*(s-base));
  return area;
  }
  this.perimeter = function (){
  var perimeter = side1+side2+base;
  return perimeter;

  }
}
console.log(RightTriangle());
console.log(perimeter());
