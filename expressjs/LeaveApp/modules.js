
function genRanHex(len){
    const charset = '0123456789abcdef';
    let hexcode = '';
    for (let i = 0; i < len; i++) {
        hexcode += charset[parseInt( Math.random() * charset.length)];
    }
    return hexcode;
}

module.exports = { genRanHex };