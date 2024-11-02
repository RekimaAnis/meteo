import meteoDataByCity from "../data/meteo-data";
import "../assets/style/dataCell.style.css"
import "../assets/style/dataForCity.style.css"
const DataForCity = ({ville}) => {
    const title =['','Temp minimale', 'Temp maximale', 'Pluviométre', 'Ensoleillement', 'Jour de gel']
    return(
        <div className="dataForCity">
            <div className="meteoData">
                {title.map((title,index) => (
                    <div className="dataCell" key={index}>{title}</div>
                ))}
            </div>
            {ville.data.map((monthData, index) => (
                <div className="meteoData" key={index}>
                    <div className="dataCell ">{monthData.pour}</div>
                    <div className="dataCell temperature">{monthData.temp_min}</div>
                    <div className="dataCell temperature">{monthData.temp_max}</div>
                    <div className="dataCell mm">{monthData.pluviometrie}</div>
                    <div className="dataCell h">{monthData.ensoleillement}</div>
                    <div className="dataCell jour">{monthData.jours_gel}</div>
                </div>
            ))}
        </div>
    );
}
export default DataForCity;