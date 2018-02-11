
var a = Number(prompt("first triangle side"));
var b = Number(prompt("second triangle side"));
var c = Number(prompt("third triangle side"));

var all = (a + b + c)/2;
var area = Math.sqrt(all*((all-a)*(all-b)*(all-c)).toFixed(2));


    if(sides(a,b,c)||sides(a,c,b) || sides(b,c,a)){
        console.log('Triangle is right triangle' + area);
    } else if (a === b && b === c){
    console.log('Triangle is equilateral triangle' + area);
    } else if (a === b || b === c || a === c) {
    console.log('Triangle is isosceles triangle' + area);
    } else if (a!==b && a!==c && b!==c){
     console.log('Type of triangle is scalene triangle' + area);
    } else {
        console.log("Invalid input");
    }

function sides(a, b, c){
  return ((a*a)+(b*b)) === (c*c);
}
