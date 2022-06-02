import './App.css';
import {  Routes, Route } from 'react-router-dom'
import  PtivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Register from './pages/Register';
 

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Header/>
      <Routes>
        <Route element={<PtivateRoute />} path="/" exact/>
        <Route element={<HomePage />} path="/home"/>
        <Route element={<LoginPage />} path="/login"/>
        <Route element={<Register />} path="/register"/>
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
