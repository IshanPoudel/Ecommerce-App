console.log("I like pizza!");



let age;

age = 21;

let firstName = "Ishan"
let student = false;

console.log(firstName);
console.log(age);
console.log ("You are " , age , "years old");
console.log(student);

document.getElementById("p1").innerHTML = "Hello "+ firstName;



let username;

//First you need an onclick listener. 
document.getElementById("myButton").onclick = function()
{
    console.log("I clicked submit");
    
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("p1").innerHTML = "Hello "+ username;
}

let x = Number("3.14");
let y= String(3.14);
let z=Boolean("pizza");
