import React, {Component} from 'react';
import  './Car.css';

class CarComponent extends Component {
    render() {
        let {item} = this.props;
        return (
            <div> {item.model} - {item.color} - {item.power}</div>
        );
    }
}

export default CarComponent;