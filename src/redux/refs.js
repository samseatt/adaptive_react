import * as ActionTypes from './ActionTypes';

export const Refs = (state  = { isLoading: true,
                                        errMess: null,
                                        refs:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REFS:
        return {...state, isLoading: false, errMess: null, refs: action.payload};

        case ActionTypes.REFS_LOADING:
            return {...state, isLoading: true, errMess: null, refs: []}

        case ActionTypes.REFS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};