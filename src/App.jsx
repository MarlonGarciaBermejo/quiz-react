import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Game from './components/Game'
import Welcome from './components/Welcome'
import Result from './components/Result'


function App() {

  const WELCOME = 'welome', GAME = 'game', RESULT = 'result';
  const [currentScreen, setCurrentScreen] = useState(WELCOME);
  
  let content = null;

  switch(currentScreen){
    case WELCOME : 
    content = <Welcome nextScreen={() => setCurrentScreen(GAME)} />;
    break;
    case GAME : 
    content = <Game />;
    break;
    case RESULT : 
    content = <Result nextScreen={() => setCurrentScreen(GAME)} />;
    break;
    default:
      content = <Welcome />;
  }

  return (
      <div>
      {content}
      </div>
  )
}

export default App
