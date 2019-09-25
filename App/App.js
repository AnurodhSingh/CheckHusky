import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Sentry } from 'react-native-sentry';
import createStore from './Stores';
import RootScreen from './Components/Root/RootScreen';

Sentry.config('https://2a5c220c8b6a499882a908969651fef8@sentry.io/1760827').install();
const { store, persistor } = createStore();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootScreen />
      </PersistGate>
    </Provider>
  );
}
