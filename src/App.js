import logo from './logo.svg';
import './'
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/form.component";
import Flight from "./components/flight.component"
import Weather from "./components/weather.component";
import Header from "./components/header.component";
import Footer from "./components/footer.component";
import background from "./assets/cool-background.png"

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flight_list: null,
            weather_data: null,
            weather_data2: null,
            origin: null,
            destination: null,
            depart_date: null,
            return_date: null,

        };
        // this.getFlightData();
    }

    getFlightData = async (e) => {
        e.preventDefault()
        let origin = e.target.elements.origin.value
        console.log(origin, 'origin')
        let destination = e.target.elements.destination.value
        console.log(destination, 'destination')
        let depart_date = e.target.elements.depart_date.value
        console.log(depart_date, 'depart_date')
        let return_date = e.target.elements.return_date.value
        console.log(return_date, 'return_date')

        this.setState({
            origin: e.target.elements.origin.value,
            destination: e.target.elements.destination.value,
            depart_date: e.target.elements.depart_date.value,
            return_date: e.target.elements.return_date.value,
        })

        const given_data = {
            "origin": origin,
            "page": "None",
            "currency": "USD",
            "depart_date": depart_date,
            "return_date": return_date,
            "destination": destination,
            "sort": "low",
        }
        let settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(given_data)
        };

        // getting flight data
        const fetchResponse = await fetch(`http://127.0.0.1:8000/flight2/`, settings)
        const data = await fetchResponse.json()
        console.log(data)
        console.log(data.data, 'flight')
        this.setState({
            flight_list: data.data,
        })


        const weather_given_data = {"q": destination, "dt": "2021-12-04", "lang": "en"}

        let weather_settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(weather_given_data)
        };


        // getting weather data
        const fetchweatherResponse = await fetch(`http://127.0.0.1:8000/weather/`, weather_settings)
        const weather_data = await fetchweatherResponse.json()
        console.log(weather_data, 'weather_data')
        if (weather_data.error) {
            console.log(weather_data)
        } else {
            this.setState({
                weather_data: weather_data,
            })
        }

        let weather_settings2 = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };

        // getting marged weather data
        const fetchmargedweatherResponse = await fetch(`http://127.0.0.1:8000/weather_api_marge_data/`, weather_settings2)
        const weather_data2 = await fetchmargedweatherResponse.json()
        console.log(weather_data2, 'weather_data2')
        if (weather_data2) {
            console.log(weather_data2)
            this.setState({
                weather_data2: weather_data2,
            })
        }

    }
    getFlightDataSorted = async (e) => {
        e.preventDefault()
        let sort = e.target.value
        console.log(sort, 'sort')
        let origin = this.state.origin
        console.log(origin, 'origin')
        let destination = this.state.destination
        console.log(destination, 'destination')
        let depart_date = this.state.depart_date
        console.log(depart_date, 'depart_date')
        let return_date = this.state.return_date
        console.log(return_date, 'return_date')

        this.setState({
            origin: origin,
            destination: destination,
            depart_date: depart_date,
            return_date: return_date,
        })

        const given_data = {
            "origin": origin,
            "page": "None",
            "currency": "USD",
            "depart_date": depart_date,
            "return_date": return_date,
            "destination": destination,
            "sort": sort,
        }
        let settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(given_data)
        };

        // getting flight data
        const fetchResponse = await fetch(`http://127.0.0.1:8000/flight2/`, settings)
        const data = await fetchResponse.json()
        console.log(data)
        console.log(data.data, 'flight')
        this.setState({
            flight_list: data.data,
        })


        const weather_given_data = {"q": destination, "dt": "2021-12-04", "lang": "en"}

        let weather_settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(weather_given_data)
        };


        // getting weather data
        const fetchweatherResponse = await fetch(`http://127.0.0.1:8000/weather/`, weather_settings)
        const weather_data = await fetchweatherResponse.json()
        console.log(weather_data, 'weather_data')
        if (weather_data.error) {
            console.log(weather_data)
        } else {
            this.setState({
                weather_data: weather_data,
            })
        }

        let weather_settings2 = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };

        // getting marged weather data
        const fetchmargedweatherResponse = await fetch(`http://127.0.0.1:8000/weather_api_marge_data/`, weather_settings2)
        const weather_data2 = await fetchmargedweatherResponse.json()
        console.log(weather_data2, 'weather_data2')
        if (weather_data2) {
            console.log(weather_data2)
            this.setState({
                weather_data2: weather_data2,
            })
        }

    }

    render() {
        return (
            <div className="App" style={{background: "#e9ecef"}}>
                <Header/>
                {/*<header className="App-header">*/}
                {/*    <h3 className="text-center bg-secondary py-3">Flight Search Application</h3>*/}
                {/*</header>*/}
                <Form get_flight_data={this.getFlightData}/>
                <Weather weather_data={this.state.weather_data} weather_data2={this.state.weather_data2}
                         flight_list={this.state.flight_list}/>
                <Flight flight_list={this.state.flight_list} origin={this.state.origin}
                        destination={this.state.destination} depart_date={this.state.depart_date}
                        return_date={this.state.return_date} getFlightDataSorted={this.getFlightDataSorted}/>
                <Footer flight_list={this.state.flight_list}/>
            </div>
        )
    }
}

export default App;
