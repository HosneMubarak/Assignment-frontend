import React from "react";
import './flight.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faPlaneDeparture,
    faPlaneArrival,
    faArrowRight,
    faPaperPlane,
    faDotCircle,
    faPollH
} from '@fortawesome/free-solid-svg-icons'

class Flight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sort: '',
        }
    }


    render() {
        function changeBackground(e) {
            e.target.style.background = '#e9ecef';
        }

        function getDateFormat(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear(),
                hour = d.getHours(),
                minute = '' + d.getMinutes();

            if (month.length < 2) month = '0' + month;
            if (day.length < 2) day = '0' + day;
            if (minute.length < 2) minute = '0' + minute;


            var ymd = [day, month, year].join('-')
            return ymd + ' | ' + hour + ':' + minute
            // return hour + ':' + minute

        }

        if (this.props.flight_list && this.props.return_date) {
            if (this.props.flight_list) {
                let flights = this.props.flight_list;
                let count = Object.keys(flights).length
                console.log(flights, 'tas')
                return (
                    <div className='container'>
                        <div className='card mt-2 mb-0' style={{border: "none"}}>
                            <div className='card-body'>
                                <div className="row">
                                    <div className="row">
                                        <div className="col">
                                            <p className="fst-italic"><FontAwesomeIcon
                                                icon={faPollH}/> From {this.props.origin} to {this.props.destination} {count} flight
                                                found:</p>
                                        </div>
                                        <div className="col">
                                            <p className="text-muted text-end">
                                                <select onChange={this.props.getFlightDataSorted}
                                                        className="p-1 text-muted" name="sort">
                                                    <option className="text-muted" value="sort" selected
                                                            disabled>Sort by price
                                                    </option>
                                                    <option value="low">Low to high</option>
                                                    <option value="high">High to low</option>
                                                </select>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            Object.entries(flights)
                                .map(([key, value]) =>
                                    <div className='card flight-div'>
                                        <div className='card-body'>
                                            <div className="row text-muted text-align-center">
                                                <div className="row align-content-center">
                                                    <div className="col align-content-center">
                                                        <p className="text-muted"><FontAwesomeIcon
                                                            icon={faPaperPlane}/> Airline: {value.airline}, Flight
                                                            Number: {value.flight_number} </p>
                                                    </div>
                                                </div>
                                                <div className="row text-center">
                                                    <div className="col">
                                                        <div>
                                                            <h3><FontAwesomeIcon
                                                                icon={faPlaneDeparture}/> {this.props.origin}</h3>
                                                        </div>
                                                    </div>
                                                    <div className="col col-auto">
                                                        <div>
                                                            <h5><FontAwesomeIcon icon={faDotCircle}/>---<FontAwesomeIcon
                                                                icon={faDotCircle}/></h5>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div>
                                                            <h3><FontAwesomeIcon
                                                                icon={faPlaneArrival}/> {this.props.destination}</h3>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div>
                                                            <p className="fw-bold">Departure</p>
                                                            <p className="fw-bold">{getDateFormat(value.departure_at)}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div>
                                                            <p className="fw-bold">Return</p>
                                                            <p className="fw-bold">{getDateFormat(value.return_at)}</p>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div>
                                                            <p className="fw-bold">Price ${value.price}</p>

                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div>
                                                            <button type="button"
                                                                    className="btn btn-warning text-muted">Book
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                        }
                    </div>
                )

            } else if (this.props.flight_list !== null) {
                return (
                    <div className='container'>
                        <div className='card' style={{border: "none"}}>
                            <div className='card-body'>
                                <div className="row text-center">
                                    <div className="row">
                                        <div><p>Flight not found.</p></div>
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

        } else {
            if (this.props.flight_list) {
                let flights = this.props.flight_list;
                let count = Object.keys(flights).length
                console.log(flights, 'tas')
                return (
                    <div className='container'>
                        <div className='card mt-2 mb-0' style={{border: "none"}}>
                            <div className='card-body'>
                                <div className="row">
                                    <div className="row">
                                        <div className="col">
                                            <p className="fst-italic"><FontAwesomeIcon
                                                icon={faPollH}/> From {this.props.origin} to {this.props.destination} {count} flight
                                                found:</p>
                                        </div>
                                        <div className="col">
                                            <p className="text-muted text-end">
                                                <select onChange={this.props.getFlightDataSorted}
                                                        className="p-1 text-muted" name="sort">
                                                    <option className="text-muted" value="sort" selected
                                                            disabled>Sort by price
                                                    </option>
                                                    <option value="low">Low to high</option>
                                                    <option value="high">High to low</option>
                                                </select>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            Object.entries(flights)
                                .map(([key, value]) =>
                                    <div className='card flight-div'>
                                        <div className='card-body'>
                                            <div className="row text-muted text-align-center">
                                                <div className="row align-content-center">
                                                    <div className="col align-content-center">
                                                        <p className="text-muted"><FontAwesomeIcon
                                                            icon={faPaperPlane}/> Airline: {value.airline}, Flight
                                                            Number: {value.flight_number} </p>
                                                    </div>
                                                </div>
                                                <div className="row text-center">
                                                    <div className="col">
                                                        <div>
                                                            <h3><FontAwesomeIcon
                                                                icon={faPlaneDeparture}/> {this.props.origin}</h3>
                                                        </div>
                                                    </div>
                                                    <div className="col col-auto">
                                                        <div>
                                                            <h5><FontAwesomeIcon icon={faDotCircle}/>---<FontAwesomeIcon
                                                                icon={faDotCircle}/></h5>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div>
                                                            <h3><FontAwesomeIcon
                                                                icon={faPlaneArrival}/> {this.props.destination}</h3>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div>
                                                            <p className="fw-bold">Departure</p>
                                                            <p className="fw-bold">{getDateFormat(value.departure_at)}</p>
                                                        </div>
                                                    </div>
                                                    {/*<div className="col">*/}
                                                    {/*    <div>*/}
                                                    {/*        <p className="fw-bold">Return</p>*/}
                                                    {/*        <p className="fw-bold">{getDateFormat(value.return_at)}</p>*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}
                                                    <div className="col">
                                                        <div>
                                                            <p className="fw-bold">Price ${value.price}</p>

                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div>
                                                            <button type="button"
                                                                    className="btn btn-warning text-muted">Book
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)
                        }
                    </div>
                )

            } else if (this.props.flight_list !== null) {
                return (
                    <div className='container'>
                        <div className='card' style={{border: "none"}}>
                            <div className='card-body'>
                                <div className="row text-center">
                                    <div className="row">
                                        <div><p>Flight not found.</p></div>
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

}

export default Flight