# DJS05 Tally App Store

## Overview
This projects implements a Redux-inspired state management store for a Tally App, focusing on functional programming principles. The store manages a counter with actions to increment ('ADD'), decrement ('SUBTRACT'), and reset ('RESET') the count. State changes are logged to the console via a subscription mechanism, adhering tothe the observer pattern.

## How to Run
1. Clone the repository: https://github.com/CodeSpace-Academy/NAASTE24037_PTO2409_Group_A_Naadhirah-Stegmann_DJS05
2. Open `store.js` in a Node.js environment: 
    ```
    node store.js
    ```
   - Alterenatively, include `store.js` in an HTML file and open it in a browser.
3. Open the browser console (F12) or terminal to vieew state changes.

## Approach
- **Store**: Created using a `createStore` function that encapsulates state and subscribers via a closure.
- **Reducers**: A pure function (`tallyReducer`) that immutably updates the state based on actions.
- **Subscription**: Implements the observer pattern, logging state changes via a subscribed callback.
- **Functional Programming**: Ensured immutability (using spread operators), pure functions (reducer), and isolated side effects (logging in subscribers).

## Challenges and Solutions
- **Challlenge**: Ensuring immutability in the subscribers array.
  - **Solution**: Used spread and 'filter' to update the array immutably in `subscribe` and unsubscribe functions.
- **Challenge**: Understanding the observer pattern for subscriptions.
  - **Solution**: Studied the provided Refactoring Guru resourse and implemented a simple subscription mechanism that notifies callbacks on state changes.

## Requirements Met
- Implements `getState`, `dispatch`, and `subscribe` as specified.
- Handles `ADD`, `SUBTRACT`, and `RESET` actions.
- Logs state changes to the console without UI rendering.
- Adheres to functional programming principles (immutability, pure functions).
