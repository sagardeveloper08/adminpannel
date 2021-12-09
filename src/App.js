import React from 'react'
import Login from './components/Auth/Login'
import Home from './components/Home'
import AddClients from './components/Functions/AddClients'
import GetData from './components/Functions/GetData'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Protected from './components/protected/protected'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home">< Protected Cmp={Home} /></Route>
          <Route path="/add" >
            <Protected Cmp={AddClients} />
          </Route>
          <Route path="/get">
          <Protected Cmp={GetData}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App