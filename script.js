function fibonacci(num) {
// your code here
	int a = 0,b=1;
	for (let i = 0; i < num; i++) {
		int c = a + b;
		a = b;
		b =c;
		return c;
		
	}
}

module.exports = fibonacci;
