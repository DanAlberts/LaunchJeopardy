import React, { useState } from "react"
import { Redirect } from "react-router-dom"

const CategoryForm = (props) => {
  const[shouldRedirect, setShouldRedirect] = useState(false)
  const[newCategory, setNewCategory] = useState({
    name: "",
    location: "",
    description: "",
    image: ""
  })

  const handleFieldChange = event => {
    setNewCategory({
      ...newCategory,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const clearFields = (event) => {
    event.preventDefault()
    setNewCategory({
      name: "",
      location: "",
      description: "",
      image: ""
    })
    setErrors({})
  }


  const handleParkSubmit = (event) =>{
    event.preventDefault()
    if (!validForSubmission()){
      return
    }

    let payload = {
      name:newPark.name,
      location:newPark.location,
      description:newPark.description,
      image:newPark.image
    }

    addNewPark(payload)
    setNewPark({
      name: "",
      location: "",
      description: "",
      image: ""
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
    <div className="form narrow-form" id="park-review-form">
      <h2 id="review-form-title">Submit a Category</h2>
      <form onSubmit={handleCategorySubmit} className="new-parkform">
        <ErrorList errors={errors} />
        <label>
          Category Title
          <input
            name="name"
            type="text"
            onChange={handleFieldChange}
            value={newCategory.title}
          />
        </label>

        <label>
          Clue
          <input
            name="location"
            type="text"
            onChange={handleFieldChange}
            value={newPark.location}
          />
        </label>

        <label>
          Park Description
          <textarea
            name="description"
            rows="3"
            onChange={handleFieldChange}
            value={newPark.description}
          />
        </label>

        <label>
          Park Image URL
          <input
            name="image"
            type="text"
            onChange={handleFieldChange}
            value={newPark.image}
          />
        </label>

        <input className="button submit-it" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default ParkForm
