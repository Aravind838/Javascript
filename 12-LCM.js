/*
 * @Author: Aravind Reddy, * @https://www.linkedin.com/in/aravind-reddy-339ba2109 
 * @Date: 2019-03-03 12:28:50 
 * @Organization : http://www.cedarinfotech.com, * @https://www.linkedin.com/company/cedarinfotech 
 * @Mentor name: Pankaj Bhagat, * @https://www.linkedin.com/in/pankajbhagat/ 
 * @Last Modified by:   Aravind Reddy 
 * @Last Modified time: 2019-03-03 12:28:50  
 */

function myFunction() {
    var x = document.getElementById("P_num1").value;
    var y = document.getElementById("P_num2").value;
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
    document.getElementById("demo").innerHTML =LCM(x, y) ;
  }