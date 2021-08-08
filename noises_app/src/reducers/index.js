
import {UPDATE_ANSWER} from "../actions/constants";

export function questionReducer(state = [], action) {
    switch (action.type) {
      case UPDATE_ANSWER:
        console.log('action.text',action.value)
        return state.concat([action.value])
      default:
        return state
    }
  }