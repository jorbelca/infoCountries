import { Link } from "react-router-dom"
import DetailCountry from "../Views/DetailCountry"

const Cards = ({ countries }) => {
  return (
    <div className="cardsWrapper">
      {countries.map((country) => (
        <div className="cards" key={country.flags.svg}>
          <Link
            className="card"
            to={"/detail"}
            component={<DetailCountry />}
            state={country}
          >
            <div className="flag">
              <img
                src={country.flags.svg}
                alt="flag"
                srcSet=""
                width="150px"
                height="100px"
              />
            </div>

            <div className="generalData">
              <div className="name">{country.name.common}</div>
              <div className="details">
                <p>
                  Population:
                  {country.population.toLocaleString()}
                </p>
                <p>
                  Region:
                  {country.region}
                </p>
                <p>
                  Capital:
                  {country.capital}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Cards
