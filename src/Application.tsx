import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppContainer from 'src/navigation/container';
import ThemeProvider from 'src/controls/styles/ThemeProvider'
import { store, persistor } from 'src/redux';

const App = () => {
  return (
    <>
      <StoreProvider store={ store }>
        <PersistGate persistor={ persistor }>
          <ThemeProvider>
            <AppContainer />
          </ThemeProvider>
        </PersistGate>
      </StoreProvider>
    </>
  );
};

export default App;
