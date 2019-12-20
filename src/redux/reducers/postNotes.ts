import { POSTNOTES_RESULT, GET_POSTNOTES_RESULT } from "../actions/postNotes";

const INITIAL_STATE = {
  resultPostNotesInsert: [],
  resultGetPostNotes: []
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case POSTNOTES_RESULT:
    case GET_POSTNOTES_RESULT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
