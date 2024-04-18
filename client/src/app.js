import React from 'react'
import ItemList from './pages/ItemList';
import Register from './pages/Register';
import IndividualProduct from './pages/IndividualProduct';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Main from './pages/Main'
import {useSelector} from 'react-redux'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom"

const App = () => {
  const user = useSelector(state => state.user.currentUser)
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/products/:category?' element={<ItemList/>}/>
            <Route path='/login' element={user ? <Navigate to="/" replace /> : <Login/>}/>
            <Route path='/register' element={user ? <Navigate to="/" replace /> : <Register/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:name' element={<IndividualProduct/>}/>
        </Routes>
    </Router>
  )
}

export default App
