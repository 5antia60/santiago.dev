import { ReactElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import HomePage from './pages/home/home.page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <HomePage /> },
    ],
  }
]);

export default function Routes(): ReactElement {
  return (
    <RouterProvider router={ router } />
  )
}
