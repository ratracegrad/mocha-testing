function palindrome(str) {
    return str.toLowerCase() === str.split('').reverse().join('').toLowerCase();
}

module.exports = palindrome;