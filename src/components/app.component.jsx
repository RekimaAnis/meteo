import DataForCity from "./dataForCity.component.jsx";
import DataComparaison from "./dataComparaison.component.jsx";
import ChartZoneDemo from "./chartZone.component.jsx";
import meteoDataByCity from "../data/meteo-data.js";
import ChoiceCity from "./selectCity.component.jsx";
import { useState } from "react";
import starOffImg from "../assets/images/star_off.png";
import starOnImg from "../assets/images/star_on.png";  


const App = () => {

  const [city, setCity] = useState(meteoDataByCity[0]);
  const [favoriteCity, setFavoriteCity] = useState(meteoDataByCity[0]);
  const [showChart, setShowChart] = useState(false);
  const [text, setText] = useState('afficher')

  const toggleChart = () => {
    setShowChart(prevState => !prevState);
    setText(text => (text === 'afficher' ? 'cacher' : 'afficher'));
  };

  return (
    <div>
        <br/>
        <ChoiceCity 
          selected={city} 
          setSelect={setCity}
          setFavoriteCity={setFavoriteCity}
          favoriteCity={favoriteCity} 
        />
        <DataForCity ville = {city}/>
        <DataComparaison selectedCity={city} favoriteCity={favoriteCity} />
        <button onClick={toggleChart}>{text}</button>
            {showChart && <ChartZoneDemo selectedCity={city} favoriteCity={favoriteCity}/>}
    </div>
  );
}
export default App;
