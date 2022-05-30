import React, { useEffect, useState } from "react"

const Cards = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setCountries(data)
      })
  }, [])

  console.log(countries)
  return (
    {countries.map(country => (
    <div className="cards">
      <div className="card">
        <div className="flag">
          <img src={country.flag.svg} alt="flag" srcSet="" width="150px" height="100px" />
        </div>

        <div className="data">
          <h3>{country.name.common}</h3>
        </div>
      </div>
    </div>
  ))}

  )
}

export default Cards
