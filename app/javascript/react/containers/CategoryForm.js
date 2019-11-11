import React, { useState } from "react"
import { Redirect } from "react-router-dom"

const CategoryForm = (props) => {
  const[shouldRedirect, setShouldRedirect] = useState(false)
  const[newCategory, setNewCategory] = useState({
    title: ""
  })
  const[newClue, setNewClue] = useState({
    question: "",
    answer: ""
  })

  const handleFieldChange = event => {
    setNewCategory({
      ...newCategory,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleCategorySubmit = (event) =>{
    event.preventDefault()
    let payload = {
      category: newCategory.title,
      question: newClue.question,
      answer: newClue.answer,
    }

    addNewClue(payload)
    setNewClue({
      question: "",
      answer: "",
    })
  }

  const addNewCategory = payload => {
    fetch("/api/v1/categories", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error);
      }
    })
    .then((response)=>{
      return response.json()
    })
    .then((persistedData)=>{
        setShouldRedirect(true)
    })
    .catch((error) => {console.error("error in fetch")
    })
  }

  if (shouldRedirect){
    return <Redirect to="/categories" />
  }

  return(
    <div className="form-center">
      <div className="form-group">
        <h2>Submit a Category</h2>
        <form className="form">
        <fieldset>
          <label>
            Category Title
            <input
              className="form-control"
              name="category"
              type="text"
              onChange={handleFieldChange}
              value={newCategory.title}
            />
          </label>
        </fieldset>
          <fieldset>
            <label>
              Clue 100 - Question
              <input
                className="form-control"
                name="100"
                type="text"
                onChange={handleFieldChange}
                value={newClue.question}
              />
            </label>
            <label>
              Clue 100 - Answer
              <input
                className="form-control"
                name="100"
                type="text"
                onChange={handleFieldChange}
                value={newClue.answer}
              />
            </label>
          </fieldset>
          <fieldset>
            <label>
              Clue 200 - Question
              <input
                className="form-control"
                name="200"
                type="text"
                onChange={handleFieldChange}
                value={newClue.question}
              />
            </label>
            <label>
              Clue 200 - Answer
              <input
                className="form-control"
                name="200"
                type="text"
                onChange={handleFieldChange}
                value={newClue.answer}
              />
            </label>
            </fieldset>
          <fieldset>
            <label>
              Clue 300 - Question
              <input
                className="form-control"
                name="300"
                type="text"
                onChange={handleFieldChange}
                value={newClue.question}
              />
            </label>
            <label>
              Clue 300 - Answer
              <input
                className="form-control"
                name="300"
                type="text"
                onChange={handleFieldChange}
                value={newClue.answer}
              />
            </label>
            </fieldset>
          <fieldset>
            <label>
              Clue 400 - Question
              <input
                className="form-control"
                name="400"
                type="text"
                onChange={handleFieldChange}
                value={newClue.question}
              />
            </label>
            <label>
              Clue 400 - Answer
              <input
                className="form-control"
                name="400"
                type="text"
                onChange={handleFieldChange}
                value={newClue.answer}
              />
            </label>
            </fieldset>
          <fieldset>
            <label>
              Clue 500 - Question
              <input
                className="form-control"
                name="500"
                type="text"
                onChange={handleFieldChange}
                value={newClue.question}
              />
            </label>
            <label>
              Clue 500 - Answer
              <input
                className="form-control"
                name="500"
                type="text"
                onChange={handleFieldChange}
                value={newClue.answer}
              />
            </label>
          </fieldset>

          <input className="button submit-it" type="submit" value="Submit"/>
        </form>
      </div>
    </div>
  )
}

export default CategoryForm
