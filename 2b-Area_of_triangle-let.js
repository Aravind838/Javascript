/*
 * @Author: Aravind Reddy, * @https://www.linkedin.com/in/aravind-reddy-339ba2109 
 * @Date: 2019-03-03 12:25:38 
 * @Organization : http://www.cedarinfotech.com, * @https://www.linkedin.com/company/cedarinfotech 
 * @Mentor name: Pankaj Bhagat, * @https://www.linkedin.com/in/pankajbhagat/ 
 * @Last Modified by:   Aravind Reddy 
 * @Last Modified time: 2019-03-03 12:25:38  
 */

let area=function(side1, side2, side3){
    let s = (side1 + side2 + side3)/2;
let area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
window.alert('Area of Triangle is: ' + area);   
};
area(10,20,30);