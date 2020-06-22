export const actions = {
  SET_ON_LOGIN: 'set_on_login'
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actions.SET_ON_LOGIN:
      return {
        ...state,
        onlogin: action.payload
      };    
    default:
      return state;
  }
};
