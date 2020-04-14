import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { metronomeReducer } from './_reducers/metronomeReducer';

const reducers = {
    metronomeReducer,
};

const rootReducer = combineReducers(reducers);


export const configureStore = () =>
    createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    );