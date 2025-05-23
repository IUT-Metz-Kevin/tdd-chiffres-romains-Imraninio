import { it, expect } from 'vitest';

const romains = ["I", "V", "X", "L", "C", "D", "M"];
const numer = [1, 5, 10, 50, 100, 500, 1000];

function RomainToNumeral(romain: string): number {
  if (romain === 'I') return 1;
  if(romain === 'II') return 2;
  if(romain === 'III') return 3;
  else return 0;
}

test.each([['I', 1], ['II', 2], ['III', 3]])('%s doit retourner %s', (input, expected) => {
  expect(RomainToNumeral(input)).toBe(expected);
});
