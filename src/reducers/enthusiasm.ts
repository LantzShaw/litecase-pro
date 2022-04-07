import { EnthusiasmAction } from '@/actions/enthusiasm'
import type { EnthusiasmState } from '@/types/enthusiasm'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '@/constants/actionTypes'

const initialState = {
  languageName: '',
  enthusiasmLevel: 0,
} as EnthusiasmState

export default function enthusiasm(
  state = initialState,
  action: EnthusiasmAction
): EnthusiasmState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 }
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) }
    default:
      return state
  }
}
