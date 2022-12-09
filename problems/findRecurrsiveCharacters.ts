type resultType = string;

const repeatedCharacter = (input: string) => {
    let result: resultType[] = []
      for (let i = 0; i < input.length - 1; i++) {
        for (let j = i + 1; j < input.length; j++) {
          if (input[i] === input[j] && result.indexOf(input[i]) < 0) {
            result.push(input[i]) ;
          }
        }
      }
      return result;
    };
    console.log(repeatedCharacter("waleedaaa"));
    