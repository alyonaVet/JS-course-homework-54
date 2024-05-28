import './App.css';
import Board from './components/Board/Board.tsx';
import Tries from './components/Tries/Tries.tsx';
import {useState} from 'react';
import {BoardCell} from './types.ts';
import Button from './components/Button/Button.tsx';
import Message from './components/Message/Message.tsx';

const App = () => {
  const createItems = (size: number): BoardCell[] => {
    const items: BoardCell[] = [];

    for (let i = 0; i < size; i++) {
      items.push({hasItem: false, clicked: false});
    }

    const randomPlace = Math.floor(Math.random() * size);
    items[randomPlace].hasItem = true;

    return items;
  };

  const [items, setItems] = useState(createItems(36));
  const [tries, setTries] = useState(0);
  const [found, setFound] = useState(false);

  const toggleCell = (index: number): void => {
    const copyItems = [...items];
    copyItems[index].clicked = true;
    setItems(copyItems);
    setTries(tries + 1);
    setFound(copyItems[index].hasItem);
  };

  const resetGame = (): void => {
    setItems(createItems(36));
    setTries(0);
    setFound(false);
  };

  return (
    <div className="container">
      <Board items={items} toggleCell={found ? () => null : toggleCell}/>
      <Tries triesCount={tries}/>
      <Message isFound={found}/>
      <Button type="button" className="btn" onClick={resetGame} children="Reset"/>
    </div>
  );
};
export default App;
