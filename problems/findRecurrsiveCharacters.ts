
type resultType = string;

const repeatedChracter = (input: string) => {
  let result: resultType[] = []

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j] && result.indexOf(input[j]) < 0) {
        result.push(input[j]);
      }
    }
  }
  return result;
}