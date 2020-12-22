import * as ActionTypes from './ActionTypes';

export const Notes = (state  = { isLoading: true,
                                        errMess: null,
                                        notes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_NOTES:
        return {...state, isLoading: false, errMess: null, notes: action.payload};

        case ActionTypes.NOTES_LOADING:
            return {...state, isLoading: true, errMess: null, notes: []}

        case ActionTypes.NOTES_FAILED:
            return {...state, isLoading: false, errMess: action.payload}

        case ActionTypes.ADD_NOTE:
            var note = action.payload;
            return { ...state, notes: state.notes.concat(note)};
        
        default:
          return state;
      }
};