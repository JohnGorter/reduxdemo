import {createStore, combineReducers} from 'redux'

let soccerActions = {
    setSelectedTeam: (index) => { return {type:"SELECTTEAM", payload:index}}
}

let initialValue = {
    teams:[
        {team1:"A", team2:"B", details:[]},
        {team1:"A1", team2:"B1", details:[]},
        {team1:"A2", team2:"B2", details:[]},
        {team1:"A3", team2:"B3", details:[]},
        {team1:"A4", team2:"B4", details:[]}  
    ], 
    setSelectedTeam: null
}
function reducer(state = initialValue, action) {
    switch (action.type){
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

const reduxdatabase = createStore(combineReducers({teamSlice:reducer}));

export const { setSelectedTeam } = soccerActions;
export default reduxdatabase;