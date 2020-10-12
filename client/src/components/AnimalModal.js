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
import { addAnimal } from '../actions/animalActions';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

class AnimalModal extends Component {
  state = {
    modal: false,
    name: '',
    description: '',
    species: '',
    breed: '',
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

    const newAnimal = {
      id: uuidv4(),
      name,
      description,
      species,
      breed
    };

    this.props.addAnimal(newAnimal);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button color="dark" onClick={ this.toggle } >Add Animal</Button>

        <Modal
          isOpen={ this.state.modal }
          toggle={ this.toggle }
        >
          <ModalHeader toggle={ this.toggle }>Add Animal</ModalHeader>
          <ModalBody>
            <Form onSubmit={ this.onSubmit }>
              <FormGroup>
                <Label for="name">Name *</Label>
                <Input type="text" name="name" id="name" onChange={ this.onInputChange } />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description *</Label>
                <Input type="textarea" name="text" id="description" onChange={ this.onInputChange } />
              </FormGroup>
              <FormGroup>
                <Label for="species">Species *</Label>
                <Input type="text" name="species" id="species" onChange={ this.onInputChange } />
              </FormGroup>
              <FormGroup>
                <Label for="breed">Breed</Label>
                <Input type="text" name="breed" id="breed" onChange={ this.onInputChange } />
              </FormGroup>
              <Button color="dark" block>Add Animal</Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

AnimalModal.propTypes = {
  addAnimal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  animal: state.animal,
});


export default connect(mapStateToProps, { addAnimal })(AnimalModal);
