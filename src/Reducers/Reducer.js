import {GET_MOVIES} from "../Action/index"

const initialState = [];


export function rootReducer (state = initialState, action) {
    switch (action.type) {
      case  GET_MOVIES:
          return action.payload.Search
      default:
        return state;
  }
}

export default rootReducer;
