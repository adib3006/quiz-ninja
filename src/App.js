import { RouterProvider } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import route from './components/Routes';

function App() {
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
