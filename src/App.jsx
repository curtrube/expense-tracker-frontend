import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Categories from './pages/Categories';
import Accounts from './pages/Accounts';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import Login from './components/Login';
import Footer from './components/Footer';
import { useAuth } from './contexts/authProvider';

function App() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <>
      <Navbar
        isAuthenticated={isAuthenticated}
        username={user}
        handleLogout={logout}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/accounts" element={<Accounts />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
