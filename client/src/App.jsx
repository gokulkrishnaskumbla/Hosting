import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Register from './component/Register'
import Login from './component/Login'
import AdminDashboard from './component/AdminDashboard'
import CommonDashboard from './component/CommonDashboard'
import Profile from './component/Profile'
import Logout from './component/Logout'
import ProtectedRoute from './component/ProtectedRoute'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        {/* ✅ Simple Navbar */}
        <nav style={{
          backgroundColor: '#282c34',
          padding: '10px',
          display: 'flex',
          justifyContent: 'center',
          gap: '20px'
        }}>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
          <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</Link>
          <Link to="/profile" style={{ color: 'white', textDecoration: 'none' }}>profile</Link>
          <Link to="/logout" style={{ color: 'white', textDecoration: 'none' }}>Logout</Link>

        </nav>

        {/* ✅ Define Routes */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/common" element={<CommonDashboard />} />
          <Route path="/profile" element={<ProtectedRoute roles={['admin']}><Profile /></ProtectedRoute>} />
          <Route path="/logout" element={<Logout />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
