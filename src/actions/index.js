import {
  NEXT_STEP,
  ADD_STEPS,
  DOUBLE_TRAITOR
} from "../constants/action-types";

export function nextStep(payload) {
  return { type: NEXT_STEP, payload };
}

export function addSteps(payload) {
  return { type: ADD_STEPS, payload };
}

export function doubleTraitor(payload) {
  return { type: DOUBLE_TRAITOR, payload };
}