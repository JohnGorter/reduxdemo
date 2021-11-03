import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'



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

const reduxdatabase = createStore(combineReducers({teamSlice:reducer}), applyMiddleware(thunkMiddleware));




export async function fetchTeamsAsync(dispatch, getState) {
    const response = await fetch('./teams.json')
    const data = await response.json();
    dispatch({ type: 'SETTEAMS', payload: data })
  }


export const { setSelectedTeam, fetchTeams } = soccerActions;
export default reduxdatabase;

