import React from "react";


class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        {
            if (this.props.flight_list) {
                return (
                    <div className="bg-dark text-center text-light text-lg-start mt-4">
                        <div className="text-center p-3">
                            © 2022 Copyright:
                            <a className="text-light" href=""> www.flightassignment.com</a>
                        </div>
                    </div>
                )

            } else {
                return (
                    <div className="bg-dark text-center text-light text-lg-start" style={{marginTop: "270px"}}>
                        <div className="text-center p-3">
                            © 2022 Copyright:
                            <a className="text-light" href=""> www.flightassignment.com </a>
                        </div>
                    </div>
                )

            }
        }
    }
}

export default Footer






