function readInput() {
    let input = [];
    while (true) {
        text = prompt("Enter an integer (a negative to quit):");
        n = parseInt(text);
        while (isNaN(n)) {
            text = prompt("Enter an integer (a negative to quit):");
            n = parseInt(text);
        }
        if (n > 0) {
            input.push(n);      
        } else {
            break;
        }
    }
    return input;
}

function displayStats(input) {
    var max = Math.max(...input);
    var min = Math.min(...input);

    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += input[i];
    }
    const average = sum / input.length;

    let message = (input.length == 0) ? 'For the list that is empty, the average is 0, the minimum is 0, and the maximum is 0' : 
    'For the list ' + input.toString() + ' the averange is ' + average.toFixed(2) + ', the minimum is ' + min + ', and the maximum is ' + max ;

    alert(message);
}

list = readInput();
displayStats(list);