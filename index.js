//rest parameters. 
// Packs arguments into an array


let total = sum (2,3);

sum (2 ,3 , displayOnDom)

function sum (x ,y , callBack)
{
    result = x+y;
    callBack(result);
}

function displayConsole(output)
{
    console.log(output);
}

function displayOnDom(output)
{
    document.getElementById("p1").innerHTML = output + "is the total sum";
}
//Need to add arrowfunction 
