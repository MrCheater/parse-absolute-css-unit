var regexp = /(^-?\d*\.?\d+)(cm|mm|in|px|pt|pc)?$/;

module.exports = function parseAbsoluteCSSUnit(value) {
    if((value === undefined) || ((typeof value === 'number') && isFinite(value))) {
        return value;
    }
    var result = ('' + value).match(regexp);
    if((typeof value === 'string') && result) {
        switch(result[2]) {
            case 'cm':
                return (+result[1]) * 9600 / 254;
            case 'mm':
                return (+result[1]) * 960 / 254;
            case 'in':
                return (+result[1]) * 96;
            case 'pt':
                return (+result[1]) * 4 / 3;
            case 'pc':
                return (+result[1]) * 16;
            default:
                return (+result[1]);
        }
    } else {
        throw new Error('Incorrect value: ' + value);
    }
};