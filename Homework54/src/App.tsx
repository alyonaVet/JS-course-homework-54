import './App.css';
import {useState} from 'react';
import Cell from './components/Cell/Cell.tsx';

const App = () => {
  const [clicked, setClicked] = useState(false);

  const toggleCell = () => {
    setClicked((prevState) => !prevState);
  };


  return (
    <>
      <Cell toggleCell={toggleCell} clicked={clicked}/>
    </>
  );

};

export default App;
