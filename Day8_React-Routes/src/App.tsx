import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Products from './pages/Products'
import UserDetails from './pages/UserDetails'
import ProtectedRoutes from './routes/ProtectedRoutes'
import DashboardHome from './pages/DashboardHome'

function App() {
  return (
    <>
      <Routes>
        <Route path='' element={<Navigate to='login'></Navigate>}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route element={<ProtectedRoutes />}>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route index element={<DashboardHome />}></Route>
            <Route path='users' element={<Users />}></Route>
            <Route path='products' element={<Products />}></Route>
          </Route>
          <Route path='user/:id' element={<UserDetails />}></Route>

        </Route>

      </Routes>
    </>
  )
}

export default App
