/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';

import Navigation from './src/navigation/Navigation';
import AlgoritmosContext from './src/contexts/AlgoritmosContext';
import useNotificationListener from './src/utils/notifications/useNotificationListener';
import useMovileStorage from './src/utils/storage/useMovileStorage';
import useNotificationWhenOpenApp from './src/utils/notifications/useNotificationWhenOpenApp';

export default function App() {
  const storageData = useMovileStorage();
  // storageData = { algoritmos, categorias, pages, reloadData, removeData }
  useNotificationListener();
  // Esta funcion crea una notificacion 10 min luego de abrir la app.
  useNotificationWhenOpenApp();

  return (
    <AlgoritmosContext.Provider value={{ ...storageData }}>
      <Navigation />
    </AlgoritmosContext.Provider>
  );
}
