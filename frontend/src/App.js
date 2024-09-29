import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
