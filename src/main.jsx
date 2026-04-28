import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './models';
import { UIProvider } from './context/UIContext';
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <Provider store={store}>
      <UIProvider>
        <App />
      </UIProvider>
    </Provider>
  </StrictMode>,
)
