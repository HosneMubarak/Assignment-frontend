import React, {Component} from "react";
import AsyncSelect from "react-select/async";


class OriginCitySelect extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedOption: {},
        };
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
            console.log(selectedOption, 'selectedOption')
        }
    };


    render() {
        return (

            <div>
                <div>
                    <label>Select City</label>
                    <AsyncSelect
                        placeholder="search"
                        value={this.state.selectedOption}
                        loadOptions={this.fetchData}
                        onChange={(e) => {
                            this.onSearchChange(e);
                        }}
                        defaultOptions={true}
                    />
                </div>
            </div>
        );
    }
}

export default OriginCitySelect;