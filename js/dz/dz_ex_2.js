function padString(str, strLength, symb, right = true) {
    if(typeof str !== 'string' ) return 'Str param is not type of string';
    if(typeof strLength !== 'number' ) return 'strLength param is not type of number';
    if(isNaN(strLength)) return 'strLength param is NaN';
    if(symb.length !== 1) return 'Symb param should be single char';




}


console.log(padString(null, 2, '*', false));