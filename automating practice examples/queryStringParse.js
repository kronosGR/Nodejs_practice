const queryString = require("node:querystring");
const url =
  "http://www.opencanvas.co.uk?myName=Shaun&myAge=28&comment=Yes+I+am+getting+old";

const parsedUrl = queryString.parse(url.substring(url.indexOf("?") + 1));
console.log(`Hi my name is ${parsedUrl.myName}`);
console.log(`I am ${parsedUrl.myAge}`);
console.log(`Oh and... ${parsedUrl.comment}`);
