/*
 * @Author: Aravind Reddy, * @https://www.linkedin.com/in/aravind-reddy-339ba2109 
 * @Date: 2019-03-03 12:27:54 
 * @Organization : http://www.cedarinfotech.com, * @https://www.linkedin.com/company/cedarinfotech 
 * @Mentor name: Pankaj Bhagat, * @https://www.linkedin.com/in/pankajbhagat/ 
 * @Last Modified by: Aravind Reddy
 * @Last Modified time: 2019-03-03 22:29:42
 */

var Str=[];
Str.push(prompt('enter the string')),
Str.push(prompt('enter the string'));
Str.push(prompt('enter the string'));
Str.push(prompt('enter the string'));
Str.push(prompt('enter the string'));


count=1;
while (count<=5){
var element=Str.pop();

element=element.split('a').join('').split('e').join('').split('i').join('').split('o').join('').split('u').join('').split('A').join('').split('E').join('').split('I').join('').split('O').join('').split('U').join('');
console.log(element);
count++;
}