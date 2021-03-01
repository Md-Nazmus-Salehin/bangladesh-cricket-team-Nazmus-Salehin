// import logo from './logo.svg';
import './App.css';
import playerData from './components/data/data.json' 
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';
import Cart from './components/Cart/Cart';
import PlayerName from './components/PlayerName/PlayerName';

function App() {
  const [player, setPlayer] = useState([]);
  const [cart, setCart] = useState([]);
  const [playerName, setPlayerName] = useState([]);

  useEffect(() =>{
    setPlayer(playerData);
  }, [])

  const handleAddClub = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
    const newPlayerName = [...playerName, player];
    setPlayerName(newPlayerName);
  }

  return (
    <div>
      <h1 className="text-center">Player-loaded : {player.length}</h1>
      <br/>
      <h4 className="text-center">Club added : {cart.length}</h4>
      <br/>
      <PlayerName playerName={playerName}></PlayerName>
      <br/>
      <Cart cart={cart}></Cart>
      <br/>
   
        {
          player.map(player => <Player player={player} handleAddClub={handleAddClub} key={player.id}></Player>)
        }
    
    </div>
  );
}

export default App;
