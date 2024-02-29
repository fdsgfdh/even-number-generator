const axios = require('axios');
const prime = require('desel-prime');
require('dotenv').config();

// Function to generate even numbers up to a given limit
function generateEvenNumbers(limit) {
    const no = prime.generatePrimes(50);
    console.log(no);
    const evens = [];
    for (let i = 2; i <= limit; i += 2) {
        evens.push(i);
    }
    return evens;
}

module.exports = generateEvenNumbers;

