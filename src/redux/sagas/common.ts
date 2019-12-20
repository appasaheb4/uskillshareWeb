import { put } from "redux-saga/effects";
import { helperWatcher } from "../utils/utilities";
import axios from "axios";

import {
  GET,
  GET_RESULT,
  GET_WITHPARA,
  GET_WITHPARA_RESULT,
  POST_INSERT,
  POST_INSERT_RESULT,
  POST_UPDATE,
  POST_UPDATE_RESULT,
  POST_DELETE,
  POST_DELETE_RESULT
} from "../actions/common";

function* getWithWorker(action: any) {
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
      type: GET_RESULT,
      payload: {
        resultGet: {
          res
        }
      }
    });
  } catch (e) {
    console.log("error", e);
  }
}

function* getWithParaWorker(action: any) {
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
      type: GET_WITHPARA_RESULT,
      payload: {
        resultGetWithPara: {
          res
        }
      }
    });
  } catch (e) {
    console.log("error", e);
  }
}

function* workerPostInsert(action: any) {
  const { url, data } = action;
  try {
    console.log({ url, data });
    let res = yield axios({
      method: "post",
      url,
      data
    })
      .then((response: any) => {
        console.log({ response });
        return response.data;
      })
      .catch(function(error: any) {
        return error;
      });
    yield put({
      type: POST_INSERT_RESULT,
      payload: {
        resultPostInsert: {
          res
        }
      }
    });
  } catch (e) {
    console.log("error", e);
  }
}

function* workerPostUpdate(action: any) {
  const { url, data } = action;
  try {
    // console.log( { url, body } );
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
      type: POST_UPDATE_RESULT,
      payload: {
        resultPostUpdate: {
          res
        }
      }
    });
  } catch (e) {
    console.log("error", e);
  }
}

function* workerPostDelete(action: any) {
  const { url, data } = action;
  try {
    // console.log( { url, body } );
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
      type: POST_DELETE_RESULT,
      payload: {
        resultPostDelete: {
          res
        }
      }
    });
  } catch (e) {
    console.log("error", e);
  }
}

export const commonGetWatcher = helperWatcher(getWithWorker, GET);

export const commonGetWithParaWatcher = helperWatcher(
  getWithParaWorker,
  GET_WITHPARA
);

export const commonPostInsertWatcher = helperWatcher(
  workerPostInsert,
  POST_INSERT
);

export const commonPostUpdateWatcher = helperWatcher(
  workerPostUpdate,
  POST_UPDATE
);

export const commonPostDeleteWatcher = helperWatcher(
  workerPostDelete,
  POST_DELETE
);
