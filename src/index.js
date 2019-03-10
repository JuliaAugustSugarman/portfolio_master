import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put as dispatch } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('ADD_PROJECT', postProject);
    yield takeEvery('FETCH_PROJECT', getProject);
    yield takeEvery('DELETE_PROJECT', deleteProject);

}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//generator function POST project data
function * postProject(action){
    try {
        yield axios.post('/api/project', action.payload)
        yield dispatch({ type: 'FETCH_PROJECT' });
    }
    catch (error) {
        console.log('error with axios post request', error);

    }
}

function* getProject() {
    const getProjectResponse = yield axios.get('/api/project');
    yield dispatch({type: 'SET_PROJECTS', payload: getProjectResponse.data});
}

function* deleteProject(action) {
    try {
        console.log('hi');
        yield axios.delete('/api/project/' + action.payload);
        yield dispatch({ type: 'FETCH_PROJECT' });
    }
    catch (error) {
        console.log('error deleting', action, error);
    }
}



// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
