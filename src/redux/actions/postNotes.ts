export const POSTNOTES = "POSTNOTES";
export const POSTNOTES_RESULT = "POSTNOTES_RESULT";

export const GET_POSTNOTES = "GET_POSTNOTES";
export const GET_POSTNOTES_RESULT = "GET_POSTNOTES_RESULT";

export const onPostNotes = args => {
  return {
    type: POSTNOTES,
    ...args
  };
};

export const onGetPostNotes = args => {
  return {
    type: GET_POSTNOTES,
    ...args
  };
};
