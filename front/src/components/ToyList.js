import React, {Component} from 'react';
import axios from 'axios'
import { Redirect } from 'react-router'

class ToyList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toys: null,
      redirect: false
    }
    this.onAddClick = this.onAddClick.bind(this)
  }

  componentDidMount() {
    let self = this
    axios.get('http://localhost:3033/toy')
    .then(function (response) {
      self.setState({
        toys: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onAddClick() {
    this.setState({
      redirect: true
    })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/add" />;
    } else {
      if (this.state.toys !== null) {
        return (
            <div>
              <ul>
                {
                  this.state.toys.map((toy, index) =>
                      <li key={index}>{toy.name}</li>
                  )
                }
              </ul>
              <button onClick={this.onAddClick}>Ajouter un jouet</button>
            </div>
        )
      } else {
        return (
            <div>
              Aucun jouet disponible pour le moment.
              <br />
              Merci de revenir plus tard.
              <br />
              Cordialement, La Direction.
              <br />
              <button href="/add">Ajouter</button>
            </div>
        )
      }
    }
  }
}

export default ToyList;
