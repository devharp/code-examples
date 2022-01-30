
function genHexString(len) {
    let str = '';
    for (let i = 0; i < len; i++) {
        str += (parseInt(Math.random() * 255)).toString(16);
    }
    return str;
}

module.exports = {genHexString}