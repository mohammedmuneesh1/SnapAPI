import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routeLayout } from './Router/Router';

function App() {

  return (
    <>
      <RouterProvider router={routeLayout} />
    </>
  );
}

export default App;

