
import { STEPS, GOOD_STEPS, BAD_STEPS, GOOD_FINALE, BAD_FINALE, TRAITOR_STEPS } from "../constants/steps";
import {
  NEXT_STEP,
  ADD_STEPS,
  DOUBLE_TRAITOR
} from "../constants/action-types";
import { cookieUtils } from "../utils/cookie_utils";

function getInitialState() {
  let lastState = cookieUtils.getUserCookieData();
  console.log(lastState);
  let steps = STEPS;
  if (lastState.choice) {
    if (lastState.choice === "BAD") {
      steps = {...STEPS, ...BAD_STEPS}
    } else if (lastState.choice === "GOOD") {
      steps = {...STEPS, ...GOOD_STEPS}
    } else if (lastState.choice === "GOOD_FINALE") {
      steps = {...STEPS, ...GOOD_STEPS, ...GOOD_FINALE}
    } else if (lastState.choice === "BAD_FINALE") {
      steps = {...STEPS, ...BAD_STEPS, ...BAD_FINALE}
    }
  }

  if (lastState.doubleTraitor && lastState.choice !== "GOOD_FINALE" && lastState.choice !== "BAD_FINALE") {
    if (lastState.doubleTraitor === "TRUE") {
      steps = {...steps, ...TRAITOR_STEPS}
    }
  } 
  console.log(steps);

  const initialState = {
    steps: steps,
    currentStep: 0,
    doubleTraitor: steps.doubleTraitor === "TRUE",
  };

  return initialState;
}

function rootReducer(state = getInitialState(), action) {
  switch (action.type) {
    case NEXT_STEP:
      cookieUtils.bakeCookie("currentStep", action.payload.step || state.currentStep + 1);
      return Object.assign({}, state, {
        currentStep: action.payload.step || state.currentStep + 1,
        steps: state.steps,
        doubleTraitor: false,
      });
    case ADD_STEPS:
      if (action.payload.type === "DOUBLETRAITOR") {
        cookieUtils.bakeCookie("doubleTraitor", "TRUE");
      }
      else {
        cookieUtils.bakeCookie("choice", action.payload.type);
      }
      return Object.assign({}, state, {
        currentStep: state.currentStep,
        steps: {...state.steps, ...action.payload.steps},
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
