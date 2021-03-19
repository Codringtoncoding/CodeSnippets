// state is a object

// action is an object that changes the state tree which is immutable

// actions have a TYPE

// actions use strings

//state is read only - action is plain javascript object that describes the change

// pure functions

//functions return value depends on arguments - predictable and do not modify items but just returns new

//impure functions

//have sideaffects and override values that you pass.

//create a function that takes pure and prevous state and returns new state

//reducer takes state and counter and returns state

counter = (state, action) => {
  if (action.type === "INCREMENT") () => state + 1;
  else if (action.type === "DECREMENT") () => state - 1;
};

counter = (state, action) => {
  //if it recieves undefined then orginal state
  if (typeof state === "undefined") {
    return 0;
  }

  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;

    //for anyhting not Increment or Decrement
  } else {
    return state;
  }
};

//looks better like this

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

expect(counter(0, { type: "INCREMENT" })).toEqual(1);

import { createStore } from "redux";
// store - holds currnet state object,
//  lets you dispatch actions and
//  specifiy reducer that tells state to update with actions

//
const store = createStore(counter);

console.log(store.getState());

// receives current state of appliaction
// state will 0

//dispatch actions to change state of application
store.dispatch({ type: "INCREMENT" });
console.log(store.getState());

// state will be 1

//subscribe - lets ypour register a callback so you can update ui to reflect
// curnet appliction state

store.subscribe(() => {
  document.body.innerText = store.getState();
});

//above will start at one so you have to do this below
//gets current(initial) state
const render = () => {
  document.body.innerText = store.getState();
};

//takes render as a callback
store.subscribe(render);
render();

document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

//

//so create store - returns store object

//provides get state - to get current app state

//dispatch method - uses actions to change app state

//subscribe - subsribe to the changes and re render with current state

//reimplemet create store from scratch

const createStore = (reducer) => {
  let state;
  let listeners = [];
  const getState = () => state;

  //returns current valuestate

  const dispatch = (action) => {
    //to hcange the internal state
    //calls reducer with  current state aand action to update
    state = reducer(state, action);
    //when it is updated we need to update listerner
    listeners.forEach((listener) => listener());
  };
  //can be called many times so we have to keep track of it pushing it into array
  const subscribe = (listener) => {
    listeners.push(listener);

    return () => {
      //removes listerner from listener array
      listeners = listeners.filter((l) => l !== listener);
    };
    //unsubscribe
  };

  dispatch({});

  return { getState, dispatch, subscribe };
};
