import { useState , useEffect} from "react"

import Chart from 'chart.js/auto'
import { Bar } from "react-chartjs-2"
import meteoDataByCity from "../data/meteo-data"
import "../assets/style/chartZone.style.css"

import '../assets/style/chartZone.style.css'

const LABELS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];

const CATEGORY_LABELS = {
    temp_min: 'Température Minimale (C°)',
    temp_max: 'Température Maximale (C°)',
    pluviometrie: 'Pluviométrie (mm)',
    ensoleillement: 'Ensoleillement (heures)',
    jours_gel: 'Jours de Gel (Jours)',
};

const MAX_LABELS = {
    temp_min: 25,
    temp_max: 32,
    pluviometrie: 170,
    ensoleillement: 320,
    jours_gel: 23,
}

const MIN_LABELS = {
    temp_min: -5,
    temp_max: 0,
    pluviometrie: 0,
    ensoleillement: 0,
    jours_gel: 0,
}


const ChartZoneDemo = ({ selectedCity, favoriteCity }) => {
    const [category, setCategory] = useState('temp_min');
    const buildData = () => {
        const selectedData = selectedCity.data.map((monthData) => monthData[category]);
        const favoriteData = favoriteCity.data.map((monthData) => monthData[category]);

        return (
            {
                labels: LABELS,
                datasets: [
                    {
                        label: selectedCity.city,
                        data: selectedData,
                        backgroundColor: "rgb(255, 128, 128)",
                        borderColor: "rgba(0, 0, 0, 0.5)",
                        borderWidth: 1
                    },
                    {
                        label: favoriteCity.city,
                        data: favoriteData,
                        backgroundColor: "gold",
                        borderColor: "rgba(0, 0, 0, 0.5)",
                        borderWidth: 1
                    }
                ]
            })
    }

    const [chartData, setChartData] = useState(buildData())

    useEffect(() => {
        setChartData(buildData());
    }, [selectedCity, favoriteCity, category]);

    const handleClick = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    const Buttons = () => {
        const categories = Object.keys(selectedCity.data[0]).filter(category => category !== 'pour');

        return categories.map((category, index) => (
            <button key={index} onClick={() => handleClick(category)}>
                {CATEGORY_LABELS[category]}
            </button>
        ));
    };

    const chart = <div className="chartZone">
        <Bar
            data={chartData}
            options={{
                scales: {
                    y: {
                        min: MIN_LABELS[category],
                        max: MAX_LABELS[category],
                    }
                },
                animation: {
                    duration: 500,
                    easing: 'easeIn'
                },
                plugins: {
                    title: {
                        display: true,
                        text: CATEGORY_LABELS[category]
                    }
                },
                legend: {
                    labels: {
                        fontSize: 14
                    }
                }
            }
            }
        />
    </div>

    return (
        <div className="chartZone">
            <div className="buttons">
                {Buttons()}
            </div>
            {chart}
        </div>
    )
}
export default ChartZoneDemo