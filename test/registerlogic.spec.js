/**
 * @jest-8environment ./src/test/my-custom-environment
 */

import { registerLogic } from "../src/lib/registerLogic";

test("example", () => {
    const mock = jest.fn();
    // eslint-disable-next-line no-console
    console.log(mock);

    mock(true);

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalled(true);
});
