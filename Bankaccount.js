// Students write their code between these lines. 
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output. 
//

// Mock Data 
balance = 5000;
transactionHistory = ['Deposited 10000 into Savings Account', 'Withdrawn 5000 from Savings Account'];
this.accountNumber = accountNumber;
this.balance = balance;
console.log(`A/c No.: ${accountNumber}`);
console.log(`Opening Balance: $${balance}`);   

function getBalance() {
    // Write function description 
    this.balance += amount;
    console.log(`Amount $${amount} deposited into account ${this.accountNumber}.`);
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv



    
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function deposit(amount) {
    // Write function description 

    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    this.balance += amount;
    console.log(`Deposited: $${amount}`);
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function withdraw(amount) {
    // Write function description 

    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Amount $${amount} withdrawn from account ${this.accountNumber}.`);
      } else {
        console.log(`Insufficient balance in account ${this.accountNumber}.`);
      }
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function getTransactionHistory() {
    // Write function description 

    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    console.log("Transaction History");
    transactionHistory.forEach((transaction, index) => {
        console.log(`${index + 1}) ${transaction}`);
    });
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(getBalance());
// Expected Output: 5000

deposit(4000);
console.log(getBalance());
// Expected Output: 9000

withdraw(3000);
console.log(getBalance());
// Expected Output: 6000

console.log(getTransactionHistory());
/* Expected Output:

Transaction History
1) Deposited 10000 into Savings Account
2) Withdrawn 5000 from Savings Account
3) Deposited 4000 into Savings Account
4) Withdrawn 3000 from Savings Account

*/
