import { useEffect, useState } from "react";

function useNamesStorage(key: string): {names: string[], addName: (name: string) => void, removeName: (name: string) => void} {
    // Pobierz dane z localStorage przy pierwszym renderowaniu
    const storedNames = JSON.parse(localStorage.getItem(key) || '[]');
  
    // Inicjalizuj stan z danymi z localStorage
    const [names, setNames] = useState(storedNames);
  
    // Funkcja do dodawania imienia do tablicy w localStorage
    const addName = (name: string) => {
      const updatedNames = [ name, ...names].slice(0,4);
      setNames(updatedNames);
      localStorage.setItem(key, JSON.stringify(updatedNames));
    };
  
    // Funkcja do usuwania imienia z tablicy w localStorage
    const removeName = (name: string) => {
      const updatedNames = names.filter((n: string) => n !== name);
      setNames(updatedNames);
      localStorage.setItem(key, JSON.stringify(updatedNames));
    };
  
    // Efekt, który zapisuje zmiany w names do localStorage
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(names));
    }, [key, names]);
  
    return { names, addName, removeName };
  }
  
  export default useNamesStorage;