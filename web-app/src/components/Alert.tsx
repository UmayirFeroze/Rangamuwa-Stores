import { type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className='p-2 rounded border border-blue-600 bg-blue-50'>
      <h1 className='text-blue-800 text-2xl'>{children}</h1>
    </div>
  );
};

export default Alert;
