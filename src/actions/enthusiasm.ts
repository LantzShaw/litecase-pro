import { actionTypes } from '../constants'

export interface IncrementEnthusiasm {
  type: actionTypes.INCREMENT_ENTHUSIASM
}

export interface DecrementEnthusiasm {
  type: actionTypes.DECREMENT_ENTHUSIASM
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: actionTypes.INCREMENT_ENTHUSIASM,
  }
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: actionTypes.DECREMENT_ENTHUSIASM,
  }
}
