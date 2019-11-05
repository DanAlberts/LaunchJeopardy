import React from 'react'
import { Link } from "react-router-dom"

const Home = (props) => {
  return(
    <>
      <div>
        <h1>Welcome to KnowItAll</h1>
      </div>
      <div>
        <button><Link to={`/games/1`}>Quick Game</Link></button>
      </div>
    </>
  )
}
export default Home