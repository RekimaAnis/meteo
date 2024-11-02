import { useState } from "react";
import meteoDataByCity from "../data/meteo-data";
import "../assets/style/favorite.style.css"
import starOffImg from "../assets/images/star_off.png";
import starOnImg from "../assets/images/star_on.png";   

const ChoiceCity = ({ selected, setSelect, favoriteCity, setFavoriteCity}) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [img, setImg] = useState(starOffImg);
    
    const handleCityChange = (event) => {
        const cityName = event.target.value;
        const cityData = meteoDataByCity.find(cityData => cityData.city === cityName);
        if (cityData) {
            setSelect(cityData);
            setIsFavorite(cityData === favoriteCity);
            setImg(cityData === favoriteCity ? starOnImg : starOffImg);
        } else {
            setSelect(meteoDataByCity[0]);
        }
    };

    const handleClick = () => {
        if (isFavorite) {
            setFavoriteCity(meteoDataByCity[0]);
            setIsFavorite(false); 
            setImg(starOffImg);
        } else {
            setFavoriteCity(selected); 
            setIsFavorite(true);
            setImg(starOnImg); 
        }
    }

    return (
        <div>
            <h2>Choisi une ville</h2>
            <select value={selected.city} onChange={handleCityChange}>
                {meteoDataByCity.map((cityData, index) => (
                    <option key={index} value={cityData.city}>
                        {cityData.city}
                    </option>
                ))}
            </select>
            <img onClick={handleClick} src={img} alt={isFavorite ? "Favorite" : "Not favorite"} />
            <h3>Data for {selected.city}</h3>
        </div>
    );  
}
export default ChoiceCity;