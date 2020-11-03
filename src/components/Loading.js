import React from "react"
import LoadingSpinner from "./icons/Loading.js"
import "./loading.scss"

function Loading() {
  return (
    <div className="loading__spinner">
      <LoadingSpinner />
    </div>
  )
}

export default Loading
