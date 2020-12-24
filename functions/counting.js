
/**
// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
 * 
// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
 * 
 * @param {String} str 
 */
const countBBc = (str) => {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      if (String(str[i]) === 'B') {
        result += 1;
      }
    }
    return result;
  }
  
  const countChar = (str, strfind) => {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      if (String(str[i]) === strfind) {
        result += 1;
      }
    }
    return result;
  }
  
  
  console.log(countBBc("BBC"));

  console.log(countChar("kakkerlak", "k"));
