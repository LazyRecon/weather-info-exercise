import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteWeather, refreshWeather } from '../actions/index';



class WeatherList extends Component {
    constructor(props){
        super(props);
        this.onClickItem = this.onClickItem.bind(this);
    }

    onClickItem(event){
        let action = event.target.dataset.action;
        switch (action){

            case 'delete':{
                this.props.deleteWeather(event.target.dataset.index);
            }break;
            case 'refresh':{
                this.props.refreshWeather(event.target.dataset.id , event.target.dataset.index)
            }break;
        }

    }

    renderWeather(item,index){
        console.log(item);
        return(
            <li className="list-group-item justify-content-between" key={index}><span>{item.name} : {item.weather[0].main}</span> <span><span data-action="refresh" data-id={item.id} data-index={index} className="badge badge-success badge-pill">refresh</span> <span data-action="delete"  data-index={index} className="badge badge-danger badge-pill"> delete </span></span></li>
        )
    }
    render() {
        return (
            <ul className="list-group" onClick={this.onClickItem}>
                {this.props.weather.map(this.renderWeather)}
            </ul>
        );
    }
}


function mapStateToProps({weather}) {
    return { weather };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( { deleteWeather, refreshWeather } , dispatch )
}

export default connect( mapStateToProps, mapDispatchToProps)(WeatherList);