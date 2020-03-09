function removeUrlAnchor(url){
 const includes = url.includes('#');

 if (!includes) {
   return url;
 }

 const pos = url.indexOf('#');

 return url.slice(0, pos);
}

console.log(removeUrlAnchor('www.codewars.com#about'));
console.log(removeUrlAnchor('www.codewars.com?page=1'));