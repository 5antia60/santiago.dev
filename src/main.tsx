import React from 'react'
import ReactDOM from 'react-dom/client'
import { theme } from './resources/styles/theme.styles.tsx';
import { ThemeProvider } from 'styled-components';
import { i18nInstance } from './core/controllers/i18n.controller.ts';
import Routes from './routes.tsx';
import './index.css'

i18nInstance();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme }>
      <div className="app">
        <Routes />
      </div>
    </ThemeProvider>
  </React.StrictMode>,
);
