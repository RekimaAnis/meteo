import React from "react";
import "../assets/style/dataComparison.style.css"

const DataComparaison = ({ selectedCity, favoriteCity }) => {
    
    if (!selectedCity || !favoriteCity) {
        return null;
    } 
    
    const calculateAverageTemperature = city => {
        let tempMinTotal = 0;
        let tempMaxTotal = 0;
        city.data.forEach(month => {
            tempMinTotal += month.temp_min;
            tempMaxTotal += month.temp_max;
        });
        const tempMinAvg = tempMinTotal / city.data.length;
        const tempMaxAvg = tempMaxTotal / city.data.length;
        return { tempMinAvg, tempMaxAvg };
    };
   
    const { tempMinAvg: selectedCityTempMinAvg, tempMaxAvg: selectedCityTempMaxAvg } = calculateAverageTemperature(selectedCity);
    const { tempMinAvg: favoriteCityTempMinAvg, tempMaxAvg: favoriteCityTempMaxAvg } = calculateAverageTemperature(favoriteCity);
   
    const calculateTotal = (city, category) => {
        let total = 0;
        city.data.forEach(month => {
            total += month[category];
        });
        return total;
    };

    const selectedCityPluviometrieTotal = calculateTotal(selectedCity, 'pluviometrie');
    const favoriteCityPluviometrieTotal = calculateTotal(favoriteCity, 'pluviometrie');
    const selectedCityEnsoleillementTotal = calculateTotal(selectedCity, 'ensoleillement');
    const favoriteCityEnsoleillementTotal = calculateTotal(favoriteCity, 'ensoleillement');
    const selectedCityJoursGelTotal = calculateTotal(selectedCity, 'jours_gel');
    const favoriteCityJoursGelTotal = calculateTotal(favoriteCity, 'jours_gel');


    return (
        <div className="dataComparison">
            <h2>Comparaison</h2>
            <div className="meteoData">
                <div className="dataCell"></div>
                <div className="dataCell">Température Minimale</div>
                <div className="dataCell">Température Maximale</div>
                <div className="dataCell">Pluviométrie</div>
                <div className="dataCell">Ensoleillement</div>
                <div className="dataCell">Jours de Gel</div>
            </div>
            <div className="meteoData">
                <div className="dataCell">{selectedCity.city}</div>
                <div className="dataCell temperature">{selectedCityTempMinAvg.toFixed(1)}</div>
                <div className="dataCell temperature">{selectedCityTempMaxAvg.toFixed(1)}</div>
                <div className="dataCell mm">{selectedCityPluviometrieTotal}</div>
                <div className="dataCell h">{selectedCityEnsoleillementTotal}</div>
                <div className="dataCell jour">{selectedCityJoursGelTotal}</div>
            </div>
            <div className="meteoData favorite">
                <div className="dataCell">{favoriteCity.city}</div>
                <div className="dataCell temperature">{favoriteCityTempMinAvg.toFixed(1)}</div>
                <div className="dataCell temperature">{favoriteCityTempMaxAvg.toFixed(1)}</div>
                <div className="dataCell mm">{favoriteCityPluviometrieTotal}</div>
                <div className="dataCell h">{favoriteCityEnsoleillementTotal}</div>
                <div className="dataCell jour">{favoriteCityJoursGelTotal}</div>
            </div>
        </div>

    );
}
export default DataComparaison;