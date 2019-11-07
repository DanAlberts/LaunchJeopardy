import React from 'react'
import Modali, { useModali } from 'modali'
import AnswerForm from './AnswerForm'

const ClueTile = (props) => {
  let clue = props.clue
  let answer = props.answer

  const [completeExample, toggleCompleteModal] = useModali({
    onShow: () => setTimeout(toggleCompleteModal, 15000),
    animated: true,
    title: `${clue}`,
    message: <AnswerForm
              clueId={props.id}
              answer={answer}
              broadcastUserAnswer={props.broadcastUserAnswer}
            />,
    large: true,
    buttons: [
      <Modali.Button
        label="Cancel"
        isStyleCancel
        onClick={() => toggleCompleteModal()}
      />
    ],
  });

  return(
    <div>
    <div>
      <div className="card qCard bg-secondary">
        <div className="card-body">
          <p>{props.value}</p>
        </div>
        <div className="card-footer">
          <button className="modali-button-default" onClick={toggleCompleteModal}>Click to Answer!</button>
        </div>
      </div>
    </div>
    <Modali.Modal {...completeExample} />
    </div>
  )
}

export default ClueTile