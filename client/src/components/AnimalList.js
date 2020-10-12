import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAnimals, deleteAnimal } from '../actions/animalActions';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

class AnimalList extends Component {

  componentDidMount() {
    this.props.getAnimals();
  }

  onDeleteClick = id => {
    this.props.deleteAnimal(id);
  };

  render() {
    const { animals } = this.props.animal;

    return (
      <ul>
        {animals.map(({ id, name }) => (
          <>
            <li>
              { id }: { name }
              <Button color="danger" onClick={ this.onDeleteClick.bind(this, id) }>X</Button>
            </li>
          </>
        )) }
      </ul>
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