import {
  NEXT_STEP,
  ADD_STEPS,
} from "../constants/action-types";

export function nextStep(payload) {
  return { type: NEXT_STEP, payload };
}

export function addSteps(payload) {
  return { type: ADD_STEPS, payload };
}