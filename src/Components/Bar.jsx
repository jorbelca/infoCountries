import React from "react"

const Bar = () => {
  return (
    <>
      <nav>
        <div className="bar">
          <div className="title">
            <span>Where in the world?</span>
          </div>

          <div className="bar-button">
            <button>
              <span>
                <i className="fa-regular fa-moon"></i>
              </span>
              Dark Mode
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Bar
