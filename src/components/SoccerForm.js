import { Component } from 'react'
import { connect } from 'react-redux';


class SoccerForm extends Component {
    constructor(){
        super(); 
        this.state = {
            teamname1:"",
            teamname2:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.addGame({team1:this.state.teamname1, team2:this.state.teamname2, details:[]});
    }
    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return <div>
            Team 1:<input type="text" value={this.state.teamname1} name="teamname1" onChange={this.handleChange} />
            Team 2:<input type="text" value={this.state.teamname2} name="teamname2" onChange={this.handleChange} />
            <button onClick={this.handleClick}>save</button>
        </div>
    }
}

export default connect(null, dispatch => ({ 
    addGame: (game) => dispatch({
        type:'ADDGAME', 
        payload:game
    })}))(SoccerForm)