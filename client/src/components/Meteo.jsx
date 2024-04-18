import "../scss/Meteo.scss";
import PropTypes from "prop-types";

function Meteo({ icon, name, temperature, ressenti, description, vent }) {
  return (
    <>
      <div className="meteo-container">
        <div className="box-info">
          <h1 className="meteo-title">Météo</h1>
          <h2>{name}</h2>
        </div>
        <div className="box-globale">
          <div className="box-temp">
            <p>Température: {temperature}°C</p>
            <p>Ressenti: {ressenti}°C</p>
          </div>
          {icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="petit incon"
            />
          )}
          <div className="icon-description">
            <p>{description}</p>
            <p>💨 {vent}</p>
          </div>
        </div>
      </div>
    </>
  );
}
Meteo.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  temperature: PropTypes.number.isRequired,
  ressenti: PropTypes.number.isRequired,
  description: PropTypes.string,
  vent: PropTypes.string,
};
export default Meteo;
