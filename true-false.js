/**
 Truthy:
1.true
2. Any number (+ve, -ve) will be truthy other than 0
3. Any string is truthy except empty string with one white space
4. '0', 'false'
5. {}, []
 Falsy:
1. false
2. 0
3. '' (empty string)
4. undefined
5. null
 */


let x = null;
console.log(x);

if(x){
  console.log('value of x is truthy');
  
}else{
  console.log('value of x is falsy');
  
}