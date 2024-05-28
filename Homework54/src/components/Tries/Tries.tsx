import React from 'react';

interface Props {
  triesCount: number;
}
const Tries: React.FC<Props> = ({triesCount}) => {
  return (
    <div>Tries: {triesCount}</div>
  );
};

export default Tries;