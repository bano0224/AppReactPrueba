

const initialState = [];

function rootReducer(state = initialState, action) {
    if (action.type === "GET_MOVIES") {
        return state.concat(action.payload.search)
    }
    return state;
  }

export default rootReducer;