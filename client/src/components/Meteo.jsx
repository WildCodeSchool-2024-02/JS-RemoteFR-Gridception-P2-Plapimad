import "../scss/Meteo.scss";

function Meteo({ icon, name, temperature, ressenti, description, vent }) {
  return (
    <>
      <div className="meteo-container">
        <div className="box-info">
          <h1 className="meteo-title">Méteo</h1>
          <h2>{name}</h2>
        </div>
        <div className="box-globale">
          <div className="box-temp">
            <p>Température: {temperature}°</p>
            <p>Ressenti: {ressenti}°</p>
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
export default Meteo;
