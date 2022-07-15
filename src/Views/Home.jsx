import { useEffect, useState } from "react"
import Bar from "../Components/Bar"
import Cards from "../Components/Cards"

const Home = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setCountries(data)
      })
  }, [])

  const newSearch = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
    const current_filter = search.toLowerCase()
    const matchedCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(current_filter)
    )
    setCountries(matchedCountries)
  }
  const newSelect = (event) => {
    event.preventDefault()
    const region = event.target.value
    const matchedCountries = countries.filter((country) =>
      country.region.includes(region)
    )
    setCountries(matchedCountries)
  }

  return (
    <>
      <Bar />
      {/* FILTER */}
      <div className="filter">
        <div className="filter-search">
          <input
            className="filter-country"
            type="text"
            onChange={newSearch}
            placeholder="Search for a country..."
          />
        </div>

        <div className="filter-select">
          <select onChange={newSelect}>
            <option value="" default>
              Filter by Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <Cards countries={countries} />
    </>
  )
}

export default Home
