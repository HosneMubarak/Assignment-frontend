import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faWind, faTemperatureHigh, faTemperatureLow} from '@fortawesome/free-solid-svg-icons'
import MargedWeather from "./margedweather.component";

class Weather extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        if (this.props.weather_data && this.props.flight_list) {
            let weather_data = this.props.weather_data;
            let hours_weather = weather_data.forecast.forecastday[0].hour[0]

            console.log(hours_weather, 'weather_data weather page filtered')
            console.log(weather_data, 'weather_data weather page')
            return (
                <div className='container mt-2 text-muted'>
                    <div className='card' style={{border: "none"}}>
                        <div className='card-body'>
                            <div className="row">
                                <div className="row">
                                    <div className="col">
                                        <small className="text-justify-end">By: WeatherAPI.com [rapidapi.com]</small>
                                        <div className="container-fluid">
                                            <div className="row justify-content-center">
                                                <div className="">
                                                    <div className="card p-2" style={{border: "none"}}>
                                                        <div className="d-flex justify-content-between">
                                                            <div>
                                                                <h6>{weather_data.location.region}, {weather_data.location.country}</h6>
                                                            </div>
                                                            <div><h6>{weather_data.forecast.forecastday[0].date}</h6>
                                                            </div>


                                                        </div>
                                                        <div className="d-flex justify-content-evenly mt-1 mb-1">
                                                            <div>
                                                                <h1 className="mb-0 font-weight-bold"
                                                                    id="heading"> {weather_data.forecast.forecastday[0].day.avgtemp_c}&deg;C</h1>
                                                                <h6 className="small grey">{weather_data.forecast.forecastday[0].day.condition.text}</h6>
                                                            </div>
                                                            <div><img
                                                                src="https://cdn.weatherapi.com/weather/64x64/day/116.png"
                                                                width="90px"/>
                                                            </div>

                                                        </div>
                                                        <div
                                                            className="d-flex text-center justify-content-evenly mt-1 mb-1">

                                                            <div className="temp-details flex-grow-1">
                                                                <p className="my-1"><FontAwesomeIcon
                                                                    icon={faWind}/> Maxwind: <span>{weather_data.forecast.forecastday[0].day.maxwind_kph} Kph </span>
                                                                </p>
                                                            </div>
                                                            <div className="temp-details flex-grow-1">
                                                                <p className="my-1"><FontAwesomeIcon
                                                                    icon={faTemperatureHigh}/>Max: <span> {weather_data.forecast.forecastday[0].day.maxtemp_c} &deg;C </span>
                                                                </p>
                                                            </div>
                                                            <div className="temp-details flex-grow-1">
                                                                <p className="my-1"><FontAwesomeIcon
                                                                    icon={faTemperatureHigh}/> Min:
                                                                    <span>{weather_data.forecast.forecastday[0].day.mintemp_c} &deg;C</span>
                                                                </p>
                                                            </div>


                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <small className="text-justify-end">By: Demo marged last 2 data</small>
                                        <div className="container-fluid">
                                            <div className="row justify-content-center">
                                                <div className="row">
                                                    <MargedWeather weather_data2={this.props.weather_data2}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )

        } else {
            return (
                <div></div>
            )
        }

    }

}

export default Weather