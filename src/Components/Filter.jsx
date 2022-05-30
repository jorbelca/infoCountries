import React from "react"

const Filter = ({ newSearch }) => {
  return (
    <div className="filter">
      <div className="filter-search">
        <span>
          <input
            className="filter-country"
            type="text"
            placeholder="Search for a country..."
            onChange={(e) => {
              newSearch(e.target.value)
            }}
          />
        </span>
      </div>

      <div className="filter-select">
        <select>
          <option value="" default>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  )
}

export default Filter
