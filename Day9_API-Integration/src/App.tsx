import { Route, Routes } from 'react-router-dom'
import './App.css'
import Users from './pages/Users'
import AddUser from './pages/AddUser'

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Users></Users>}></Route>
        <Route path="add-user" element={<AddUser></AddUser>}></Route>
      </Routes>
    </>
  )
}

export default App
