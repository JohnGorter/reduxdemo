import React, { Component} from 'react';
import SoccerGameDetails from './SoccerGameDetails';
import SoccerGamesList from './SoccerGamesList';


class SoccerGame extends Component {
    constructor() {
        super();
        // database.addListener(() => {  this.setState({})  });
        // reduxdatabase.subscribe(() => {  this.setState({})  });
    }
   
    render() {
        return <div>
             <SoccerGamesList />
             <SoccerGameDetails />
        </div>       
    }
}
 export default SoccerGame;