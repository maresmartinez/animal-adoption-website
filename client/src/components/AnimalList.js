import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnimals, deleteAnimal } from '../actions/animalActions';
import PropTypes from 'prop-types';
import AnimalListItem from '../components/AnimalListItem';
import { Row, Col } from 'reactstrap';

class AnimalList extends Component {

  componentDidMount() {
    this.props.getAnimals();
  }

  render() {
    const { animals } = this.props.animal;

    return (
      <Row>
        { animals.map((animal) => (
          <Col md="6" key={ animal._id } className="my-3">
            <AnimalListItem animal={ animal } />
          </Col>
        )) }
      </Row>
    );
  };
};

AnimalList.propTypes = {
  getAnimals: PropTypes.func.isRequired,
  deleteAnimal: PropTypes.func.isRequired,
  animal: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  animal: state.animal
});

export default connect(mapStateToProps, { getAnimals, deleteAnimal })(AnimalList);