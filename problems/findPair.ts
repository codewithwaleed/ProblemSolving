type resultType = number | any;

interface IObjectKeys {
    [key: number]: number | undefined;
}
const findPair = (input: number[], milestone: number) => {
    let hashMap: IObjectKeys = {};
    let result: resultType[] = [];

    for (let i = 0; i < input.length; i++) {

        const temp = input[i];
        if (hashMap[input[i]]) {
            result.push([hashMap[input[i]], input[i]])
        } else {
            hashMap[milestone - input[i]] = input[i];
        }
    }

    return result;
}

const results: number[] = findPair([10, 20, 30, 40, 100, 101], 50);
console.log(results, "results");