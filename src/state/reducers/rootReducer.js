import initialState from "../store/initialState";
import * as actionTypes from "../actions/actionTypes";

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CALCULATION:
      return {
        ...state,
        ...action.payload,
      };
      case actionTypes.SET_BMI:
        return {
          ...state,
          ...action.payload
        }
    default:
      return state;
  }
};
export default rootReducer;
