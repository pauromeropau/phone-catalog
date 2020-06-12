import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { mount } from "enzyme";

import store from "./index";
import App from "./App";

describe("App Testing", () => {
  const phonesFake = [
    {
      id: 8,
      name: "P10",
      manufacturer: "KKK",
      description: "Bla, bla, bla...",
      color: "red",
      price: 83484,
      imageFileName: "P10.jpg",
      screen: "5,2 inch",
      processor: "Kirin 84389",
      ram: 9,
    },
    {
      id: 9,
      name: "P78",
      manufacturer: "GGG",
      description: "Bla, bla, bla...",
      color: "blue",
      price: 8344,
      imageFileName: "P78.jpg",
      screen: "74 inch",
      processor: "Kirin 344",
      ram: 9,
    },
    {
      id: 10,
      name: "PG23",
      manufacturer: "MMM",
      description: "Bla, bla, bla...",
      color: "red",
      price: 343484,
      imageFileName: "PG23.jpg",
      screen: "98 inch",
      processor: "Kirin 000",
      ram: 9,
    },
  ];

  const store = createStore(reducer, applyMiddleware(thunk));
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    container = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("renders without crashing", () => {
    React.Component.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
  });
});
