import { dataRequest, dataSuccess, dataError } from "./action";
import axios from "axios";

export function fetchData() {
  return (dispatch) => {
    dispatch(dataRequest());

    axios
      .get(`http://localhost:5000/phones`)
      .then((response) => {
        setTimeout(() => dispatch(dataSuccess(response.data.data)), 35 * 60);
      })
      .catch((error) => {
        dispatch(dataError(error));
      });
  };
}

