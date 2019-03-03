/*
 * @Author: Aravind Reddy, * @https://www.linkedin.com/in/aravind-reddy-339ba2109 
 * @Date: 2019-03-03 12:26:04 
 * @Organization : http://www.cedarinfotech.com, * @https://www.linkedin.com/company/cedarinfotech 
 * @Mentor name: Pankaj Bhagat, * @https://www.linkedin.com/in/pankajbhagat/ 
 * @Last Modified by:   Aravind Reddy 
 * @Last Modified time: 2019-03-03 12:26:04  
 */

count = 1
while(count <= 5){
  var num = Math.ceil(Math.random() * 10);
  var gnum = prompt('Guess the number between 1 and 10 inclusive');
  if (gnum == num)
    {alert('Matched');
     break;}
  if (gnum>10)
     alert('Out of range')
  else if(gnum>num)
     alert('Not matched, guessed number is greater' );
  else
     alert('Not matched, guessed number is smaller' );
count++;
}   