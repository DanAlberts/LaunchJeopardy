import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from '../containers/Home'
import BoardContainer from '../containers/BoardContainer'
export const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/categories" component={BoardContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
