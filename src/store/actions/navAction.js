export const OPEN_MENU = "OPEN_MENU";
export const CLOSE_MENU = "CLOSE_MENU";

const navActions = action => dispatch => {
  if (action === "openMenu") {
    dispatch({ type: OPEN_MENU });
  }

  if (action === "closeMenu") {
    dispatch({ type: CLOSE_MENU });
  }
};

export default navActions;
