let answer = 0 // the answer
let firstnum = document.getElementById("firstnum"); //first number entered in the top box
let secondnumber = document.getElementById("secondnumber"); //second number entered in the box below the top box
let trianswer = document.getElementById("trianswer") //displays the answer
let hypotenusecheck = document.getElementById("hypotenusecheck"); //checks if user is solving for hypotenuse or not
 


document.getElementById("solvebutton").onclick = function(){ //Function for the pythagorean theorem. Does the calculations
  if (firstnum.value < 0 || secondnumber.value < 0){ //checks to see if numbers entered are negative
     alert("Please input positive numbers"); //alerts the user if they entered negative numbers
  } 
  
  else{
     if (hypotenusecheck.checked == false) { //checks if user wants to solve for hypotenuse or not. does code below if they do not want to solve for hypotenuse
    if (firstnum.value >= secondnumber.value){  //checks which number is bigger to see which one it has to subtract
      answer = Math.sqrt((firstnum.value*firstnum.value) - (secondnumber.value*secondnumber.value)) 
     trianswer.innerHTML = (answer)
    } 
      
   else{
      answer = Math.sqrt((secondnumber.value*secondnumber.value) - (firstnum.value*firstnum.value)) 
      trianswer.innerHTML = (answer)
    } 
    } 
    
   else {
      answer = Math.sqrt((firstnum.value*firstnum.value) + (secondnumber.value*secondnumber.value)) 
      trianswer.innerHTML = (answer)
     // Does the pythagorean theorem: A² + B² = C². If the user wants to solve for hypotenuse, it does the square root.
  }
  }
 
}; 


// JS code runs function when solvebutton is clicked. If negative numbers are imputted, the program gives an alert telling the user to not enter negative numbers. The function uses the numbers in the input boxes to do the correct equation for the pythagorean theorem. 
