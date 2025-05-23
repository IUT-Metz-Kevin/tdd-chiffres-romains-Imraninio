import { it, expect } from 'vitest';

const romains = ["I", "V", "X", "L", "C", "D", "M"];
const numer = [1, 5, 10, 50, 100, 500, 1000];

function RomainToNumeral(romain: string): number {
    let total = 0
    for(let i = 0; romain.length; i++){
        if(romain[i] === "I") total++
    }
    return total;
}

test.each([['I', 1], ['II', 2], ['III', 3], ['IV', 4]])('%s doit retourner %s', (input, expected) => {
  expect(RomainToNumeral(input)).toBe(expected);
});
