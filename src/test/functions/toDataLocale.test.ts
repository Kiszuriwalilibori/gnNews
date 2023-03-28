/* eslint-disable testing-library/no-node-access */
import toDataLocale from "../../functions/toDataLocale";
import { PermittedLanguages } from "../../types";

describe("given toDataLocale function", () => {
    describe("when called with valid arguments", () => {
        it("displays correct results with respect both to value and language", () => {
            const pl1 = toDataLocale("2023-03-23T07:40:00Z", "pl");
            const pl2 = toDataLocale("2023-03-23T07:34:51Z", "pl");
            const pl3 = toDataLocale("2023-03-23T07:23:00Z", "pl");
            const en1 = toDataLocale("2023-03-23T07:40:00Z", "en");
            const en2 = toDataLocale("2023-03-23T07:34:51Z", "en");
            const en3 = toDataLocale("2023-03-23T07:23:00Z", "en");

            expect(pl1).toBe("czwartek, 23 marca 2023 08:40:00");
            expect(pl2).toBe("czwartek, 23 marca 2023 08:34:51");
            expect(pl3).toBe("czwartek, 23 marca 2023 08:23:00");
            expect(en1).toBe("Thursday, March 23, 2023 8:40:00 AM");
            expect(en2).toBe("Thursday, March 23, 2023 8:34:51 AM");
            expect(en3).toBe("Thursday, March 23, 2023 8:23:00 AM");
        });
    });
    describe("when called with invalid country code, but valid string it returns correct english date", () => {
        it("displays correct results with respect both to value and language", () => {
            const xx1 = toDataLocale("2023-03-23T07:40:00Z", "xx" as PermittedLanguages);
            const xx2 = toDataLocale("2023-03-23T07:34:51Z", "xx" as PermittedLanguages);
            const xx3 = toDataLocale("2023-03-23T07:23:00Z", "xx" as PermittedLanguages);

            expect(xx1).toBe("Thursday, March 23, 2023 8:40:00 AM");
            expect(xx2).toBe("Thursday, March 23, 2023 8:34:51 AM");
            expect(xx3).toBe("Thursday, March 23, 2023 8:23:00 AM");
        });
    });
    describe("when called with invalid date it will return warning", () => {
        it("displays correct results with respect both to value and language", () => {
            const xx1 = toDataLocale("misio", "xx" as PermittedLanguages);
            const xx2 = toDataLocale("124345454", "xx" as PermittedLanguages);
            const xx3 = toDataLocale("se546t43vg54j90w5 ddgf", "xx" as PermittedLanguages);

            expect(xx1).toBe("Invalid Date Invalid Date");
            expect(xx2).toBe("Invalid Date Invalid Date");
            expect(xx3).toBe("Invalid Date Invalid Date");
        });
    });
});
