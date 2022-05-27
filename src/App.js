
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Portfolio from './Pages/Portfolio/Portfolio';
import Navbar from './Pages/Shared/Navbar';
import Notfound from './Pages/Shared/Notfound';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>
       <Route path="/login" element={<Login/>} />
       <Route path="signup" element={<Register />} />
       <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
       <Route path="*" element={<Notfound></Notfound>}></Route>
     </Routes>
     <ToastContainer/>
    </div>
  );
}

export default App;
