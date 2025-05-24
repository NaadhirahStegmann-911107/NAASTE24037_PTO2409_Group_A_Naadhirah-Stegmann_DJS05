// Reducer: A function that takes the current state and an action, and returns a new state.
const tallyReducer = (state = { count: 0}, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, count: state.count + 1 }; // Immutably create a new state object
        case 'SUBTRACT':
            return { ...state, count: state.count - 1 }; // Immutably creates a new state object
        case 'RESET':
            return { ...state, count: 0 }; // Resets the count to Zero
        default:
            return state; // Returns unchanged state for unknown actions.
    }
};
// Create Store: A higher-order function that encapsulates the state and provides controlled access
const createStore = (reducer) => {
    // Initialize state using the reducer with undefined state and an empty action
    let state = reducer(undefined, {});
    // Immutable array of subscribers (callbacks to be called on state changes)
    let subscribers = [];

    // getState: Returns a copy of the current state to prevent external mutation
    const getState = () => ({...state});

    //dispatch: Updates state using the reducer and notifies subscribers
    const dispatch = (action) => {
        state = reducer(state, action); // Update state immutably via reducer
        subscribers.forEach((callback) => callback(getState())); // Notify subscribers with new state
    };

    // subscribe: Adds a callback to the subscribers list, returns an unsubscribe function
    const subscribe = (callback) => {
        subscribers = [...subscribers, callback]; // Immutably add subscriber
        // Return unsubscribe function that removes the callback
        return () => {
            subscribers = subscribers.filters((cb) => cb !== callback); // Immutably remove subscriber
        };
    };
    //Return public API of the store
    return { getState, dispatch, subscribe };
};

// Create the store instance with the tally Reducer
const store = createStore(tallyReducer);

// Subscribe a logger function to log stat changes to the console
const logState = (state) => console.log('Current State:', state);
store.subscribe(logState);

// Test the Scenarios from user stories
console.log('Scenario 1: Initial State');
console.log(store.getState()); // Expected: { count: 0 }

console.log('Scenario 2: Incrementing the Counter');
store.dispatch({ type: 'ADD'}); // Expected: { count: 1 }
store.dispatch({ type: 'ADD'}); // Expected: { count: 2}

console.log('Scenario 3: Decrementing the Counter');
store.dispatch({ type: 'SUBTRACT'}); // Expected: { count: 1 }}

console.log('Scenario 4: Resetting the Counter');
store.dispatch({ type: 'RESET'}); // Expected: { count: 0 }
