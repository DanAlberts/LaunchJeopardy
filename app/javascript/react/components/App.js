import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from '../containers/Home'
export const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
