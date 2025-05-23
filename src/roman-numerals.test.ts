import { it, expect } from 'vitest';

function RomainToNumeral(romain: string): number {
  if (romain === 'I') return 1;
  else return 0;
}

test.each([['I', 1], ['II', 2]])('%s doit retourner %s', (input, expected) => {
  expect(RomainToNumeral(input)).toBe(expected);
});
