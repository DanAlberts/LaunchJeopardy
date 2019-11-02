import React, { useState, useEffect } from "react"
import CategoryTile from "../components/CategoryTile"

const BoardContainer = (props) => {
  const[categories, setCategories] = useState([])
  const [user, setUser] = useState({})

  useEffect(()=> {
    fetch("/api/v1/categories")
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
    .then(Body => {
      setCategories(Body.categories)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])


  const categoriesList = categories.map(category => {
    return(
      <CategoryTile
        key={category.options.id}
        title={category.options.title}
        clues={category.options.clues}
      />
    )
  })


  return(
    <>
      <div className="card-deck">
        {categoriesList}
      </div>
    </>
  )
}

export default BoardContainer
