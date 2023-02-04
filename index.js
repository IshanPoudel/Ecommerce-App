let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit =>
    {
        if (fruit.checked)
        {
            console.log(fruit.value);
        }
    });