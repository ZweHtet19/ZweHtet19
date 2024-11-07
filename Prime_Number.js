// Students write their code between these lines. 
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output. 
//

// Write isPrime(num), which returns true if the number is prime and false otherwise.
function isPrime(num) {
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv

    // students must use polymorphic messageFormatter function to display answer
    messageFormatter(); 
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;

    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Extend with findPrimesInRange(start, end) to return all prime numbers within a specified range.
function findPrimesInRange(start, end) {
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv

    // reuse isPrime() function here
    
    // students must use polymorphic messageFormatter function to display answer
    if (!Array.isArray(start) || start.length !== 2 || typeof start[0] !== 'number' || typeof start[1] !== 'number') {
        messageFormatter("Invalid input. Please provide a number or a valid range (array of two numbers).");
        return;
    }

    
    let [low, high] = start;

   
    if (low > high) {
        messageFormatter("Invalid range. The start number must be less than or equal to the end number.");
        return;
    }

    let primes = [];
    for (let i = low; i <= high; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    // Return the primes in the specified range
    messageFormatter(`Primes between ${low} and ${high}: [${primes.join(', ')}]`);


    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Polymorphic messageFormatter function
function messageFormatter(input) {
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv


    if (typeof input === 'number') {
        if (isPrime(input)) {
            console.log(`${input} is a prime number.`);
        } else {
            console.log(`${input} is NOT a prime number.`);
        }
    } else {
        console.log(input);
    }
}
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^


// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(checkPrimeNum(2));
// Expected Output: 2 is a prime number.

console.log(checkPrimeNum(1));
// Expected Output: 1 is NOT a prime number.

console.log(checkPrimeNum(13));
// Expected Output: 13 is a prime number.

console.log(checkPrimeNum(25));
// Expected Output: 25 is NOT a prime number.

console.log(findPrimesInRange([10, 20]));
// Expected Output: Primes between 10 and 20: [11, 13, 17, 19]

console.log(findPrimesInRange([30, 50]));
// Expected Output: Primes between 30 and 50: [31, 37, 41, 43, 47]

console.log(findPrimesInRange('test'));
// Expected Output: Invalid input. Please provide a number or a valid range (array of two numbers).
