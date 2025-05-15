import React from 'react';

interface Props {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className='p-2 rounded border border-blue-600 bg-blue-50 text-blue-800 text-2xl'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
