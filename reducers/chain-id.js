import { CHAIN_ID } from './types'

export default function data(
  state = {
    [`${CHAIN_ID}`]: null,
  },
  action
) {
  switch (action.type) {
    case CHAIN_ID:
      return {
        ...state,
        [`${CHAIN_ID}`]: action.value,
      }
    default:
      return state
  }
}