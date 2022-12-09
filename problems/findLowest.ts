function onlyNumbers(input: number[]) {
    return input.every(element => {
        return typeof element === 'number';
    })
}

const findLowest = (input: number[]) => {
    if (!onlyNumbers(input)) {
        return false;
    }
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] > input[j]) {
                let temp: number;
                temp = input[i];
                if (!isNaN(temp)) {
                    input[i] = input[j];
                    input[j] = temp;
                } else {
                    input.splice(i, 1);
                }

            }
        }
    }
    return input;
}

console.log(findLowest([-10, -20, 99.2, 99, 19, 15]));