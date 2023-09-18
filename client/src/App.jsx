import './App.css';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;

// Additionally, you’ll need to complete the following tasks in each of these front-end files:
// App.jsx: Create an Apollo Provider to make every request work with the Apollo Server.