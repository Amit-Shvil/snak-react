import React, { useEffect, useState } from 'react';
import './App.css';
import { Game } from './components/game/Game';
import { OpenScreen } from './components/OpenScreen/OpenScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import useSound from "use-sound";

enum Screen {
  OpenScreen = 'OpenScreen',
  Game = 'Game'
}
    

function App() {

  // @ts-ignore
  const [play, { stop , isPlaying}] =  useSound('./bg-sound.mp3',{volume: 0.75 , onPlayError : () => console.error('Error occured!') ,onPlay: () =>  console.error('On Play'),  onend: () => {
    console.info('Sound ended!');
  }});
  const [currentScreen, setScreen] = useState<string>(Screen.OpenScreen);
  console.log({isPlaying});
  
  return (
    <div className="App">
        {currentScreen === Screen.OpenScreen? <OpenScreen onStart={()=> {
          play();     
          setScreen(Screen.Game)
        }
        }/>:
        <Game onGameEnd={()=>  { 
          stop();
          setScreen(Screen.OpenScreen);
        }
} />}
    </div>
  );
}
export default App;
