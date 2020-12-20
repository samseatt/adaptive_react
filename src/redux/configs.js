import * as ActionTypes from './ActionTypes';

export const Configs = (state  = { isLoading: true,
                                        errMess: null,
                                        configs:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CONFIGS:
        return {...state, isLoading: false, errMess: null, configs: action.payload};

        case ActionTypes.CONFIGS_LOADING:
            return {...state, isLoading: true, errMess: null, configs: []}

        case ActionTypes.CONFIGS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};