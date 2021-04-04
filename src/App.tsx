import React, { useState } from 'react';
import './App.css';
import { Game } from './components/game/Game';
import { OpenScreen } from './components/OpenScreen/OpenScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

enum Screen {
  OpenScreen = 'OpenScreen',
  Game = 'Game'
}

function App() {
  const [currentScreen, setScreen] = useState<string>(Screen.OpenScreen);
  return (
    <div className="App">
        {currentScreen === Screen.OpenScreen? <OpenScreen onStart={()=> setScreen(Screen.Game)}/>:
        <Game onGameEnd={()=> setScreen(Screen.OpenScreen)}/>}
    </div>
  );
}
export default App;
