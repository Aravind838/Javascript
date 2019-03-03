/*
 * @Author: Aravind Reddy, * @https://www.linkedin.com/in/aravind-reddy-339ba2109 
 * @Date: 2019-03-03 12:28:16 
 * @Organization : http://www.cedarinfotech.com, * @https://www.linkedin.com/company/cedarinfotech 
 * @Mentor name: Pankaj Bhagat, * @https://www.linkedin.com/in/pankajbhagat/ 
 * @Last Modified by: Aravind Reddy
 * @Last Modified time: 2019-03-03 22:29:03
 */

var Str=[];
var t = prompt('enter number of times');
for (var i=1; i<=t; i++){
Str.push(prompt('enter the string'));
}

count=1;
while (count<=t){
var element=Str.pop();
element=element.split('a').join('').split('e').join('').split('i').join('').split('o').join('').split('u').join('').split('A').join('').split('E').join('').split('I').join('').split('O').join('').split('U').join('');
console.log(element);
count++;
}