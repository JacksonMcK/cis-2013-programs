var $ = function (id) 
{
    return document.getElementById(id);
};

doStuffComputer = function()
{
	var counter = 0;
	var output = "";
	
//insert code below    
    
    for (counter = 1; counter <= 100; counter++) {
        if (counter % 15 === 0) {
            output = "FizzBuzz";
        } else if (counter % 3 === 0) {
            output = "Fizz";
        } else if (counter % 5 === 0) {
            output = "Buzz";
        } else {
            output = counter;
        }
        alert(output);
    }
    
    
    
    
    
    
	
};



window.onload = function()
{
	$("doIt").onclick = doStuffComputer;
};