import { GET_PHONES, PHONES_ERROR } from "../types";
import axios from "axios";

export const getPhones = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:4000/phones`);
    dispatch({
      type: GET_PHONES,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: PHONES_ERROR,
      payload: console.log(e),
    });
  }
};
