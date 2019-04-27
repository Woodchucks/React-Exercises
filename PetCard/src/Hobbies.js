import React, {Component} from 'react'

class Hobbies extends Component {
  render() {
    const hobbies = ["Meawing", "Eating", "Cuddling"];
    const style = {fontSize: '1.5em'};
    return (
      <ul>
        {hobbies.map((h, i) => {
          return <li key={i} style={style}>{h}</li>
        })}
      </ul>
    );
  }
}
export default Hobbies;