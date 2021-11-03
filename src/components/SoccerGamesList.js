
import { Component } from 'react'
import { connect } from 'react-redux'

class SoccerGamesList extends Component {
    constructor() {
        super();
        this.onCLickHandler = this.onCLickHandler.bind(this);
    }
    onCLickHandler(e) {        
       this.props.setSelectedTeam(e.target.dataset['index']);
    }
    render() {
        console.log("thisprops.games", this.props.games);
        return <div>{this.props.games.map((g, i) => 
            <div data-index={i} onClick={this.onCLickHandler}>{g.team1} vs {g.team2}</div>
        )}</div>
    }
}


const mapStateToProps = (state) => {
    console.log("state", state)
    console.log("returning", {games: state.teamSlice.teams})
    return {
        games: state.teamSlice.teams 
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setSelectedTeam: (index) => dispatch({type:'SELECTTEAM', payload:index})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SoccerGamesList)