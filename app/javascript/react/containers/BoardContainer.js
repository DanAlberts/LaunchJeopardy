import React, { useState, useEffect } from "react"
import CategoryTile from "../components/CategoryTile"

const BoardContainer = (props) => {
  const[categories, setCategories] = useState([])
  const [user, setUser] = useState({})
  const [selection, setSelection] = useState({selectionId: null, correctAnswerStatus: null})

  useEffect(() => {
    fetch(`/api/v1/games/${props.match.params.id}`)
    .then((response)=> {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw(error)
      }
    })
    .then(response => response.json())
    .then(data => {
      setCategories(data.categories)
      // setUser(data.user)
      setUser({user_id: 1, userName: "joeshmo"})
    })
        App.gameChannel = App.cable.subscriptions.create(
      // Info that is sent to the subscribed method
      {
        channel: "GameChannel",
        game_id: 1
        // game_id: props.match.params["id"]
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
      // update the board to remove the clue based on the `clue_id` from the selection
      // update the players score from the gameSession
      // update the turn (if there is more than one player)
  }

  const chooseCategory = (event) => {

    let selectionId

      App.gameChannel.send({
        message: "nick is cool",
        user: user,
        selection: selection
      })
  }


  const categoriesList = categories.map(category => {
    return(
      <CategoryTile
        key={category.id}
        title={category.title}
        clues={category.clues}
      />
    )
  })


  return(
    <>
      <div className="card-deck">
        {categoriesList}
      </div>
      <button onClick={chooseCategory}>Fun Button</button>
    </>
  )
}

export default BoardContainer
