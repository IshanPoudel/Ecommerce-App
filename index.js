const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");


innerDiv.addEventListener("click" , changeBlue);
outerDiv.addEventListener("click" , changeBlue , true);

function changeBlue()
{
    
    this.style.backgroundColor = "lightblue"
}
