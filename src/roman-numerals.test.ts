import { it, expect } from 'vitest';

const romains = ["I", "V", "X", "L", "C", "D", "M"];
const numer = [1, 5, 10, 50, 100, 500, 1000];

function RomainToNumeral(romain: string): number {
    let indexRomain = 0;
    let total = 0;
    let preced = 0;
    for(let i = 0; i < romain.length; i++){
        indexRomain = romains.findIndex(rom => rom === romain[i]);
        if(numer[indexRomain] >= preced){
            total += numer[indexRomain]; 
        }
        else{
            total -= preced;
        }
        preced = numer[indexRomain];
    }
    return total;
}

test.each([['I', 1], ['II', 2], ['III', 3], ['V', 5]])('%s doit retourner %s', (input, expected) => {
  expect(RomainToNumeral(input)).toBe(expected);
});
