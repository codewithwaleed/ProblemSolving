type resultType = number | any

interface IObjectKeys {
    [key: number]: number | undefined;
}

const findPair = (input: number[], milestone: number) => {
    let hashMap: IObjectKeys = {};
    let results: resultType[] = [];
    for (let i = 0; i < input.length; i++) {
        const temp = input[i];
        if (input[i] === milestone) {
            results.push(milestone)
        }
        else if (hashMap[input[i]]) {
            results.push([hashMap[input[i]], input[i]])
        } else {
            hashMap[milestone - input[i]] = input[i];
        }
    }
    return results;
}

const result: number[] = findPair([10, 20, 10, 40, 50, 60, 70, 30], 100);
console.log(result);
