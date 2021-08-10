
import {UPDATE_ANSWER} from "../actions/constants";

const initState ={
  value : null,
  countDown: "01:00:00"
}

export function questionReducer(state = initState, action) {
  let newState = {...state};
	
    switch (action.type) {
      case UPDATE_ANSWER:
        newState['countDown'] = action.countDown
        return newState
      default:
        return newState
    }
  }