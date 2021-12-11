import React from "react";
import OriginSelect from "./flightorigin.component";
import Select from 'react-select';
import Constants from "./airportdata";
import AsyncSelect from "react-select/async";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faMapPin, faPlaneDeparture, faExchangeAlt, faSearch, faArrowRight} from '@fortawesome/free-solid-svg-icons'

const options = Constants.OPTIONS

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trip: false,
            selectedOption: {},
            selectedOption2: {},
        }

        this.onChangeOne = this.onChangeOne.bind(this);
        this.onChangeTwo = this.onChangeTwo.bind(this);
    }

    fetchData = (inputValue, callback) => {
        setTimeout(() => {
            fetch(
                "http://127.0.0.1:8000/airport_search_by_free_text/" + inputValue + "/",
                {
                    method: "GET",
                }
            )
                .then((resp) => {
                    return resp.json();
                })
                .then((data) => {
                    const tempArray = [];
                    let response_data = data.items
                    if (response_data) {
                        if (response_data.length) {
                            response_data.forEach((element) => {
                                tempArray.push({
                                    label: `${element.name}`,
                                    value: element.iata,
                                });
                            });
                        } else {
                            tempArray.push({
                                label: `${data.name}`,
                                value: data.iata,
                            });
                        }
                    }
                    callback(tempArray);
                })
                .catch((error) => {
                    console.log(error, "catch the error");
                });
        }, 100);
    };

    onSearchChange = (selectedOption) => {
        if (selectedOption) {
            this.setState({
                selectedOption,
            });
        }
    };

    onSearchChange2 = (selectedOption2) => {
        if (selectedOption2) {
            this.setState({
                selectedOption2,
            });
        }
    };


    onChangeOne(e) {
        this.setState({trip: false});
        console.log(this.state.trip)
    }

    onChangeTwo(e) {
        this.setState({trip: true});
        console.log(this.state.trip)
    }




    render() {

        return (
            <div className="container mt-4">
                <form onSubmit={this.props.get_flight_data}>
                    <div className="card rounded text-muted" style={{border: "none"}}>
                        <div className="card-body">
                            <div className="row justify-content-md-center mb-2">
                                <div className="col col-lg-4 col-md-4">
                                    <input checked={this.state.trip} onChange={this.onChangeTwo} type="radio"
                                           name="round_trip"/>
                                    <span className="px-2">Round Trip</span>
                                </div>
                                <div className="col-md-auto align-self-center">
                                    <p className=""></p>
                                </div>
                                <div className="col col-lg-4 col-md-4">
                                   <input checked={!this.state.trip} onChange={this.onChangeOne} type="radio"
                                           name="one_way"/>
                                    <span className="px-2">One Way</span>
                                </div>
                            </div>


                            <div className="row justify-content-md-center mb-2">
                                <div className="col col-lg-4 col-md-4">
                                    {/*<input type="text" className="form-control" name="origin" placeholder="From"*/}
                                    {/*       autoComplete="on" required/>*/}
                                    <label>From <FontAwesomeIcon icon={faMapPin}/></label>
                                    {/*<Select required={"true"} options={options} name="origin"/>*/}
                                    {/*<div>*/}
                                    {/*    <label>Select City</label>*/}
                                        <AsyncSelect
                                            placeholder="search"
                                            value={this.state.selectedOption}
                                            loadOptions={this.fetchData}
                                            onChange={(e) => {
                                                this.onSearchChange(e);
                                            }}
                                            defaultOptions={true}
                                            name="origin"
                                        />
                                    {/*</div>*/}
                                </div>
                                <div className="col-md-auto align-self-center">
                                    <p className="mt-4 pt-2"><FontAwesomeIcon icon={faArrowRight}/></p>
                                </div>
                                <div className="col col-lg-4 col-md-4">
                                    {/*<input type="text" className="form-control" name="destination" placeholder="To"*/}
                                    {/*       autoComplete="on" required/>*/}
                                    <label>To <FontAwesomeIcon icon={faMapMarkerAlt}/></label>
                                    {/*<Select options={options} name="destination" required/>*/}
                                    {/*<label>Select City</label>*/}
                                    <AsyncSelect
                                        placeholder="search"
                                        value={this.state.selectedOption2}
                                        loadOptions={this.fetchData}
                                        onChange={(e) => {
                                            this.onSearchChange2(e);
                                        }}
                                        defaultOptions={true}
                                        name="destination"
                                    />
                                </div>
                            </div>

                            <div className="row justify-content-md-center">
                                <div className="col col-lg-4 col-md-4">
                                    <label>Departure Date</label>
                                   <input type="date" className="form-control" name="depart_date"
                                           placeholder="depart_date"
                                           required/>
                                </div>
                                <div className="col-md-auto align-self-center">
                                    <p className="pt-4"><FontAwesomeIcon icon={faExchangeAlt}/></p>
                                </div>
                                <div className="col col-lg-4 col-md-4">
                                    <label>Return Date</label>
                                   <input disabled={!this.state.trip} type="date" className="form-control"
                                           name="return_date"
                                           placeholder="return_date"
                                    />
                                </div>
                            </div>



                            <div className="row mt-2">
                                <div className="col-8 px-2 offset-2 align-self-center">
                                    <div className="d-grid">
                                        <button className="btn btn-warning" type="submit"><FontAwesomeIcon
                                            icon={faSearch}/> Flight Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}

export default Form