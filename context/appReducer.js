export default (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "SET_FIRSTNAME":
      return {
        ...state,
        firstname: action.payload,
      };
    case "SET_LASTNAME":
      return {
        ...state,
        lastname: action.payload,
      };
    default:
      return state;
  }
};
