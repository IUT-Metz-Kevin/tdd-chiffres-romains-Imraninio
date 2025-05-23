import { it, expect } from "vitest";

function RomainToNumeral(romain: string): number{
    if (romain === "I") return 1;

    else return 0
}

it("Doit retourner 1 lorsqu'on entre le chiffre romain I.", function () {
  expect(RomainToNumeral("I")).toBe(1);
});