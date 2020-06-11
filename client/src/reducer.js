let initialState = {
  phones: [],
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "DATA_REQUEST":
      return {
        ...state,
        error: null,
      };
    case "DATA_SUCCESS":
      return {
        ...state,
        phones: action.data,
      };
    case "DATA_ERROR":
      return {
        ...state,
        error: action.payload.error,
        phones: [],
      };
    default:
      return state;
  }
}

export default reducer;
