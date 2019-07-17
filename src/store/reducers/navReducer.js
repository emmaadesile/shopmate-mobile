import { OPEN_MENU, CLOSE_MENU } from "../actions/navAction";

const initialState = {
  action: "closeMenu"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        action: "openMenu"
      };
    case CLOSE_MENU:
      return {
        ...state,
        action: "closeMenu"
      };
    default:
      return state;
  }
};

export default reducer;
