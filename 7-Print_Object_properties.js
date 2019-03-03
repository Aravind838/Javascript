/*
 * @Author: Aravind Reddy, * @https://www.linkedin.com/in/aravind-reddy-339ba2109 
 * @Date: 2019-03-03 12:27:06 
 * @Organization : http://www.cedarinfotech.com, * @https://www.linkedin.com/company/cedarinfotech 
 * @Mentor name: Pankaj Bhagat, * @https://www.linkedin.com/in/pankajbhagat/ 
 * @Last Modified by:   Aravind Reddy 
 * @Last Modified time: 2019-03-03 12:27:06  
 */

var obj=Object(prompt('Object'));
var prop=Object.getOwnPropertyNames(Math).filter(function(a){
                        return typeof(Math[a])==='function';
                        });

window.alert(Object.getOwnPropertyNames(obj) + "\n" + "\n" + prop);