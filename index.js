async function loadFile()
{
    let loadFile=true;

    if(fileLoaded)
    {
        return 'File loaded';

    }
    else
    {
        throw "File NOT Loaded";
    }
}

async function display()
{
    try
    {
        document.getElementById("p1").innerHTML = await loadFile();

    }
    catch (error)
    {
        document.getElementById("p1").innerHTML = error;
    }
}

display();