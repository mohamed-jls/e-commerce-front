import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<>home</>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/products" element={<Products/>} />
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
