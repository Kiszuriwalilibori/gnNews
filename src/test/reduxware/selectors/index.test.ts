/* eslint-disable testing-library/no-node-access */
import { createCountryNews } from "../../../reduxware/selectors";
import { fakeState, fakeStateNoArticles } from "../../../fixtures";
import { DataWithCountry } from "../../../types";

describe("given createCountryNews function", () => {
    describe("when called with valid aruments", () => {
        it("displays correct results", () => {
            let result;
            result = createCountryNews(fakeState, "pl");
            expect(result).toBe(fakeState[0].data.articles);
            result = createCountryNews(fakeState, "fr");
            expect(result).toBe(fakeState[1].data.articles);
            result = createCountryNews(fakeState, "br");
            expect(result).toBe(fakeState[2].data.articles);
        });
    });
    describe("when called with valid news but invalid country code ( articles for this vountry code do not exist in news)", () => {
        it("returns empty array", () => {
            let result;
            result = createCountryNews(fakeState, "cn");
            expect(result).toStrictEqual([]);
        });
    });

    describe("when it ahs news which does not contain articles array as property", () => {
        it("returns an empty array", () => {
            let result;
            result = createCountryNews(fakeStateNoArticles as DataWithCountry[], "pl");
            expect(result).toStrictEqual([]);
        });
    });
});
