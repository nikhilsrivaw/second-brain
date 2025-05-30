
import DashBoard from './components/pages/DashBoard'
import { Signup } from './components/pages/Signup'
import { Signin } from './components/pages/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path = '/signup' element = {<Signup/>} />
    <Route path = '/signin' element = {<Signin/>} />
    <Route path = '/dashboard' element = {<DashBoard/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
