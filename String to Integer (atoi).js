var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;

    while(s[i] === ' '){
        i++;
    }

    if(s[i] === '+' || s[i] === '-'){
        sign = s[i] === '+' ? 1: -1;
        i++;
    }

    while(i < s.length && s[i] >= '0' && s[i] <= '9'){
        result = result * 10 + (s[i] - '0');
        i++;
    }

    result *= sign;

    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);

    if(result > INT_MAX){
        return INT_MAX;
    } else if(result < INT_MIN){
        return INT_MIN;
    } else {
        return result;
    }
};

//Example usage:
console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));