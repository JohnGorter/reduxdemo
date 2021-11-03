import { Component } from 'react'
import { connect } from 'react-redux'

class SoccerGameDetails extends Component {
    render() {
        const game = this.props.selectedTeam;
        if (!game) return <div>Please select a team first</div>
        return <div>
            <h1>{game.team1} vs {game.team2}</h1>
            {game.details.map(d => <p>{d}</p>)}
         </div>  
    }
}

export default connect((state) => ({ selectedTeam: state.teamSlice.selectedTeam}))(SoccerGameDetails);