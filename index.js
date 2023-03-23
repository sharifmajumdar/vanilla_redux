const { createStore } = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const initialStateCounter = {
    count: 0
};

const incrementCounter = () => {
    return {
        type: INCREMENT
    };
};

const decrementCounter = () => {
    return {
        type: DECREMENT
    };
};

const resetCounter = () => {
    return {
        type: RESET
    };
};

const counterReducer = (state = initialStateCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case INCREMENT:
            return {
                ...state,
                count: 0
            }     
        default:
            state;
    }
}

const store = createStore(counterReducer);

store.subscribe( () => {
    console.log(store.getState());
});

store.dispatch(incrementCounter());
//store.dispatch(decrementCounter());
//store.dispatch(resetCounter());

