import { useState } from 'react';
import { User } from '../types/User';

function useLocalStorage(key: string) {
  // Pobierz dane z localStorage przy pierwszym renderowaniu
  const storedArray = JSON.parse(localStorage.getItem(key) || '[]');

  const [array, setArray] = useState(storedArray);

  const addItem = (item: User) => {
    if (item.login !== array[0].login) {
        const updatedArray = [item, ...array].slice(0,4);
        setArray(updatedArray);
        localStorage.setItem(key, JSON.stringify(updatedArray));
    }
  };

  const removeItem = (index: number) => {
    const updatedArray = [...array];
    updatedArray.splice(index, 1);
    setArray(updatedArray);
    localStorage.setItem(key, JSON.stringify(updatedArray));
  };

  return { array, addItem, removeItem };
}

export default useLocalStorage;