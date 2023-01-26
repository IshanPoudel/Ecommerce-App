function fToC(temp)
{
    temp = (temp-32)*(5/9);
    return temp;

}

function cToF(temp)
{
    temp = (temp*1.8)+32;
    return temp;
}

function printParagraph(text)
{
    document.getElementById("p1").innerText = text;
}

document.getElementById("myButton").onclick = function()
{
    // see which radio box is checked. 
    const Celsius = document.getElementById("celsius");
    const Fahreneit = document.getElementById("fahreneit");

    temp = document.getElementById("myTemp").value; 
    if (!temp)
    {
        printParagraph("Please enter a temperature.")
        return;

    }

    //check if radiobox is checked. 

    if (Celsius.checked)
    {
        temp = Number(temp);
        newTemp = fToC(temp);
        printParagraph(newTemp + "Degree Celsius");
    }
    else if (Fahreneit.checked)
    {
        temp = Number(temp);
        newTemp = cToF(temp);
        printParagraph(newTemp + "Degree Fahreneit");

    }
    else
    {
        printParagraph("Please pick a button");
    }
}