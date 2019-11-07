import React from 'react'
import { Link } from "react-router-dom"

const Home = (props) => {

  return(
    <>
    <header className="masthead">
    <div className="container d-flex h-100 align-items-center">
      <div className="mx-auto text-center">
        <h1 className="mx-auto my-0 text-uppercase">KnowItAll</h1>
        <h2 className="text-white-50 mx-auto mt-2 mb-5">A Jeopardy-esqe trivia web game</h2>
        <button className="btn btn-primary">
        <a href="/join_game">Play</a>
        </button>
      </div>
    </div>
  </header>
    </>
  )
}
export default Home