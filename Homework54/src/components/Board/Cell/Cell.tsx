import React from 'react';
import './Cell.css';

interface Props {
  clicked: boolean;
  hasItem: boolean;
  toggleCell: React.MouseEventHandler;
}

const Cell: React.FC<Props> = ({clicked, toggleCell, hasItem}) => {
  let cellClasses = ['ToggleCell'];
  if (clicked) {
    cellClasses.push('ToggleCell-white');
  }

  return (
    <div onClick={toggleCell} className={cellClasses.join(' ')}>
      {clicked && hasItem ? 'O' : ''}
    </div>
  );
};

export default Cell;