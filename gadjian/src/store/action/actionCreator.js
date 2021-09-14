import {
  SHOW_PERSONNEL,
  SHOW_SEARCH,
  SHOW_LOADING,
  SHOW_ERROR,
} from "./actionType";

import axios from "axios";

export function setPersonnel(payload) {
  return {
    type: SHOW_PERSONNEL,
    payload,
  };
}

export function setSearch(payload) {
  return {
    type: SHOW_SEARCH,
    payload,
  };
}

export function setLoading(payload) {
  return {
    type: SHOW_LOADING,
    payload,
  };
}

export function setError(payload) {
  return {
    type: SHOW_ERROR,
    payload,
  };
}

export function fetchPersonnel() {
  return async (dispatch) => {
    try {
      let { data } = await axios({
        method: "GET",
        url: "https://randomuser.me/api/?results=28",
      });
      // console.log(data.results);
      dispatch(setPersonnel(data.results));
    } catch (error) {
      dispatch(setError(error));
    } finally {
      dispatch(setLoading(false));
    }
  };
}
