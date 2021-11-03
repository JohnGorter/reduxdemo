import logo from './logo.svg';
import './App.css';
import SoccerGame from './components/SoccerGame'
import { Provider } from 'react-redux';
import reduxdatabase from './store/reduxstore';

function App() {
  return (
    <Provider store={reduxdatabase}>
      <div className="App">
        <SoccerGame team1="AJAX" team2="DORTMUND" details={["score"]} />
      </div>
    </Provider>
  );
}

export default App;
