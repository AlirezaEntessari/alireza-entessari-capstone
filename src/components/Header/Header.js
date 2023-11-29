import "./Header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <ul className="header__list">
            <Link className="header__link" to="/NorthAmerica">
              <div className="header__list--item1">North America</div>
            </Link>
            <Link className="header__link" to="/SouthAmerica">
              <div className="header__list--item2">South America</div>
            </Link>
            <Link className="header__link" to="/Europe">
              <div className="header__list--item3">Europe</div>
            </Link>
            <Link className="header__link" to="/Africa">
              <div className="header__list--item4">Africa</div>
            </Link>
            <Link className="header__link" to="/Asia">
              <div className="header__list--item5">Asia</div>
            </Link>
            <Link className="header__link" to="/Australia">
              <div className="header__list--item6">Australia</div>
            </Link>
            <Link
              className="header__link"
              to="https://www.oanda.com/currency-converter/en/?from=USD&to=EUR&amount=22"
            >
              <div className="header__list--item7">Currency Converter</div>
            </Link>
          </ul>
        </div>
        <div className="horizontal-header">
          <nav className="horizontal-header__nav">
            <ul className="horizontal-header__list">
              <Link className="horizontal-header__link" to="/NorthAmerica">
                <li className="horizontal-header__list--north-america">
                  North America
                </li>
              </Link>
              <Link className="horizontal-header__link" to="/SouthAmerica">
                <li className="horizontal-header__list--south-america">
                  South America
                </li>
              </Link>
              <Link className="horizontal-header__link" to="/Europe">
                <li className="horizontal-header__list--europe">Europe</li>
              </Link>
              <Link className="horizontal-header__link" to="/Africa">
                <li className="horizontal-header__list--africa">Africa</li>
              </Link>
              <Link className="horizontal-header__link" to="/Asia">
                <li className="horizontal-header__list--asia">Asia</li>
              </Link>
              <Link className="horizontal-header__link" to="/Australia">
                <li className="horizontal-header__list--australia">
                  Australia
                </li>
              </Link>
              <Link
                className="horizontal-header__link"
                to="https://www.oanda.com/currency-converter/en/?from=USD&to=EUR&amount=22"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="horizontal-header__list--currency-converter">
                  Currency Converter
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
