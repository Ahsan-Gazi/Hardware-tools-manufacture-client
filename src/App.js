
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div >
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>
     </Routes>
    </div>
  );
}

export default App;
