import {
  GET_RESULT,
  GET_WITHPARA_RESULT,
  POST_INSERT_RESULT,
  POST_UPDATE_RESULT,
  POST_DELETE_RESULT
} from "../actions/common";

const INITIAL_STATE = {
  resultGet: [],
  resultGetWithPara: [],
  resultPostInsert: [],
  resultPostUpdate: [],
  resultPostDelete: []
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case GET_RESULT:
      return { ...state, ...action.payload };
    case GET_WITHPARA_RESULT:
      return { ...state, ...action.payload };
    case POST_INSERT_RESULT:
      return { ...state, ...action.payload };
    case POST_UPDATE_RESULT:
      return { ...state, ...action.payload };
    case POST_DELETE_RESULT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
