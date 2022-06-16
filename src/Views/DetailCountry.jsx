import React from "react"
import { Link, useLocation } from "react-router-dom"
import Bar from "../Components/Bar"
import Home from "./Home"

const DetailCountry = () => {
  const location = useLocation()
  const country = location.state
  console.log(country)
  return (
    <>
      <Bar />

      <Link className="card" to="/" component={<Home />}>
        <button className="back-btn">
          <span>
            <i className="fa-solid fa-left-long"></i>
          </span>
          Back
        </button>
      </Link>

      <div className="detail" key={country.flags.svg}>
        <div className="flag">
          <img
            src={country.flags.svg}
            alt="flag"
            srcSet=""
            width="300px"
            height="200px"
          />
        </div>

        <div className="detailData">
          <div className="name">{country.name.common}</div>
          <div className="details">
            <div className="first-column">
              <p>
                Native Name:
                {/* {country.name.nativeName.spa.common} */}
              </p>
              <p>
                Population:
                {country.population.toLocaleString()}
              </p>
              <p>
                Region:
                {country.region}
              </p>
              <p>
                Sub Region:
                {country.subregion}
              </p>
              <p>
                Capital:
                {country.capital}
              </p>
            </div>

            <div className="second-column">
              <p>
                Top Level Domain:
                {country.tld}
              </p>
              <p>
                Currencies:
                {/* {country.currencies.USD.symbol} */}
              </p>
              <p>
                Languages:
                {/* {country.languages.spa} */}
              </p>
            </div>

            <div className="bottom-column">
              <p>
                Border Countries:
                {country.borders.map((border) => (
                  <button className="borders">{border}</button>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailCountry
