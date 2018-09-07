function ValidateEmail() 
{
 var x = document.forms["myForm"]["emailAddr"].value;
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
  if (x == "")
   {
    alert("Email must be filled out");
    return false;
   }
    alert("You have entered an invalid email address!")
    return (false)
}

function Demo()
{
alert("Demo is not yet available")
}

function Login(){
    alert("Login details is not yet available");
}
