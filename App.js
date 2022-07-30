/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';

import Navigation from './src/navigation/Navigation';
import AlgoritmosContext from './src/contexts/AlgoritmosContext';

import { getPosts } from './src/services/algoritmos';

export default function App() {
  const [algoritmos, setAlgoritmos] = React.useState([]);
  React.useEffect(() => {
    // localStorage ? nothing : fetch;
    // localStorage => asyncStorage;
    const getData = async () => {
      const data = await getPosts();
      setAlgoritmos(data);
    };
    // getData();
  }, []);
  return (
    <AlgoritmosContext.Provider value={{ algoritmos, setAlgoritmos }}>
      <Navigation />
    </AlgoritmosContext.Provider>
  );
}
