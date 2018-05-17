import React, {Component} from 'react';
import {Field, Label, Control, Input, Button, Notification } from 'bloomer'
import { Redirect } from 'react-router'
import axios from 'axios/index';

class AddToy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
      cancel: false,
      error: false,
      name: '',
      desc: '',
      image: ''
    }

    this.onCancelClick = this.onCancelClick.bind(this)
    this.onValidateClick = this.onValidateClick.bind(this)
    this.onNameChanged = this.onNameChanged.bind(this)
    this.onImageChanged = this.onImageChanged.bind(this)
    this.onDescChanged = this.onDescChanged.bind(this)
  }

  onCancelClick() {
    this.setState({
      cancel: true
    })
  }

  onValidateClick() {
    let self = this
    if (this.state.name.trim().length <= 0) {
      this.setState({
        error: true
      })
      return
    }
    axios.post('http://localhost:3033/toy', {
      name: this.state.name,
      description: this.state.desc,
      image: this.state.image
    })
    .then(function (response) {
      self.setState({
        success: true
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onNameChanged(event) {
    this.setState({
      name: event.target.value,
      error: false
    })
  }

  onImageChanged(event) {
    this.setState({
      image: event.target.value
    })
  }

  onDescChanged(event) {
    this.setState({
      desc: event.target.value
    })
  }

  render() {
    if (this.state.cancel || this.state.success) {
      return (
          <Redirect push to="/" />
      )
    }
    return (
        <div>
          {
            this.state.error &&
                <Notification isColor='danger'>
                  Champs Name obligatoire
                </Notification>
          }
          <Field>
            <Label>Name</Label>
            <Control>
              <Input type="text" placeholder='Name' onChange={this.onNameChanged}/>
            </Control>
          </Field>
          <Field>
            <Label>Image</Label>
            <Control>
              <Input type="text" placeholder='Image Link' onChange={this.onImageChanged} />
            </Control>
          </Field>
          <Field>
            <Label>Description</Label>
            <Control>
              <Input type="text" placeholder='Description' onChange={this.onDescChanged} />
            </Control>
          </Field>

          <Button isColor='danger' onClick={this.onCancelClick}>Annuler</Button>
          <Button isColor='primary' onClick={this.onValidateClick}>Ajouter</Button>
        </div>
    );
  }
}

export default AddToy;
