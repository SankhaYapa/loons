import logo from './logo.svg';
import './App.css';
import { Login } from './pages/Login';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { Register } from './pages/Register';


function App() {
  return (
   <BrowserRouter>
     <Routes>
        <Route index element={<Login/>}/>
        <Route path='Signup' element={<Register/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
