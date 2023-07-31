import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  const message = (total, completed) => {
    if (total === completed) {
      return (
        <>
          Felicitaciones! Has completado todos los TODOs
        </>
      );
    } else {
      return (
        <>
          Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </>
      );
    }
  }

  return (
    <h1 className='TodoCounter'>
      {message(total, completed)}
    </h1>
  );
}

export { TodoCounter };