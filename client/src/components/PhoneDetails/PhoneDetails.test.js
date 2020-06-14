import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

import PhoneDetails from "../PhoneDetails/PhoneDetails";

const phones = [];
const mockStore = configureStore([thunk]);

function shallowSetup() {
  const initialState = { phones };
  const store = mockStore(initialState);
  const props = { phones };

  const enzymeWrapper = shallow(
    <Provider store={store}>
      <PhoneDetails {...props} />
    </Provider>
  );

  return {
    props,
    enzymeWrapper,
  };
}

describe("Phone details", () => {
  const { enzymeWrapper, props } = shallowSetup({ phones });

  it("renders without crashing", () => {
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
