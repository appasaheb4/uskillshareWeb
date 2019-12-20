import { put } from "redux-saga/effects";
import { helperWatcher } from "../utils/utilities";
import axios from "axios";

import {
  POSTNOTES,
  POSTNOTES_RESULT,
  GET_POSTNOTES,
  GET_POSTNOTES_RESULT
} from "../actions/postNotes";

function* postNotesWorker(action: any) {
  const { url, data } = action;
  try {
    console.log({ url, data });
    let res = yield axios({
      method: "post",
      url,
      data
    })
      .then((response: any) => {
        return response.data;
      })
      .catch(function(error: any) {
        return error;
      });
    yield put({
      type: POSTNOTES_RESULT,
      payload: {
        resultPostNotesInsert: {
          res
        }
      }
    });
  } catch (error) {
    console.log({ error });
  }
}

function* getPostNotesWorker(action: any) {
  const { url } = action;
  try {
    console.log({ url });
    let res = yield axios({
      method: "get",
      url
    })
      .then((response: any) => {
        return response.data;
      })
      .catch(function(error: any) {
        return error;
      });
    yield put({
      type: GET_POSTNOTES_RESULT,
      payload: {
        resultGetPostNotes: {
          res
        }
      }
    });
  } catch (e) {
    console.log("error", e);
  }
}

export const postNotesWatcher = helperWatcher(postNotesWorker, POSTNOTES);

export const getPostNotesWatcher = helperWatcher(
  getPostNotesWorker,
  GET_POSTNOTES
);
