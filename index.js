document.getElementById("myButton").onclick = function()
{
    console.log("I clicked submit");
    

    a = document.getElementById("base").value ;
    b = document.getElementById("width").value;

    // Check to see if both buttons are filled.
    if (!(a&&b))
    {
        document.getElementById("p1").innerHTML = "Please fill both the buttons. ";
        return;


    }

    //Convert it to number..
    a = Number(a);
    b = Number(b);
    c = Math.pow(a , 2) + Math.pow(b , 2);
    console.log(c);
    c = Math.sqrt(c);

    document.getElementById("p1").innerHTML = "The value of the traingle is " + c;



}
 console.log("I am done with Javascript");