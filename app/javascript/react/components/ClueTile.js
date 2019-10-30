import React from 'react'

const ClueTile = (props) => {
  return(
    <>
  <div>
    < div className = "card qCard bg-secondary" >
      <div className="card-body">
        <p>{props.value}</p>
      </div>
      <div class="card-footer">
      </div>
    </div>
  </div>
    </>
  )
}

export default ClueTile