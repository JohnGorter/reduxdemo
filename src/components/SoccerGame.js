import React, { Component} from 'react';
import SoccerGameDetails from './SoccerGameDetails';
import SoccerGamesList from './SoccerGamesList';
import SoccerForm from './SoccerForm';
import { connect } from 'react-redux';
import { fetchTeams } from '../store/reduxstore';



const SoccerGame = ({fetchTeams}) => {
    function handleClick (){
        fetchTeams();
    }
    return  <div>
             <SoccerGamesList />
             <SoccerGameDetails />
             <SoccerForm />
             <button onClick={handleClick}>Get Teams</button>
        </div>       
}

 export default connect(null, d => ({ fetchTeams: () => d({type:"GETTEAMS"})}))(SoccerGame)