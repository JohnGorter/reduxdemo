import {createStore, combineReducers, applyMiddleware} from 'redux'
// import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from '@redux-saga/core'
import { takeEvery, call, put, takeLatest } from 'redux-saga/effects'


let soccerActions = {
    fetchTeams:fetchTeamsAsync,
    setSelectedTeam: (index) => { return {type:"SELECTTEAM", payload:index}}
}

let initialValue = {
    teams:[],
    setSelectedTeam: null
}
function reducer(state = initialValue, action) {
    switch (action.type){
        case "SETTEAMS": {
            return {
                ...state,
                teams: action.payload
            }
        }
        case "ADDGAME": {
            return {
                ...state,
                teams: [...state.teams, action.payload]
            }
        }
        case "SELECTTEAM": {
            return {
                ...state,
                selectedTeam: state.teams[action.payload]
            }
        }
    }
    console.log("stte", state);
    return state;
}


// const asyncFunctionMiddleware = storeAPI => next => action => {
//     // If the "action" is actually a function instead...
//     if (action instanceof Function)
//         action(storeAPI.dispatch, storeAPI.state);
      
//     // Otherwise, it's a normal action - send it onwards
//     return next(action)
//   }

const sagaMW = createSagaMiddleware()
const reduxdatabase = createStore(combineReducers({teamSlice:reducer}), applyMiddleware(sagaMW));

function* teamsWatcher(){
    yield takeLatest("GETTEAMS", teamsWorker)
}
function* teamsWorker() {
    console.log("AHA een getter op teams!!");
    console.log("fething data");
    
    yield new Promise((res, rej) => {
        setTimeout(() => { res(10)}, 500);
    });
    console.log("this was a slow fetch dude");
    var data = yield fetch("./teams.json")
    var teams = yield data.json()
    console.log("teams are", teams); 
    yield put({type:"SETTEAMS", payload:teams})
}

sagaMW.run(teamsWatcher)

export async function fetchTeamsAsync(dispatch, getState) {
    const response = await fetch('./teams.json')
    const data = await response.json();
    dispatch({ type: 'SETTEAMS', payload: data })
  }


export const { setSelectedTeam, fetchTeams } = soccerActions;
export default reduxdatabase;

