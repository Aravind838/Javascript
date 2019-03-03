/*
 * @Author: Aravind Reddy, * @https://www.linkedin.com/in/aravind-reddy-339ba2109 
 * @Date: 2019-03-03 12:27:21 
 * @Organization : http://www.cedarinfotech.com, * @https://www.linkedin.com/company/cedarinfotech 
 * @Mentor name: Pankaj Bhagat, * @https://www.linkedin.com/in/pankajbhagat/ 
 * @Last Modified by:   Aravind Reddy 
 * @Last Modified time: 2019-03-03 12:27:21  
 */

var countDownDate = new Date("March 20, 2019 23:59:59").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var Req_time = countDownDate - now;

  var days = Math.floor(Req_time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((Req_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((Req_time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((Req_time % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (Req_time < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);