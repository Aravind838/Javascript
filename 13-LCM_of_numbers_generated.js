/*
 * @Author: Aravind Reddy, * @https://www.linkedin.com/in/aravind-reddy-339ba2109 
 * @Date: 2019-03-03 12:29:03 
 * @Organization : http://www.cedarinfotech.com, * @https://www.linkedin.com/company/cedarinfotech 
 * @Mentor name: Pankaj Bhagat, * @https://www.linkedin.com/in/pankajbhagat/ 
 * @Last Modified by: Aravind Reddy
 * @Last Modified time: 2019-03-03 13:32:29
 */

var a = (Math.floor(Math.random() * 10));
var b = (Math.floor(Math.random() * 10));
document.getElementById("demo1").innerHTML= "First Number - " + a;
document.getElementById("demo2").innerHTML= "Second Number - " + b;
function myFunction() {
      var x = a;
      var y = b;
      function LCM(x, y) {
         return (!x || !y) ? 0 : Math.abs((x * y) / GCD(x, y));
       }
       
       function GCD(x, y) {
         x = Math.abs(x);
         y = Math.abs(y);
         while(y) {
           var t = y;
           y = x % y;
           x = t;
         }
         return x;
       }
  var z= document.getElementById("lcm_13").value;
    if (z == LCM(x,y) )
       alert("Congrats");
    else
       alert("Sorry! Incorrect Answer");   
  }