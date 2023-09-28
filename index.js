// Question 01 

var x = 0; 
console.log(++x); // 1 
console.log(x++); // 1
console.log(x); // 2 

//Question 02 

var y = 10; 
console.log(y--); // 10
console.log(--y); // 8 

// Question 03 

var z = 50; 
z = z - 5; 
z = z + 1;
z = z - 14;  

console.log(z); // 32 

// Question 04 

var bagOne = 10; 
bagOne = bagOne + 2;

var bagTwo = 12; 
bagTwo -= 2; 

var total = (bagOne + bagTwo) / 2; 
console.log(total); // 11 

// Question 05 

var containerOne = 50; 
containerOne += 5; 

var containerTwo = 20; 
containerTwo -= 10; 

var total = (containerOne + containerTwo) / 2; 
console.log(total); // 32.5 

//Question 06 

var litreOne = 1.5; 
var litreTwo = 2; 
var litreThree = 5.5; 

var total = (litreOne + litreTwo + litreThree) / 3; 
console.log(total); // 3 

// Question 07 

var centimeterOne = 6; 
var centimeterTwo = 3; 
var centimeterThree = 8; 

var total = (centimeterOne + centimeterTwo + centimeterThree) / 3; 

console.log(total.toFixed(2)); // 5.67

// Question 08 

var fanLevelOne = 8; 
var fanLevelTwo = 4; 
var fanLevelThree = 14; 

var total = (fanLevelOne + fanLevelTwo + fanLevelThree) / 3; 

console.log(total.toFixed(3)); // 8.667

// Question 09 

var caseOne = 10; 
var caseTwo = 30; 
var caseThree = 35; 

var total = (caseOne + caseTwo + caseThree) / 3; 

console.log(total.toFixed(1)); // 25.0 

//Question 10

var guitarStrings = 6; 
var violinStrings = 4; 

var total = (guitarStrings + violinStrings) / 2; 
console.log(total.toFixed(1)); // 5.0 

// Question 11

var boxOne = 3; 
var boxTwo = 4; 
var boxThree = 6; 
var boxFour = 9; 

var total = (boxOne + boxTwo + boxThree + boxFour) / 4; 
console.log(total); // 5.5 

// Question 12

/** Initialise the variable sushi to have a value of 10. initialise the variable coffee to have a value of 20.
 * Add the two variables, then increment the total by 3. 
 * then console log total.
*/

var sushi = 10; 
var coffee = 20; 
var total = (sushi + coffee);
total += 3;
console.log(total); // 33 

// Question 13 

/** Initialise the variable water bottle one using to 5. 
 * Initialise the variable water bottle two to 10.
 * Initialise the variable water bottle Three to 16.
 * Initialise the variable water bottle Four to 20.
 * use camel case. 
 * initilase the variable total to the average of all four waterbottles 
 * console log and round decimal to 2 places*/

var waterBottleOne = 5; 
var waterBottleTwo = 10; 
var waterBottleThree = 16; 
var waterBottleFour = 20; 

var total = (waterBottleOne + waterBottleTwo + waterBottleThree + waterBottleFour) / 4; 
console.log(total.toFixed(2)); // 12.75 

// Question 14 

/** Initialse the variable cat to 2.
 *  Initialse the variable dog to 5. 
 *  Initialise the variable bird to 6. 
 * initialse the variable pets to the total average. 
 * console log and round to one decimal place. 
 */

var cat = 2; 
var dog = 5; 
var bird = 6; 
var pets = (cat + dog + bird) / 3; 
console.log(pets.toFixed(1)); // 4.3 




 