document.getElementById("myButton").onclick = function()
{
    const myCheckBox = document.getElementById("myCheckBox");
    // if(myCheckBox.checked)

    // {
    //     document.getElementById("p1").innerHTML = "You are subscribed";
    // }
    // else
    // {
    //     document.getElementById("p1").innerHTML = "You are not subscribed";


    // }

    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("masterCardBtn");
    const paypalBtn = document.getElementById("paypalBtn");


    if (visaBtn.checked)
    {
        document.getElementById("p1").innerHTML = "You picked visa";

    }
    else if (mastercardBtn.checked)
    {
        document.getElementById("p1").innerHTML = "You picked mastercard";
    }
    else if (paypalBtn.checked)
    {
        document.getElementById("p1").innerHTML = "You picked Paypal";
    }

}