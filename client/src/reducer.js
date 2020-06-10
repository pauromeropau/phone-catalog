let initialState = {
  phones: [],
  loading: false,
  error: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        phones: action.data
      };
    case "FETCH_DATA_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        phones: []
      };
    default:
      return state;
  }
}

export default reducer;
