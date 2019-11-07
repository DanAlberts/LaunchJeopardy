import React, { useState, useEffect } from 'react'

const AnswerForm = (props) => {
  let clueAnswer = props.answer.toLowerCase()
  const [correct, setCorrect] = useState(null)
  const [userAnswer, setUserAnswer] = useState("")
  let wrong = "hidden"
  let visible = "hidden"
  if(correct === true){
    visible = "visible"
  }else if(correct === false && userAnswer !== ""){
    wrong = "visible"
  }


    const handleFieldChange = event => {
    setUserAnswer(event.currentTarget.value)
  }

  const handleAnswerSubmit = (event) =>{
    event.preventDefault()
    let fAnswer = userAnswer.toLowerCase()
    if (fAnswer === clueAnswer){
      setCorrect(true)
    }else{
      setCorrect(false)
    }

    // debugger
    props.broadcastUserAnswer(props.clueId, userAnswer)
  }

  function startTimer(duration, display) {
    var minTimer = duration, seconds;
    setInterval(function () {
      seconds = parseInt(minTimer % 60)
      seconds = seconds < 10 ? + seconds : seconds
      if (--minTimer < 0) {
          minTimer = duration
      }
    }, 1000)
}

useEffect(() => {
    let oneMin = 10 * 1,
        display = document.querySelector('#time')
    startTimer(oneMin, display)
},[])

  function startTimer2(duration, display) {

    var minTimer = duration, seconds;
    
    setInterval(function () {
        seconds = parseInt(minTimer % 60)
        seconds = seconds < 10 ? + seconds : seconds
        if (--minTimer < 0) {
            minTimer = duration
        }

    }, 1000)
}

useEffect(() => {
    let oneMin = 10 * 1,
        display = document.querySelector('#time')
    startTimer2(oneMin, display)
},[])

  return(
    <>
        <div>
        <div id="visual-timer" className="center2 height-change">
        </div>
        <div id="visual-timer2" className="center height-change2">
        </div>
        </div>
        <div className="space"></div>
        <div></div>
      <div className="answerform" id="answerform">
        <br></br>
      <form onSubmit={handleAnswerSubmit}>
        <label>
          Answer: 
          <input
            name="answer"
            type="text"
            onChange={handleFieldChange}
            value={userAnswer}
          />
          </label>
        <input className="button submit-it" type="submit" value="Submit"/>
      </form>
      <div className={`${visible}`}>Correct!</div>
      <div className={`${wrong}`}>Wrong!</div>
    </div>
    </>
  )
}

export default AnswerForm