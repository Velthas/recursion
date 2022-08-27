// Iterative version
function fibonacci(n) {
    let penultimateFibo = 1; // Fibonacci of 1 is 1
    let secondToLastFibo = 1; // Fibonacci of 2 is 1
    let fiboNumber; // Store the result here
   
    if (n === 1 || n === 2) return 1; // This would be our base case in a recursive function
    else if (n === 0) return 0;
   
    for (let i = 2; i < n; i++) { // We start counting from 3 to remove redundant calculations
      fiboNumber = penultimateFibo + secondToLastFibo; // We use a bottom-up approach
      secondToLastFibo = penultimateFibo; // We only need to keep track of the penultimate
      penultimateFibo = fiboNumber; // and second to last fibonacci number to proceed
    }
   
    return fiboNumber;
  }
   
  console.log(fibonacci(100)); // Expected 3.5422484817926E+20
  console.log(fibonacci(10)); // Expected 55
  console.log(fibonacci(1)); // Expected 1
  console.log(fibonacci(42)); // Expected 267914296