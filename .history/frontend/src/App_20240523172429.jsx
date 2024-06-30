/* eslint-disable no-unused-vars */
import './App.css';
import Login from './pages/login/Login.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import Home from './pages/home/Home.jsx';
import { Routes, Route, Navigate} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext.jsx';

function App() {
  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/'/> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
