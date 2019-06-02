var Fezzik = "Fezzik";
var Buttercup = "Buttercup";
var DreadPirateRoberts = "Dread Pirate Roberts";
var Viccini = "Viccini";
var Inigo = "Inigo Montoya";

function Cliffsofinsanity (input1)
{
    var Cliffsresonse;
    if (input1 == "See Cliffs")
    {
        Cliffsresonse = true;
         document.getElementById("Cliffsresponse").innerHTML= "you see four individuals scaling the cliffs";
    }
    else if (input1 == "approach Cliffs")
    {
        Cliffsresonse = true;
         document.getElementById("Cliffsresponse").innerHTML="these cliffs look impossible to climb";
    }
    else 
    {
        Cliffsresonse = false;
         document.getElementById("Cliffsresponse").innerHTML="Shriking eels attack and destroy you";
    }
 
    

    return Cliffsresonse;
}
var input1 = document.getElementById("C_input")
Cliffsresonse=Cliffsofinsanity(input1);