export const GET = "GET";
export const GET_RESULT = "GET_RESULT";

export const GET_WITHPARA = "GET_WITHPARA";
export const GET_WITHPARA_RESULT = "GET_WITHPARA_RESULT";

export const POST_INSERT = "POST_INSERT";
export const POST_INSERT_RESULT = "POST_INSERT_RESULT";

export const POST_UPDATE = "POST_UPDATE";
export const POST_UPDATE_RESULT = "POST_UPDATE_RESULT";

export const POST_DELETE = "POST_DELETE";
export const POST_DELETE_RESULT = "POST_DELETE_RESULT";

export const onCommonGet = args => {
  return {
    type: GET,
    ...args
  };
};

export const onCommonGetWithPara = args => {
  return {
    type: GET_WITHPARA,
    ...args
  };
};

export const onCommonPostInsert = args => {
  return {
    type: POST_INSERT,
    ...args
  };
};

export const onCommonPostUpdate = args => {
  return {
    type: POST_UPDATE,
    ...args
  };
};

export const onCommonPostDelete = args => {
  return {
    type: POST_DELETE,
    ...args
  };
};
