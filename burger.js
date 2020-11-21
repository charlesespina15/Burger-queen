var msq = 0;
var sundae = 0;
var bq = 0;
var pbw = 0;
var cw = 0;
var total = 0;

var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;

function Sundae(){
  sundae = sundae + 39;
  num2++; 
  document.getElementById("sundae").innerHTML = "Sundae : Order x " + sundae + " (" + num2 +")";
document.getElementById("picture").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOqpm2quiXkBxIiFiQuc-0d_zSM9YPgekxww&usqp=CAU')"
}

function mushroom(){
  msq = msq + 120;
  num1++; 
  document.getElementById("msq").innerHTML = "Mushroom Swiss Queen : Order x " + msq + " (" + num1 +")";

document.getElementById("picture").style.backgroundImage = "url('https://i.pinimg.com/originals/fc/6b/e1/fc6be1f4c94f7f3e3d4a8bf9e4185c56.png')"
}

function bacon(){
   bq = bq + 240;
  num3++; 
  document.getElementById("bq").innerHTML = "Bacon Queen : Order x " + bq + " (" + num3 +")";
document.getElementById("picture").style.backgroundImage = "url('https://live.mrf.io/statics/i/ps/4.bp.blogspot.com/-1c1nkTN641w/WiYqhtA008I/AAAAAAAA6kw/22KYgMVmkPs9n3BHKrfe5ao-N774b1QtwCLcBGAs/s400/burger-king-bacon-king-jr.png')"
}

function pepperoni(){
   pbw = pbw + 205;
  num4++; 
  document.getElementById("pbw").innerHTML = "Pepperoni Bacon Whopper : Order x " + pbw + " (" + num4 +")";
  document.getElementById("picture").style.backgroundImage = "url('https://cdn.phonebooky.com/blog/wp-content/uploads/2020/07/14123823/Pepperoni-Bacon-Whopper-from-Burger-King.jpg')"
}
 
function cheesewhopper(){
   cw = cw+ 170;
  num5++; 
  document.getElementById("cw").innerHTML = "4 - Cheese Whopper : Order x " + cw + " (" + num5 +")";
   document.getElementById("picture").style.backgroundImage = "url('https://1.bp.blogspot.com/-Rj0WWuTPTuY/U52HuIGh3vI/AAAAAAAAdj0/qS5iIOdwJ54/s1600/burger-king-philippines-four-cheese-whopper.jpg')"
}

function Total(){
total = msq + sundae + bq + pbw + cw;
  document.getElementById("total").innerHTML = "Total : " + total;
}
function Clear() {
 var c = confirm("Do you want to cancel the order?");
  
if (c == true) {
 msq = 0;
 pbw = 0;
  cw = 0;
 bq = 0;
 sundae = 0;
num1 = 0;
 num2 = 0
 num3 = 0;
 num4 = 0;
num5 = 0;
document.getElementById("bq").innerHTML= "Bacon Queen :";
document.getElementById("msq").innerHTML= "Mushroom Swiss Queen :";
document.getElementById("pbw").innerHTML= "Pepperoni Bacon Whopper :";
document.getElementById("cw").innerHTML= "4 - Cheese Whopper :";
document.getElementById("sundae").innerHTML= "Sundae :";
document.getElementById("total").innerHTML= "Total :";
document.getElementById("picture").style.backgroundImage = "url('https://www.logolynx.com/images/logolynx/3c/3c52eeab29cac5f924460326278ba9a3.gif')";
}
}