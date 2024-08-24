text = prompt("Enter a positive integer");
n = parseInt(text);

while (n < 0 || isNaN(n)) {
    text = prompt("Enter a positive integer");
    n = parseInt(text);
}
            
isPrime(n);
showPrime(n);

function showPrime(n) {
    var primeNum = []
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primeNum.push(i)
        }
    }
    alert ("For n = " + n + " prime numbers are " + primeNum.toString());
}
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}