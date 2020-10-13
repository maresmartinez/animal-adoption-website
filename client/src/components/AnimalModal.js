import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addAnimal, editAnimal } from '../actions/animalActions';
import PropTypes from 'prop-types';

class AnimalModal extends Component {



  state = {
    modal: false,
    name: this.props.animal ? this.props.animal.name : '',
    description: this.props.animal ? this.props.animal.description : '',
    species: this.props.animal ? this.props.animal.species : '',
    breed: this.props.animal ? this.props.animal.breed : '',
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { name, description, species, breed } = this.state;

    const newAnimalProps = {
      name,
      description,
      species,
      breed
    };

    if (this.props.animal) {
      newAnimalProps._id = this.props.animal._id;
      this.props.editAnimal(newAnimalProps);

    } else {
      this.props.addAnimal(newAnimalProps);
    }
    this.toggle();
  };

  modalDescription = () => `${this.props.animal ? 'Edit' : 'Add'} Animal`;

  render() {
    return (
      <>
        <Button onClick={ this.toggle } { ...this.props.buttonProps } >{ this.modalDescription() }</Button>

        <Modal
          isOpen={ this.state.modal }
          toggle={ this.toggle }
        >
          <ModalHeader toggle={ this.toggle }>{ this.modalDescription() }</ModalHeader>
          <ModalBody>
            <Form onSubmit={ this.onSubmit }>
              <FormGroup>
                <Label for="name">Name *</Label>
                <Input type="text" name="name" id="name" onChange={ this.onInputChange } value={ this.state.name } />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description *</Label>
                <Input type="textarea" name="description" id="description" onChange={ this.onInputChange } value={ this.state.description } />
              </FormGroup>
              <FormGroup>
                <Label for="species">Species *</Label>
                <Input type="text" name="species" id="species" onChange={ this.onInputChange } value={ this.state.species } />
              </FormGroup>
              <FormGroup>
                <Label for="breed">Breed</Label>
                <Input type="text" name="breed" id="breed" onChange={ this.onInputChange } value={ this.state.breed } />
              </FormGroup>
              <Button color="dark" block>{ this.props.animal ? 'Save Changes' : 'Add Animal' }</Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

AnimalModal.propTypes = {
  addAnimal: PropTypes.func,
  editAnimal: PropTypes.func,
  animal: PropTypes.object,
  buttonProps: PropTypes.object
};

export default connect(null, { addAnimal, editAnimal })(AnimalModal);
