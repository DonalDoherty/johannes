import { Fragment, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
      <Header />
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Navigate to="/dashboard" />} />
            <Route exact path="/dashboard" element={!isAuthenticated ? (<Navigate to="/login" />) : (<Dashboard setAuth={setAuth} />)} />
            <Route exact path="/login" element={isAuthenticated ? (<Navigate to="/dashboard" />) : (<Login setAuth={setAuth} />)} />
            <Route exact path="/register" element={isAuthenticated ? (<Navigate to="/dashboard" />) : (<Register setAuth={setAuth} />)} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </Fragment>
  )
}

export default App