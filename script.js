function fibonacci(num) {
// your code here
	let a = 0, b = 1;
  let result = [a, b]; // Initialize with first two Fibonacci numbers
  
  for (let i = 2; i < num; i++) {
    let c = a + b;
    result.push(c); // Push the next Fibonacci number to the result array
    a = b;
    b = c;
  }

  return result;
}

module.exports = fibonacci;
