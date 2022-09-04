/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';

import Navigation from './src/navigation/Navigation';
import AlgoritmosContext from './src/contexts/AlgoritmosContext';
import useNotificationListener from './src/utils/notifications/useNotificationListener';
import useMovileStorage from './src/utils/storage/useMovileStorage';
import useNotificationWhenOpenApp from './src/utils/notifications/useNotificationWhenOpenApp';

// import matecodigo from './assets/images/matecodigo.png';
import matecodigo from './assets/icon.png';
import AnimatedAppLoader from './src/components/AnimatedAppLoader';
import useFirstTime from './src/utils/storage/useFirstTime';
import SlidersInitial from './src/components/SlidersInitial';

export default function App() {
  const { firstTime, setFirstTimeData } = useFirstTime();

  const storageData = useMovileStorage();
  // storageData = { algoritmos, categorias, pages, reloadData, removeData }
  useNotificationListener();
  // Esta funcion crea una notificacion 10 min luego de abrir la app.
  useNotificationWhenOpenApp();
  if (firstTime === 'si' || firstTime === 'init') {
    return (
      <AnimatedAppLoader image={matecodigo}>
        <SlidersInitial
          setFirstTimeData={setFirstTimeData}
        />
      </AnimatedAppLoader>
    );
  }

  return (
    <AnimatedAppLoader image={matecodigo}>
      <AlgoritmosContext.Provider value={{ ...storageData }}>
        <Navigation />
      </AlgoritmosContext.Provider>
    </AnimatedAppLoader>
  );
}
