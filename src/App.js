import './App.css';
import Game from './components/Game/Game';
import Score from './components/Score/Score';
import { GameContextProvider } from './context/GameContext';

function App() {
  return (
    <div className="App">
      <GameContextProvider>
        <div>
          <h1>Memory Card game</h1>
          <Score />
        </div>

        <Game />
      </GameContextProvider>
    </div>
  );
}

export default App;
