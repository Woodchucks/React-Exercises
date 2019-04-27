import React, {Component} from 'react';
import './Pet.css'
import Hobbies from './Hobbies';

class Pet extends Component{
    render(){
        return(
            <div className="card">
                <h2 className="name">Chilla</h2>
                <img src="https://github.com/tigarcia/Moxie/raw/master/moxie.png"
                alt="Chilla" />
                <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies: </h5>
                <Hobbies />
            </div>)
    }
}
export default Pet;
