import React, { useState } from "react"
import storyData from "./storyData"

function Story() {
  return (
    <div className="stories">
      <div className="story-container">
        <ul>
          <li>
            {storyData.map((item, index) => {
              return (
                <button key={index}>
                  <a href="/#">
                    <img
                      src={item.image}
                      height={item.height}
                      width={item.width}
                      alt={item.alt}
                      loading={item.loading}
                      className={item.cName}
                    />
                    <span>{item.text}</span>
                  </a>
                </button>
              )
            })}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Story
