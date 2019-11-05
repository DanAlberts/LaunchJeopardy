import React from 'react'
import ClueTile from './ClueTile'

const CategoryTile = (props) => {
  const clueList = props.clues.map((question) => {
    return(
      <ClueTile
        key={question.id}
        id={question.id}
        clue={question.question}
        answer={question.answer}
        value={question.value}
      />
    )
  })
  return(
    <div className="card-deck w-25">
      <div className="card bg-dark">
        <div className="card-body h-100">
          <h2 className="cTitle">{props.title}</h2>
          {clueList.slice(0,5)}
        </div>
      </div>
    </div>
  )
}

export default CategoryTile