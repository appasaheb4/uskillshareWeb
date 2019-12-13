const initialState = {
  userDetails: {}
};

export default (state = initialState, action) => {
  const account = action.payload ? action.payload.serviceType : null;
  switch (action.type) {
    case "Testing":
      return {
        ...state,
        [account]: {
          ...state[account],
          receivingAddress: action.payload.address,
          loading: {
            ...state[account].loading,
            receivingAddress: false
          }
        }
      };
  }
  return state;
};
