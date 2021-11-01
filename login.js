function validate()
{   /* id=uname in html doc */
    var username = document.getElementById("uname");
    var password = document.getElementById("pass");
    var email    = document.getElementById("mail");
    var address  = document.getElementById("addr");
    
    if ( username.value.trim() == "" )
    {
        alert("Blank Username");
        /* puts red box around user name */
        username.style.border = "solid 3px red";
        return false;
    }
    else if ( password.value.trim() == "" )
    {
        //alert("Blank Password");
        // password.style.border = "solid 3px red";
        document.getElementById("lbluser").style.visibility="visible";
        return false;
    }
    else if (password.value.trim().length < 5)
    {
        alert("password must be greater that 4 chars");
        password.style.border = "solid 3px red";
        return false;
    }
    else if (email.value.trim() == "")
    {
        //alert("Blank Email Address");
        email.style.border = "solid 3px red";
        document.getElementById("euser").style.visibility="visible";
        return false;
    }
    else if (address.value.trim() == "")
    {
        //alert("Blank Email Address");
        address.style.border = "solid 3px red";
        document.getElementById("add").style.visibility="visible";
        return false;
    }
    else{
        return true;
    }
}