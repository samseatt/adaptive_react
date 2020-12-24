import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

import { CONTENTS } from '../shared/contents';
import { CATEGORIES } from '../shared/categories';
import { CONFIGS } from '../shared/configs';
import { NOTES } from '../shared/notes';
import { REFS } from '../shared/refs';


const useServer = false;


export const fetchContents = () => (dispatch) => {
   
  console.log('fetchContents called.');
  dispatch(contentsLoading());

  if (useServer) {
    return fetch(baseUrl + 'contents')
    .then(response => {
        if (response.ok) {
          console.log('fetchContents respnose is successful: ' + response);
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(contents => dispatch(addContents(contents)))
    .catch(error => dispatch(contentsFailed(error.message)));
  
  } else {
    setTimeout(() => {
      dispatch(addContents(CONTENTS));
    }, 500);
  }
}

export const contentsLoading = () => ({
  type: ActionTypes.CONTENTS_LOADING
});

export const contentsFailed = (errmess) => ({
  type: ActionTypes.CONTENTS_FAILED,
  payload: errmess
});

export const addContents = (contents) => ({
  type: ActionTypes.ADD_CONTENTS,
  payload: contents
});


export const fetchConfigs = () => (dispatch) => {
   
  console.log('fetchConfigs called.');
  dispatch(configsLoading());

  if (useServer) {
    return fetch(baseUrl + 'configs')
    .then(response => {
        if (response.ok) {
          console.log('fetchConfigs respnose is successful: ' + response);
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(configs => dispatch(addConfigs(configs)))
    .catch(error => dispatch(configsFailed(error.message)));
  } else {
    setTimeout(() => {
      dispatch(addConfigs(CONFIGS));
    }, 500);
  }
}

export const configsLoading = () => ({
  type: ActionTypes.CONFIGS_LOADING
});

export const configsFailed = (errmess) => ({
  type: ActionTypes.CONFIGS_FAILED,
  payload: errmess
});

export const addConfigs = (configs) => ({
  type: ActionTypes.ADD_CONFIGS,
  payload: configs
});


export const fetchCategories = () => (dispatch) => {
   
  console.log('fetchCategories called.');
  dispatch(categoriesLoading());

  if (useServer) {
    return fetch(baseUrl + 'categories')
    .then(response => {
        if (response.ok) {
          console.log('fetchCategories respnose is successful: ' + response);
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(categories => dispatch(addCategories(categories)))
    .catch(error => dispatch(categoriesFailed(error.message)));
  } else {
    setTimeout(() => {
      dispatch(addCategories(CATEGORIES));
    }, 500);
  }
}

export const categoriesLoading = () => ({
  type: ActionTypes.CATEGORIES_LOADING
});

export const categoriesFailed = (errmess) => ({
  type: ActionTypes.CATEGORIES_FAILED,
  payload: errmess
});

export const addCategories = (categories) => ({
  type: ActionTypes.ADD_CATEGORIES,
  payload: categories
});


export const fetchRefs = () => (dispatch) => {
   
  console.log('fetchRefs called.');
  dispatch(refsLoading());

  if (useServer) {
    return fetch(baseUrl + 'refs')
    .then(response => {
        if (response.ok) {
          console.log('fetchRefs respnose is successful: ' + response);
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(refs => dispatch(addRefs(refs)))
    .catch(error => dispatch(refsFailed(error.message)));
  } else {
    setTimeout(() => {
      dispatch(addRefs(REFS));
    }, 500);
  }
}

export const refsLoading = () => ({
  type: ActionTypes.REFS_LOADING
});

export const refsFailed = (errmess) => ({
  type: ActionTypes.REFS_FAILED,
  payload: errmess
});

export const addRefs = (refs) => ({
  type: ActionTypes.ADD_REFS,
  payload: refs
});


export const fetchNotes = () => (dispatch) => {
   
  console.log('fetchNotes called.');
  dispatch(notesLoading());

  if (useServer) {
    return fetch(baseUrl + 'notes')
    .then(response => {
        if (response.ok) {
          console.log('fetchNotes respnose is successful: ' + response);
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(notes => dispatch(addNotes(notes)))
    .catch(error => dispatch(notesFailed(error.message)));
  } else {
    setTimeout(() => {
      dispatch(addNotes(NOTES));
    }, 500);
  }
}

export const notesLoading = () => ({
  type: ActionTypes.NOTES_LOADING
});

export const notesFailed = (errmess) => ({
  type: ActionTypes.NOTES_FAILED,
  payload: errmess
});

export const addNotes = (notes) => ({
  type: ActionTypes.ADD_NOTES,
  payload: notes
});


export const addNote = (note) => ({
  type: ActionTypes.ADD_NOTE,
  payload: note
});

export const postNote = (ref, author, authority, text) => (dispatch) => {
  
    const newNote = {
        ref: ref,
        author: author,
        authority: authority,
        text: text
    };
    newNote.date = new Date().toISOString();
    
    if (useServer) {
      return fetch(baseUrl + 'notes', {
          method: "POST",
          body: JSON.stringify(newNote),
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "same-origin"
      })
      .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
              throw error;
        })
      .then(response => response.json())
      .then(response => dispatch(addNote(response)))
      .catch(error =>  { console.log('post note', error.message);
          alert('Your note could not be posted\nError: '+error.message); });
    } else {
        dispatch(addNote(newNote));
    }
      
};


export const addRef = (ref) => ({
  type: ActionTypes.ADD_REF,
  payload: ref
});

export const postRef = (ref, title, path) => (dispatch) => {
  
    const newRef = {
        ref: ref,
        title: title,
        path: path
    };
    newRef.date = new Date().toISOString();
    
    if (useServer) {
      return fetch(baseUrl + 'refs', {
          method: "POST",
          body: JSON.stringify(newRef),
          headers: {
            "Content-Type": "application/json"
          },
          credentials: "same-origin"
      })
      .then(response => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
          }
        },
        error => {
              throw error;
        })
      .then(response => response.json())
      .then(response => dispatch(addRef(response)))
      .catch(error =>  { console.log('post ref', error.message);
          alert('Your ref could not be posted\nError: '+error.message); });
    } else {
      dispatch(addRef(newRef));
    }
  
};




export const addFeedback = (feedback) => ({
  type: ActionTypes.ADD_FEEDBACK,
  payload: feedback
});

export const postFeedback = (feedback) => (dispatch) => {
    
  if (useServer) {
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(feedback),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addFeedback(response)))
    .catch(error =>  { console.log('post feedback', error.message);
        alert('Your feedback could not be posted\nError: '+ error.message); });
  } else {
    dispatch(addFeedback(feedback));
  }
};
