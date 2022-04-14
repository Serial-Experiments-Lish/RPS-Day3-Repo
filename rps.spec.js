const {playerOne, playerTwo, hands, getHand} = require("./rps");

//First test
describe("playerTwo name will be Lafayette", () => {
    test("playerTwo", () => {
        expect(playerTwo.name).toBe("Lafayette");
    });
});

//Second test
describe("playerOne to be truthy", () => {
    test("playerOne", () => {
        expect(playerOne.name).toBeTruthy();
    });
});

//Third test
describe("hands to have length of 3", () => {
    test("hands", () => {
        expect(hands).toHaveLength(3);
    });
});

//Fourth test
describe("getHands to have returned", () => {
    test("getHands", () => {
        const getHands = jest.fn(() => true);
        getHands();
        expect(getHands).toHaveReturned();
    });
});

//Fifth test
describe('getHand', () => {
    test('test hands not equal to scissors', () => {
        const handy = jest.fn();
        getHand(handy, 'rock');
        expect(handy).toHaveBeenCalled();
    });
});

