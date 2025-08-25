import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App/App.tsx';
import { Provider } from 'react-redux';
import { setupStore } from './App/store/store.ts';
import { HashRouter } from 'react-router-dom';

const store = setupStore();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <HashRouter basename="/hh.FrontEnd/">
        <App />
      </HashRouter>
    </Provider>
  </StrictMode>,
);
