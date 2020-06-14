import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import Phones from "./Phones";
import Phone from "../Phone/Phone";

const phones = [];
const mockStore = configureStore([thunk]);

function shallowSetup() {
  const initialState = { phones };

  const store = mockStore(initialState);
  const props = { phones };

  const enzymeWrapper = shallow(
    <Provider store={store}>
      <Phones {...props}>
        <Phone />
      </Phones>
    </Provider>
  );

  return {
    props,
    enzymeWrapper,
  };
}

describe("Phones", () => {
  const { enzymeWrapper, props } = shallowSetup({ phones });

  it("renders phones without crashing", () => {
    expect(enzymeWrapper).toHaveLength(1);
  });

  it("should dispatch action", () => {
    const dataSuccess = () => ({ type: "DATA_SUCCESS" });
    const initialState = {};
    const store = mockStore(initialState);

    store.dispatch(dataSuccess());

    const actions = store.getActions();
    const expectedPayload = { type: "DATA_SUCCESS" };

    expect(actions).toEqual([expectedPayload]);
  });
});
