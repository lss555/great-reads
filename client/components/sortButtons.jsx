import React from 'react'

const SortButtons = props => {
  return (
    <div>
      <h3>Results:</h3>
      <button type="button" name="relevance" onClick={props.handleSort} >Relevance</button>
      <button type="button" name="year" onClick={props.handleSort}>Year Published</button>
      <button type="button" name="editions" onClick={props.handleSort}>Most Editions</button>
    </div>
  )
}

export default SortButtons
