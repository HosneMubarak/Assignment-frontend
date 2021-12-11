import React from 'react';
import Select from 'react-select';
import Constants from './airportdata'

const options = Constants.OPTIONS

class OriginSelect extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedOption: null,
        };

    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption}, () =>
            console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    render() {

        const {selectedOption} = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                placeholder={"tas"}
            />
        );
    }
}

export default OriginSelect
