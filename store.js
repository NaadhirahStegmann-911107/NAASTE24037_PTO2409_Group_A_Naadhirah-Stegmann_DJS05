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