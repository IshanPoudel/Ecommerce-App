//counter program. 
// everytime you click the counter , the point increases. 

count = 0;
document.getElementById("counter").onclick = function()
{
    count += 1;
    document.getElementById("p1").innerHTML = "Count: " + count;
}
