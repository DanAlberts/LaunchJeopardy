import React from 'react'
import ClueTile from './ClueTile'

const CategoryTile = (props) => {
  const clueList = props.clues.map((question) => {

    // we need to start passing down answer status of the selection to the clue tile, so that we know whether or not the clue has been answer, and if it has been answered
    return(
      <ClueTile
        key={question.id}
        id={question.id}
        clue={question.question}
        answer={question.answer}
        value={question.value}
        broadcastUserAnswer={props.broadcastUserAnswer}
      />
    )
  })
  return(
    <div className="card-deck w-25 justify-content-center">
      <div className="card bg-dark">
        <div className="card-body h-100">
          <h2 className="cTitle justify-content-center">{props.title}</h2>
          {clueList.slice(0,5)}
        </div>
      </div>
    </div>
  )
}

export default CategoryTile