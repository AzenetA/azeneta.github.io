function checkEmail()
{
    //check textboxes to make sure that they are not empty
    //check to see if the text in both boxes is the same

    var email = document.getElementById("email").value;
    var confirm = document.getElementById("confirm").value;

    if(email == "")//conditional expression, when it is true then the code in the block will be executed
    {
        document.getElementById("email-error").innerHTML = "Please fill in this field";
    }

    else
    {
        document.getElementById("email-error").innerHTML = "";
    }

    //check to see if confirm textbox is empty
    if(confirm == "")//conditional expression, when it is true then the code in the block will be executed
    {
        document.getElementById("confirm-error").innerHTML = "Please fill in this field";
    }

    else
    {
        document.getElementById("confirm-error").innerHTML = "";
    }

    //check if both text boxes have the same value

    if(email!= confirm)//if the two strings are not the same
    {
        //print error
        document.getElementById("email-error").innerHTML = "Both emails must be the same";
        document.getElementById("confirm-error").innerHTML = "Both emails must be the same";
    }

}

function pizzaOrder()
{
    //radio buttons
    var output = "<h3> Pizza Order: ";
    if(document.getElementById("small").checked == true)
    {
        output += "Small ";
    }

    else if(document.getElementById("medium").checked == true)
    {
        output += "Medium ";
    }

    else
    {
        output += "Large ";
    }

    //checkboxes
   if(document.getElementById("pepperoni").checked == true)
    {
        output += "Pepperonni ";
    }

    if(document.getElementById("sausage").checked == true)
    {
        output = output + "Sausage ";
    }

    if(document.getElementById("mushrooms").checked == true)
    {
        output = output + " Mushrooms ";    }

    document.getElementById("output").innerHTML = output + "</h3>" ; 
}

