import {createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';
import { Contents } from './contents';
import { Configs } from './configs';
import { Categories } from './categories';
import { Notes } from './notes';
import { Refs } from './refs';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            contents: Contents,
            configs: Configs,
            categories: Categories,
            notes: Notes,
            refs: Refs,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}