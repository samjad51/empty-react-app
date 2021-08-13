import {
    applyMiddleware,
    createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

export const initState = {
    query: '',
    resultsData: [],
};

function configureStore(state) {
    const middlewares = [thunk];

    if (process.env.NODE_ENV === 'development') {
        const composeEnhancers = composeWithDevTools({
            trace: true,
            traceLimit: 25,
        });

        return createStore(
            rootReducer,
            state,
            composeEnhancers(
                applyMiddleware(...middlewares),
            ),
        );
    }

    return createStore(
        rootReducer,
        state,
        applyMiddleware(thunk),
    );
}

export default configureStore(initState);
