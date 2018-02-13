
var pyramida = Number(prompt('Enter number of piramida floor (from 0 to 20)'));
var floor = 0;
var space;
var tilde;
var allPyramid;
var together = [ ];

// input data
if (pyramida <= 0 || pyramida > 20) {
    console.log("Incorrect");
}

// Output spaces
for (var i = 0; i <= floor; i++) { 
    
  for (var j = 0; j < floor - i; j++) {
    result = space + " ";
  }
// Output tilde '[~]'
  for (var k = 0; k < 1 + 2 * i; k++) {
    result = tilde + "[~]";
  }
  
  for (var x = 0; x <= allPyramid.length; x ++) {
    console.log(allPyramid[x]);
}

    together= space + tilde + allPyramid;
}

console.log(together);
