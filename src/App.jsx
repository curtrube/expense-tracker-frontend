import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Transactions from './pages/Transactions';
import Categories from './pages/Categories';
import Accounts from './pages/Accounts';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/accounts" element={<Accounts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
