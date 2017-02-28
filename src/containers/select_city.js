import React, {Component} from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SelectCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({selected: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        let that = this;
        let selectedCity = _.find(that.props.cities, (item) => {
            return item._id == that.state.selected
        });

        this.props.fetchWeather(selectedCity);
        //this.setState({selected : ''});
    }

    render() {
        return (
            <div className="row my-3 py-3">
                <form onSubmit={this.handleSubmit} className="form-inline">

                    <div className="mb-2 mr-sm-2 mb-sm-0 col">
                        <select value={this.state.value} className="form-control" onChange={this.handleChange}>
                            <option>Seleziona una città</option>
                            {this.props.cities.map(function (v) {
                                return <option key={v._id} value={v._id}>{v.name}</option>
                            })}
                        </select>
                    </div>

                    <button type="submit" className="btn btn-primary">Invia</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cities : state.cities
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { fetchWeather } , dispatch)
}

export default connect(mapStateToProps , mapDispatchToProps )(SelectCity);