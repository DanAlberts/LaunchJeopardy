import React, { useState, useEffect } from 'react'

const AnswerForm = (props) => {
  let clueAnswer = props.answer.toLowerCase()
  const [correct, setCorrect] = useState(null)
  const [answer, setAnswer] = useState({
    answer: ""
  })
  let visible = "hidden"
  if(correct === true){
    visible = "visible"
  }

  let wrong = "hidden"

    const handleFieldChange = event => {
    setAnswer({
      answer,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleAnswerSubmit = (event) =>{
    event.preventDefault()
    let fAnswer = answer.answer.toLowerCase()
    if (fAnswer === clueAnswer){
      debuuger
      setCorrect(true)
    }else{
      wrong = "visible"
    }
  }

  function startTimer(duration, display) {

    var minTimer = duration, seconds;
    
    setInterval(function () {
        // let visualTimer = document.getElementById('visual-timer')
        // // visualTimer.classList.add("height-change")

        seconds = parseInt(minTimer % 60)

        seconds = seconds < 10 ? + seconds : seconds

        if (--minTimer < 0) {
            // visualTimer.classList.remove("height-change")
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
        // let visualTimer = document.getElementById('visual-timer2')
        // visualTimer.classList.add("height-change2")
        seconds = parseInt(minTimer % 60)

        seconds = seconds < 10 ? + seconds : seconds

        if (--minTimer < 0) {
            // visualTimer.classList.remove("height-change2")
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
      <div className="answerform" id="answerform">
        <br></br>
      <form onSubmit={handleAnswerSubmit}>
        <label>
          Answer:
          <input
            name="answer"
            type="text"
            onChange={handleFieldChange}
            value={answer.answer}
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