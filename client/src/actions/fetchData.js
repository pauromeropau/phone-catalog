import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "./action";
import axios from "axios";

export function fetchData() {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    axios
      .get(`http://localhost:5000/phones`)
      .then((response) => {
        dispatch(fetchDataSuccess(response.data.data));
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  };
}
