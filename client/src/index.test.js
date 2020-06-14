import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import App from "./App";

const phones = [];

describe("App", () => {
  it("renders without crashing", () => {
    const initialState = { phones };
    const mockStore = configureStore([thunk]);
    const store = mockStore(initialState);

    const div = document.createElement("div");
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    );
  });
});
