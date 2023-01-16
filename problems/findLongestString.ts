

interface IObjectKeys {
    [key: string]: number | undefined
}

const findLongestString = (input: string[]) => {
    if(input.length === 0){
        return false
    }

    let longestStrLen: number = input[0].length
    let longestStr = input[0]
    let result:IObjectKeys = {}

    for(let i=1; i< input.length; i++){
        let tempMax = input[i].length
        if(tempMax > longestStrLen){
            longestStr = input[i]
            longestStrLen = input[i].length
        }
    }

    result[longestStr] = longestStrLen

    return result;
}

console.log(findLongestString(["abc", "ac", "abbccdd"]));