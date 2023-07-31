import React from 'react';
import './TodoCounter.css';

function TodoCounter({
  total,
  completed,
}) {
  const message = (total, completed) => {
    let _message;
    switch (total) {
      case 0:
        _message = <>Aun no has creado TODOs!</>;
        break;
      case (total === completed):
        _message = <>Felicitaciones! Has completado todos los TODOs</>
        break;
      default:
        _message = <>Has completado <span>{completed}</span> de <span>{total}</span> TODOs</>
        break;
    }
    return _message;
  }

  return (
    <h1 className='TodoCounter'>
      {message(total, completed)}
    </h1>
  );
}

export { TodoCounter };