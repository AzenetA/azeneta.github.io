function answer1()
{
    
    var q1;
    var q2;
    var q3;
    var q4;

    if(document.getElementsByClassName("Q1-A1").checked == document.getElementById("mike"))
    {
        q1 =+ "Correct! 25 Pts  ";
    }
    else
    {
        q1 =+ "Incorrect!  0  ";
    }

    if(document.getElementsByClassName("Q2-A2").checked == document.getElementById("Vanilla"))
    {
        q2 =+ "Correct! 25 Pts   ";

    }
    else
    {
        q1 =+ "Incorrect!  0  ";
    }
    
    if(document.getElementsByClassName("Q4-A4").checked != true)
    {
        q3 =+ "Incorrect!  0  ";
    }
    else
    {
        q3 =+ "Correct! 25 Pts   ";
    }

    if( document.getElementsByClassName("Q4-A4").checked != true)
    {
        q4 =+ "Incorrect!  0  ";
    }
    else
    {
        q4 =+ "Correct! 25 Pts   ";
    }


}

