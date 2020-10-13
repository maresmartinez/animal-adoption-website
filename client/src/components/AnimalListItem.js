import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteAnimal } from '../actions/animalActions';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardImg,
} from 'reactstrap';
import AnimalModal from '../components/AnimalModal';

class AnimalListItem extends Component {

  onDeleteClick = id => {
    this.props.deleteAnimal(id);
  };

  render() {
    const { _id, name, description, species, breed, imageURL, contactEmail } = this.props.animal;
    return (
      <Card body className="my-3 p-0">
        <CardHeader>{ name }</CardHeader>
        {imageURL && <CardImg top width="20%" src={ imageURL } alt="Card image cap" /> }
        <CardBody>
          <CardText><strong>Species:</strong> { species }</CardText>
          { breed && <CardText><strong>Breed:</strong> { breed }</CardText> }
          <CardText>{ description }</CardText>
          <CardText>Please lease contact <strong>{ contactEmail }</strong> to learn more about { name }.</CardText>
          <Button color="danger" size="sm" className="mr-2" onClick={ this.onDeleteClick.bind(this, _id) }>Delete</Button>
          <AnimalModal animal={ this.props.animal } buttonProps={ { color: 'primary', size: 'sm' } } />
        </CardBody>
      </Card>
    );
  }
}

AnimalListItem.propTypes = {
  deleteAnimal: PropTypes.func.isRequired,
  animal: PropTypes.object.isRequired
};

export default connect(null, { deleteAnimal })(AnimalListItem);