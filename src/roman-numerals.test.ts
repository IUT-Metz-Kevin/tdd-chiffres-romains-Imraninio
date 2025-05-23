import { it, expect } from "vitest";

it("Doit retourner 1 lorsqu'on entre le chiffre romain I.", function () {
  expect(RomainToNumeral("I")).toBe(1);
});