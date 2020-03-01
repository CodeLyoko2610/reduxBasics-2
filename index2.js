const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

const {
    createStore
} = Redux;

//Create a store
const store = createStore(counter);

const render = () => {
    //1: getState method
    document.body.innerText = store.getState();
}

//3: subscribe method
store.subscribe(render);
//Call render function the first time to initiate state
render();

document.addEventListener('click', () => {
    //2: dispatch method
    store.dispatch({
        type: "INCREMENT"
    });
})