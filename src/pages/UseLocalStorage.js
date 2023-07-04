import React from 'react';

function useLocalStorage(itemName, initialValue) {

  const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] || state;
   };

  const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));

  const {
    sincronizedItem,
    item,
    loading,
    error,
  } = state;

  const onError = (error) => {
    dispatch({type: actionTypes.error, payload: error});
  }

  const onSuccess = (item) => {
    dispatch({type: actionTypes.success, payload: item});
  }

  const onSave = (item) => {
    dispatch({type: actionTypes.save, payload: item});
  }

  const onSincronize = () => {
    dispatch({type: actionTypes.sincronize});
  }

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify([]));
          parsedItems = [];
        } else {
          parsedItems = JSON.parse(localStorageItems);
        }
        onSuccess(parsedItems);
      } catch (error) {
        onError(error);
      }
    }, 2000);

  }, [sincronizedItem]);

  const saveItems = (newItems) => {
    try{
      localStorage.setItem(itemName, JSON.stringify(newItems));
      onSave(newItems);
    }catch(error){
      onError(error);
    }
  }

  const sincronizeItem = () => {
    onSincronize();
  };

  return {
    item,
    saveItems,
    loading,
    error,
    sincronizeItem,
  };

}

const initialState = ({initialValue}) => ({
  sincronizedItem: true,
  error:false,
  loading: true,
  item: initialValue,
});

const actionTypes = {
   error: 'ERROR',
   success: 'SUCCESS',
   save: 'SAVE',
   sincronize: 'SINCRONIZE',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItem: false,
  },
});



export { useLocalStorage };