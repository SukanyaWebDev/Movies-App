import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'
import PopularPage from './components/PopularPage'
import SearchPage from './components/SearchPage'
import AccountPage from './components/AccountPage'

import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={HomePage} />
      <ProtectedRoute exact path="/popular" component={PopularPage} />
      <ProtectedRoute exact path="/search" component={SearchPage} />
      <ProtectedRoute exact path="/account" component={AccountPage} />
      <ProtectedRoute path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
