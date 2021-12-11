import React from "react";
import Weather from "./weather.component";
import { faPlane } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        {
            return (
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <FontAwesomeIcon className="mx-3" icon={faPlane}/>
                                Flight Assignment
                        </a>
                    </div>
                </nav>
            )

        }
    }
}

export default Header






