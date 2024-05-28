import React from 'react';
import './Button.css';

interface Props {
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
  className: string;
  children: string;
}

const Button: React.FC<Props> = ({onClick, className, type, children}) => {
  return (
    <button onClick={onClick} type={type} className={className}>{children}</button>
  );
};

export default Button;