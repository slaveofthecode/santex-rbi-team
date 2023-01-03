// import { createStore, applyMiddleware, compose } from 'redux';
// import promiseMiddleware from 'redux-promise-middleware';
// import { rootReducer } from './rootReducer';

// declare global {
//     interface Window {
//       __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//     rootReducer,
//     composeEnhancers(
//         applyMiddleware(promiseMiddleware)
//     )
// );


// import { configureStore } from '@reduxjs/toolkit'
// import thunkMiddleware from 'redux-thunk';
// import { app } from './app';

// export default configureStore({
//   reducer: {
//     app: app.reducer,
//   },
//   middleware: [thunkMiddleware],
// });

import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { rootReducer } from './rootReducer';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(promiseMiddleware)
    )
);