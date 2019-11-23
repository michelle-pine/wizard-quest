
import { STEPS } from "../constants/steps";
import {
  NEXT_STEP,
  ADD_STEPS,
} from "../constants/action-types";

function getInitialState() {

  const initialState = {
    steps: STEPS,
    currentStep: 0,
  };

  return initialState;
}

function rootReducer(state = getInitialState(), action) {
  switch (action.type) {
    case NEXT_STEP:
      return Object.assign({}, state, {
        currentStep: state.currentStep + 1,
        steps: state.steps
      });
    case ADD_STEPS: 
      return Object.assign({}, state, {
        user: action.payload,
        steps: {...state.steps, ...action.payload}
      });
    default:
      return state;
  }
}

export default rootReducer;
