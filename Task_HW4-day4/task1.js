/*
Task 1: Count IP Addresses
- Implement a function that receives two IPv4 addresses, and returns the number of addresses between them
(including the first one, excluding the last one).
 - All inputs will be valid IPv4 addresses in the form of strings.
 - The last address will always be greater than the first one.
*/

function subtractionIP(firstIPv4, secondIPv4){
    try{

        const regIP = /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/;

        if(!typeof firstIPv4==='string' && !typeof secondIPv4==='string'){
            throw new TypeError("Input arguments should be strings");
        }

        if(!regIP.test(firstIPv4) && !regIP.test(secondIPv4)){
            throw new Error("Input strings should be valid IPv4 addresses");
        }

        const IPtoNumber = (ip) => {
            return ip.split('.').reduce((acc, el) => Number(el) + acc * 256, 0);
        }
    
        const firstNumb = IPtoNumber(firstIPv4);
        const secondNumb = IPtoNumber(secondIPv4);
        return secondNumb - firstNumb;
    
     
    }catch(err){
        return `${err.name}: ${err.message}`
    }
}
