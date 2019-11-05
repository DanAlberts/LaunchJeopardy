import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom"
import CoolerBoardContainer from './CoolerBoardContainer'

const GameShow = (props) => {
    const [game, setGame] = useState({})
    const [shouldRedirect, setShouldRedirect] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    let gameId = props.match.params.id

    useEffect(() => {
      fetch(`/api/v1/games/${gameId}`)
        .then((response) => {
          if (response.ok) {
            return response
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage)
            throw (error)
          }
        })
        .then(response => response.json())
        .then(body => {
          setCurrentUser(currentUser.id)
          setGame(body.game)
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
    }, [])

    return (
      <div>
        <CoolerBoardContainer
          id={gameId}
        />  
      </div>
    )
}

export default GameShow