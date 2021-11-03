
class MyDatabase {
    constructor() {
        this.listeners = [];
        this.teams = [
            { team1:"A", team2:"B", details:[]},
            {team1:"A1", team2:"B1", details:[]},
            {team1:"A2", team2:"B2", details:[]},
            {team1:"A3", team2:"B3", details:[]},
            {team1:"A4", team2:"B4", details:[]}  
        ];
        this.index = 0;
    }
    addListener(l) { this.listeners.push(l);}
    notifyListeners() {
        this.listeners.forEach(l => l());
    }

    setSelectedTeam(index) { this.index = index; this.notifyListeners();}
    getTeams() { return this.teams }
    getSelectedTeam() { return this.teams[this.index] }
}

const database = new MyDatabase(); 
export default database;