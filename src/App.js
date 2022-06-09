import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './page/Authentication/Login';
import Signup from './page/Authentication/Signup';
import Home from './page/Home/Home';
import Navbar from './page/Navbar/Navbar';
import Error from './page/Error/Error'
import RequireAuth from './page/Authentication/RequireAuth'

function App() {
  return (
    <div >
      <Navbar></Navbar>

      <Routes>

        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}></Route>
        <Route path='/home' element={<RequireAuth><Home></Home></RequireAuth>}></Route>

        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>


        <Route path='*' element={<Error></Error>}></Route>

      </Routes>
    </div>
  );
}

export default App;
