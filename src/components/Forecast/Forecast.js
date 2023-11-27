import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Forecast.scss";
import icon from "../../assets/icons/icons/02d.png";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  console.log(forecastDays);

  return (
    <>
      <label className="title" htmlFor="">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem className="container" key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  {/* <img className="icon-small" src={`../../assets/icons/icons/${item.weather[0].icon}.png`} alt="weather" /> */}
                  <img className="icon-small" src={icon} alt="weather" />
                  <label className="day" htmlFor="">
                    {forecastDays[idx]}
                  </label>
                  <label className="description" htmlFor="">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max" htmlFor="">
                    {Math.round(item.main.temp_min)}°C /
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <div className="daily-details-grid">
                    <div className="daily-details-grid-item">
                        <label htmlFor="">Pressure</label>
                        <label htmlFor="">{item.main.pressure} Pa</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label htmlFor="">Humidity</label>
                        <label htmlFor="">{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label htmlFor="">Clouds</label>
                        <label htmlFor="">{item.clouds.all}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label htmlFor="">Wind speed</label>
                        <label htmlFor="">{item.wind.speed} m/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label htmlFor="">Sea level:</label>
                        <label htmlFor="">{item.main.sea_level}m</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label htmlFor="">Feels like:</label>
                        <label htmlFor="">{Math.round(item.main.feels_like)}°C</label>
                    </div>
                </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
