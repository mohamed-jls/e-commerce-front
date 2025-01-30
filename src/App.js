import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router';
import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Chart from './pages/Chart';
// import AdminProds from './components/AdminProds';
// import AdminUsers from './components/AdminUsers';
// import AdminCharts from './components/AdminCharts';

function App() {

    return (
        <div className="App">
            <AuthProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/admin/*" element={<Admin />}/>
                    <Route path='/charts' element={<Chart/>} />
                        
                </Routes>
            </AuthProvider>
        </div>
    );
}

export default App;
