import { useEffect, useState } from "react";

type UseLocalStorageReturnType<T> = [T[], (value: T) => void, (value: T) => void];

function useLocalStorage<T>(key: string, initialValue: T[]): UseLocalStorageReturnType<T> {
  const getInitialValue = (): T[] => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  const [value, setValue] = useState<T[]>(getInitialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const addValue = (newValue: T) => {
    setValue((prevValue) => [...prevValue, newValue]);
  };

  const removeValue = (valueToRemove: T) => {
    setValue((prevValue) => prevValue.filter((item) => item !== valueToRemove));
  };

  return [value, addValue, removeValue];
}

export default useLocalStorage;