import React from 'react'
import Modali, { useModali } from 'modali'
import AnswerForm from './AnswerForm'

const ClueTile = (props) => {
  let clue = props.clue
  let answer = props.answer

  let sesame
  function open() {
    sesame = setTimeout(toggleCompleteModal, 15000)
  }
  function close() {
    toggleCompleteModal();
    clearTimeout(sesame);
  }
  const [completeExample, toggleCompleteModal] = useModali({
    onShow: open,
    animated: true,
    centered: true,
    title: `${clue}`,
    message: <AnswerForm
              clueId={props.id}
              answer={answer}
              broadcastUserAnswer={props.broadcastUserAnswer}
            />,
    large: true,
  });

  return(
    <div>
    <div className="justify-content-center">
      <div className="card qCard bg-secondary justify-content-center hov" onClick={toggleCompleteModal}>
        <div className="card-body justify-content-center">
          <p>{props.value}</p>
        </div>
      </div>
    </div>
    <Modali.Modal {...completeExample} />
    </div>
  )
}

export default ClueTile