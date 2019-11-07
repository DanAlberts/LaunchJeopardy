import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from '../containers/Home'
import CoolerBoardContainer from '../containers/CoolerBoardContainer'

export const App = (props) => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/categories" component={CoolerBoardContainer}/>
        <Route exact path="/games/:id" component={CoolerBoardContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
