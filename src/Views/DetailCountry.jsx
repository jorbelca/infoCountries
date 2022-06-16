import React from "react"
import { Link, useLocation } from "react-router-dom"
import Bar from "../Components/Bar"
import Home from "./Home"

const DetailCountry = () => {
  const location = useLocation()
  const country = location.state

  let nativeName
  for (const name in country) {
    const nat = country.name.nativeName
    for (const name in nat) {
      nativeName = nat[name].common
    }
  }

  let languages
  for (const language in country) {
    languages = Object.values(country.languages)
  }

  let currencies
  for (const currency in country) {
    currencies = Object.values(country.currencies)
  }
  return (
    <>
      <Bar />
      <div className="detail" key={country.flags.svg}>
        <div className="back-btn">
          <Link className="back" to="/" component={<Home />}>
            <button className="back-btn">
              <span>
                <i className="fa-solid fa-left-long"></i>
              </span>
              Back
            </button>
          </Link>
        </div>

        <div className="alignment-detail">
          <div className="flag-detail">
            <img
              src={country.flags.svg}
              alt="flag"
              srcSet=""
              width="350px"
              height="250px"
            />
          </div>

          <div className="detailData">
            <div className="name">{country.name.common}</div>
            <div className="details">
              <div className="first-column">
                <p>
                  <span className="detail-info">Native Name:</span>
                  {nativeName}
                </p>
                <p>
                  <span className="detail-info">Population:</span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="detail-info">Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="detail-info">Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="detail-info">Capital:</span>
                  {country.capital}
                </p>
              </div>

              <div className="second-column">
                <p>
                  <span className="detail-info">Top Level Domain:</span>
                  {country.tld}
                </p>
                <p>
                  <span className="detail-info">Currencies:</span>
                  {currencies.map((currency) => `${currency.name}, `)}
                </p>
                <p>
                  <span className="detail-info">Languages:</span>
                  {languages.map((language) => `${language},  `)}
                </p>
              </div>

              <div className="bottom-column">
                <p>
                  <span className="detail-info">Border Countries:</span>
                  {country.borders === undefined ? (
                    <></>
                  ) : (
                    <>
                      {country.borders.map((border) => (
                        <button key={border} className="borders">
                          {border}
                        </button>
                      ))}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailCountry
