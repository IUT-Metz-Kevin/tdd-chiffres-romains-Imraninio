import { it, expect } from 'vitest';

const romains = ["I", "V", "X", "L", "C", "D", "M"];
const numer = [1, 5, 10, 50, 100, 500, 1000];

function RomainToNumeral(romain: string): number {
    let indexRomain = 0;
    let total = 0;
    let preced = 0;
    for(let i = romain.length - 1; i >= 0; i--){
        indexRomain = romains.indexOf(romain[i])
        let val = numer[indexRomain];
        if(val >= preced){
            total += val; 
        }
        else{
            total -= val;
        }
        preced = val
    }
    return total;
}

test.each([['I', 1], ['II', 2], ['III', 3], ['V', 5], ['IV', 4]])('%s doit retourner %s', (input, expected) => {
  expect(RomainToNumeral(input)).toBe(expected);
});
