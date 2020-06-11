import { DATA_REQUEST, DATA_SUCCESS, DATA_ERROR } from "./actionType";

export function dataRequest() {
  return {
    type: DATA_REQUEST,
  };
}

export function dataSuccess(data) {
  return {
    type: DATA_SUCCESS,
    data,
  };
}

export function dataError(error) {
  return {
    type: DATA_ERROR,
    payload: { error },
  };
}
