import React, { useState, useEffect } from "react"
import CategoryTile from "../components/CategoryTile"

const CoolerBoardContainer= (props) => {
  const [categories, setCategories] = useState([])
  const [user, setUser] = useState({})
  
  // to use once AC is setup => const [selection, setSelection] = useState({selectionId: null, correctAnswerStatus: null})

  useEffect(() => {
    // debugger
    fetch(`/api/v1/games/${props.match.params.id}`)
    .then((response)=> {
      // debugger
      if (response.ok) {
        return response
        // debugger
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    // debugger
    .then(response => response.json())
    .then(gameData => {
      // debugger
      setCategories(gameData.gameState)
      // debugger
      setUser(gameData.user)
    })
    // debugger
      App.gameChannel = App.cable.subscriptions.create(
      // Info that is sent to the subscribed method
      {
        channel: "GameChannel",
        // game_id: 1
        game_id: props.match.params["id"]
      },
      {
        connected: () => console.log("GameChannel connected"),
        disconnected: () => console.log("GameChannel disconnected"),
        received: data => {
          // Data broadcasted from the chat channel
          console.log(data)
          
          handleGameReceipt(data)
        }
      })
  }, [])

  const handleGameReceipt = (newGameData) => {
    setGameState(gameData.gameState)
  }

  const broadcastUserAnswer = (clueId, userAnswer) => {
    App.gameChannel.send({
      userAnswer: userAnswer,
      user: user,
      clueId: clueId
    })
  }

  const categoriesList = categories.map(category => {
    return(
      <CategoryTile
        key={category.id}
        title={category.title}
        clues={category.clues}
        broadcastUserAnswer={broadcastUserAnswer}
      />
    )
  })

  return(
    <>
      <div className="card-deck justify-content-center">
        {categoriesList}
      </div>
    </>
  )
}

export default CoolerBoardContainer
