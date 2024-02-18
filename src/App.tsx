import { Outlet } from 'react-router-dom';
import HeaderComponent from './components/header/header.component.tsx';

function App() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  )
}

export default App
