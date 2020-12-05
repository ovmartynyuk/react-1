import React, {Component} from 'react';
import {cars} from "./data/cars";
import CarComponent from "./Component/car/CarComponent";

class App extends Component {
    render() {

        return (
            <div>
                {
                    // eslint-disable-next-line react/jsx-no-undef
                    cars.map((car, index) => (<CarComponent item={car} key={index}/>))
                }
            </div>
        );
    }
}

export default App;