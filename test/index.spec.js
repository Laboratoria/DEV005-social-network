// importamos la funcion que vamos a testear

/**
 * @jest-environment ./src/test/my-custom-environment
 */


import { myFunction } from "../src/lib/index";

describe("myFunction", () => {
    it("debería ser una función", () => {
        expect(typeof myFunction).toBe("function");
    });
});
