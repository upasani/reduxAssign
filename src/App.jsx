import './App.css';
import { Routes, Route } from "react-router-dom";
import { Home } from './Component/Home';
import { Login } from './Component/Login';
import { Link } from 'react-router-dom';
import { Register } from './Component/Register';


function App() {
  return (
    <>
      <div className='App'>
        <div className='link'>
          <Link to='/' >Home</Link>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>

        </div>

        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
        </Routes>

      </div>


    </>
  );
}

export default App;
