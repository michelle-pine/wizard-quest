
import { STEPS } from "../constants/steps";
import {
  NEXT_STEP,
  ADD_STEPS,
  DOUBLE_TRAITOR
} from "../constants/action-types";

function getInitialState() {

  const initialState = {
    steps: STEPS,
    currentStep: 0,
    doubleTraitor: false,
  };

  return initialState;
}

function rootReducer(state = getInitialState(), action) {
  switch (action.type) {
    case NEXT_STEP:
      return Object.assign({}, state, {
        currentStep: action.payload.step || state.currentStep + 1,
        steps: state.steps,
        doubleTraitor: false,
      });
    case ADD_STEPS: 
      return Object.assign({}, state, {
        currentStep: state.currentStep,
        steps: {...state.steps, ...action.payload},
        doubleTraitor: false,
      });
    case DOUBLE_TRAITOR: 
      return Object.assign({}, state, {
        currentStep: state.currentStep,
        steps: state.steps,
        doubleTraitor: true,
      });
    default:
      return state;
  }
}

export default rootReducer;
