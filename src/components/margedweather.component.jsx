import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWind, faTemperatureHigh, faTemperatureLow, faSmog} from '@fortawesome/free-solid-svg-icons'

class MargedWeather extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        if (this.props.weather_data2) {
            let weather_list = (this.props.weather_data2).length
            console.log(weather_list, 'weather_list')
            let weather_data2 = this.props.weather_data2;
            console.log(weather_data2, 'weather_data weather page')
            return (
                weather_data2.map((data, i) =>
                    <div className="card p-3 mt-1" style={{border: "none"}}>
                        <div className="d-flex justify-content-between">
                            <div>
                                <h6>weather: {data.weather[0].main}</h6>
                            </div>
                            <div><h6>{data.main.temp} &deg;F</h6>
                            </div>
                            <div><h6>Location: {data.name}</h6>
                            </div>


                        </div>
                        <div className="d-flex text-center justify-content-evenly mt-1 mb-1">

                            <div className="temp-details flex-grow-1">
                                <p className="my-1"><FontAwesomeIcon
                                    icon={faSmog}/> Humidity: <span>{data.main.humidity} </span>
                                </p>
                            </div>
                            <div className="temp-details flex-grow-1">
                                <p className="my-1"><FontAwesomeIcon
                                    icon={faTemperatureHigh}/>Max: <span> {data.main.temp_max} &deg;F </span>
                                </p>
                            </div>
                            <div className="temp-details flex-grow-1">
                                <p className="my-1"><FontAwesomeIcon
                                    icon={faTemperatureHigh}/> Min:
                                    <span>{data.main.temp_min} &deg;F</span>
                                </p>
                            </div>


                        </div>
                    </div>
                )


            )

        } else {
            return (
                <div></div>
            )
        }

    }

}

export default MargedWeather