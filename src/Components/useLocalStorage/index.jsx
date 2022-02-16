import React from "react";

//This is a custom hook for Local Storage

function useLocalStorage(itemName, initialValue) {
  
    const [TwoDos, setTwoDos] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorage2DOs = localStorage.getItem(itemName);
          let parsed2DOs;
        
          if(!localStorage2DOs) {
            //In case there is no saved data, create a new localStorage
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsed2DOs = initialValue;
          } else {
            parsed2DOs = JSON.parse(localStorage2DOs);
          }
  
          setTwoDos(parsed2DOs);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 1000);
    });
  
    const save2DOs = (TwoDosToSave) => {
      try {
        const string2DOs = JSON.stringify(TwoDosToSave);
        localStorage.setItem('2DOS_V1', string2DOs);
        setTwoDos(TwoDosToSave);
      } catch (error) {
        setError(error);
      }
    };
  
    return {
      TwoDos,
      save2DOs,
      loading,
      error,
    };
  }

export { useLocalStorage };
  