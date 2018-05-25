import { combineReducers } from 'redux'

import {
    EXAMPLE_GET_REQUEST,
}
    from './actions';

const example = (state = {}, action) => {
    switch (action.type) {
        case EXAMPLE_GET_REQUEST:
        default:
            return state;
    };
};

const rootReducer = combineReducers({
    example
});

export default rootReducer;