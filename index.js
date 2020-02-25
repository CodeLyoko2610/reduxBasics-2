const expect = require('expect');

function counter(state, action) {
    if (state === undefined) {
        return state = 0; //Redux convention: return the default state when passed with state argument of type undefined
    } else if (action.type === "INCREMENT") {
        return state += 1
    } else if (action.type === "DECREMENT") {
        return state -= 1;
    } else {
        return state; //return current state when receiving unknown action
    }
}

expect(
    counter(0, {
        type: "INCREMENT"
    })
).toEqual(1);


expect(
    counter(1, {
        type: "INCREMENT"
    })
).toEqual(2);


expect(
    counter(2, {
        type: "DECREMENT"
    })
).toEqual(1);

expect(
    counter(1, {
        type: "DECREMENT"
    })
).toEqual(0);

expect(
    counter(0, {
        type: "SOMETHING_ELSE"
    })
).toEqual(0);

expect(
    counter(undefined, {
        type: "INCREMENT"
    })
).toEqual(0);

console.log("All tests passed.");