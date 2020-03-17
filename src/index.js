module.exports = function reverse(n) {
    let input = (n < 0) ? -n + '' : n + '';
    let out = '';
    for (let i = 0; i < input.length; i++) {
        out += input[input.length - 1 - i];
    }
    return +out
}