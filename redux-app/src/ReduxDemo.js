import React, { Component } from "react";
import { createStore } from "redux";

class ReduxDemo extends Component {
  render() {
    // Step 2: Create Reducer : State n action
    const reducer = (state, action) => {
      if (action.type === "ATTACK") {
        return action.payload;
      }
      if(action.type === "GREEN_ATTACK"){
        return action.payload; 
      }
      return state;
    };

    // Step 1: Create store : reducer n state
    const store = createStore(reducer, "Peace"); // Peace is current state

    // Step 3: Subscribe
    store.subscribe(() => {
      console.log("Store is now :", store.getState());
    });

    // Step 4: Dispatch Action
    store.dispatch({ type: "ATTACK", payload: "Iron Man" });
    store.dispatch({type:'GREEN_ATTACK',payload:"HULK"})

    return <div>Test</div>;
  }
}

export default ReduxDemo;
