import Cell from './Cell/Cell.tsx';
import React from 'react';
import './Board.css';
import {BoardCell} from '../../types.ts';

interface Props {
  items: BoardCell[];
  toggleCell: (index: number) => void;
}

const Board: React.FC<Props> = ({items, toggleCell}) => {

  return (
      <div className="Board">
        {items.map((item, index) => (
          <Cell
            key={index}
            clicked={item.clicked}
            toggleCell={item.clicked ? () => null : () => toggleCell(index)}
            hasItem={item.hasItem}
            />
        ))}
      </div>
    );
  };

  export default Board;