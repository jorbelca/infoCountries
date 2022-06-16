import React from "react"
import { ThemeContext, themes } from "../Theme/theme"

const Bar = () => {
  const [darkMode, setDarkMode] = React.useState(true)

  return (
    <>
      <nav>
        <div className="bar">
          <div className="title">
            <span>Where in the world?</span>
          </div>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <div className="bar-button">
                <button
                  onClick={() => {
                    setDarkMode(!darkMode)
                    changeTheme(darkMode ? themes.light : themes.dark)
                  }}
                >
                  <span>
                    <i className="fa-regular fa-moon"></i>
                  </span>
                  Dark Mode
                </button>
              </div>
            )}
          </ThemeContext.Consumer>
        </div>
      </nav>
    </>
  )
}

export default Bar
