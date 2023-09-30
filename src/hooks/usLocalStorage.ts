import { useState } from 'react';
import { User } from '../types/User';

function useLocalStorage(key: string) {
  const storedArray = JSON.parse(localStorage.getItem(key) || '[]');
  console.log(`array length ${storedArray.length}`);
  const [array, setArray] = useState(storedArray);

  const addItem = (item: User) => {
    if (array.length === 0) {
      
      const updatedArray = [item];
      setArray(updatedArray);
      localStorage.setItem(key, JSON.stringify(updatedArray));
    } else
    if (item.login !== array[0].login) {
      console.log(`added item ${item.login}`);
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
    console.log(`set array to ${updatedArray.length}`);
  };

  return { array, addItem, removeItem };
}

export default useLocalStorage;