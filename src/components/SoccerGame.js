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

// class SoccerGame extends Component {
//     constructor(){
//         super(); 
//         this.handleClick = this.handleClick.bind(this); 

//     }
//     handleClick() {
//         this.props.fetchTeams();
//     }

//     render() {
//         return <div>
//              <SoccerGamesList />
//              <SoccerGameDetails />
//              <SoccerForm />
//              <button onClick={this.handleClick}>Get Teams</button>
//         </div>       
//     }
// }
 export default connect(null, d => ({ fetchTeams: () => d(fetchTeams)}))(SoccerGame)