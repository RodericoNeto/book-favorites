
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <BrowserRouter>
        <nav className='navvbar'>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Não temos essa página :(</h1>} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </main>
  );
}

export default App;
