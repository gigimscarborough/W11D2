import { RECEIVE_SINGLE_POKEMON } from './../actions/pokemon_actions';

const movesReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_SINGLE_POKEMON:
            return Object.assign(newState, action.payload.moves);
            return newState
        default:
            return state;
    }
}

export default movesReducer;