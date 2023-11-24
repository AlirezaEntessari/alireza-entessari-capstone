import "./Header.scss";

export const Header = () => {
  return (
    <>
      <header>
        <div className="header">
          <ul className="header__list">
            <div className="header__list--item1">North America</div>
            <div className="header__list--item2">South America</div>
            <div className="header__list--item3">Europe</div>
            <div className="header__list--item4">Africa</div>
            <div className="header__list--item5">Asia</div>
            <div className="header__list--item6">Australia</div>
          </ul>
        </div>
        <div className="horizontal-header">
          <nav className="horizontal-header__nav">
            <ul className="horizontal-header__list">
              <li className="horizontal-header__list--north-america">North America</li>
              <li className="horizontal-header__list--south-america">South America</li>
              <li className="horizontal-header__list--europe">Europe</li>
              <li className="horizontal-header__list--africa">Africa</li>
              <li className="horizontal-header__list--asia">Asia</li>
              <li className="horizontal-header__list--australia">Australia</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
