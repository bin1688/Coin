var quarters
var dimes
var nickels
var pennies

var $ = function ()
{
var cents = document.getElementById("cents").value;
quarters = parseInt(cents / 25)
document.getElementById("quarters").value = quarters;
cents = cents % 25

dimes = parseInt(cents / 10);
document.getElementById("dimes").value = dimes;
cents = cents % 10;

nickels = parseInt(cents / 5);
document.getElementById("nickels").value = nickels;
cents = cents % 5;

document.getElementById("pennies").value = cents;
}
window.onload=function(){
    document.getElementById("calculate").addEventListener("click", $);
}
