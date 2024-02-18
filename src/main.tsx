import React from 'react'
import ReactDOM from 'react-dom/client'
import { theme } from './styles/theme.styles.tsx';
import { ThemeProvider } from 'styled-components';
import Routes from './routes.tsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <div className="app">
        <Routes />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
);
