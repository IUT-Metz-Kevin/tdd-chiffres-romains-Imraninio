import { it, expect } from 'vitest';

const romains = ["I", "V", "X", "L", "C", "D", "M"];
const numer = [1, 5, 10, 50, 100, 500, 1000];

function RomainToNumeral(romain: string): number {
    let total = 0
    if (romain === 'I') return 1;
    if(romain === 'II') return 2;
    if(romain === 'III') return 3;
    if(romain === 'IV') return 4;
    else return 0;
}

test.each([['I', 1], ['II', 2], ['III', 3], ['IV', 4], ['V', 5]])('%s doit retourner %s', (input, expected) => {
  expect(RomainToNumeral(input)).toBe(expected);
});
