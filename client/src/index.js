import { createRoot } from 'react-dom/client';
import App from './app';
import {Provider} from "react-redux"
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'


const container = document.getElementById('app');
const root = createRoot(container); 
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
  </Provider>,
);