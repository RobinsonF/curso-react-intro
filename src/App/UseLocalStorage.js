import React from 'react';

function useLocalStorage(itemName, initialValue) {

  const [sincronizedItem, setSincronizedItem] = React.useState(true);
  const [item, setItems] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

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
          setItems(parsedItems);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);

  }, [sincronizedItem]);

  const saveItems = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItems(newItems);
  }

  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  return {
    item,
    saveItems,
    loading,
    error,
    sincronizeItem,
  };

}

export { useLocalStorage };