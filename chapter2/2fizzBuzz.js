function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        
        let divThree = i % 3 == 0;
        let divFive = i % 5 == 0;
        let result = '';

        if (divThree) result += 'Fizz';
        if (divFive) result += 'Buzz';

        console.log(result || i)
    }
}
fizzBuzz(100);