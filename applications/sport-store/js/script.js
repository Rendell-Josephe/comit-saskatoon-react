function SignIn() {
    var retVal = confirm("Have you already had an account ?");
    if( retVal == true ) {
       var username = prompt("Username: ", "your username here");
       var password = prompt("Password: ");
       var x = document.getElementsByClassName("signin");
       x[0].innerHTML="Customer: "+username;
       return true;
    } else {
        alert ("You should sign up now !");
       return false;
    }
 }
//Stop and Move the marquee
 function pause() {
    document.getElementById("marquee-news").stop();  
 }
 function move() {
   document.getElementById("marquee-news").start();  
}