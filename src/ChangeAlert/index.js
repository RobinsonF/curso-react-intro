import React from 'react';
import { useStorageListener } from './useStorageListener';

function ChangeAlert({sincronizeItem}) {

  const {show, toggleShow} = useStorageListener(sincronizeItem);

  if (show) {
    return(<div>
      <p>Hubo hubo cambios</p>
      <button
        onClick={toggleShow}
      >
        Volver a cargar la información
      </button>
    </div>);
  } else {
    return null;
  }
}

export { ChangeAlert };