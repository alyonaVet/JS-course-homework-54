import React from 'react';
import './Cell.css';

interface Props {
  clicked: boolean;
  toggleCell: React.MouseEventHandler;
}

const Cell: React.FC<Props> = ({clicked, toggleCell}) => {
  let cellClasses = ['ToggleCell'];
  if (clicked) {
    cellClasses.push('ToggleCell-white');


  }
  return (
    <div onClick={toggleCell} className={cellClasses.join(' ')}></div>
  );
};

export default Cell;