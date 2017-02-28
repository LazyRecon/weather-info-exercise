import React from 'react';
import { Component } from 'react'

import SelectCity from '../containers/select_city';
import WeatherList from '../containers/list_weather';

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-md-12 text-xs-center">
                        <h1 className="mx-a my-3 py-3">Wheater App</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12 ">
                        <SelectCity/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <WeatherList />
                    </div>
                </div>
            </div>
        );
    }
}
