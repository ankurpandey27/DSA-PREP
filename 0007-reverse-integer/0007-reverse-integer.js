/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let original = x
    let rev = 0;
    let rem = 0;

    if( x < 0){
        x = Math.abs(x);
    }
    while( x > 0){
        rem = x % 10;
        x = Math.floor(x/10);
        rev = (rev * 10) + rem;
    }
    if(original < 0 ){
        rev = -rev
    }
  const minSigned32Bit = -2147483648;
  const maxSigned32Bit = 2147483647;
  if(Number.isInteger(rev) && (rev >= minSigned32Bit) && (rev <= maxSigned32Bit)){
      return rev
  };
    return 0;
};