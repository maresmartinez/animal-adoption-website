import { GET_ANIMALS, ADD_ANIMAL, DELETE_ANIMAL } from '../actions/types';

const initialState = {
  animals: [
    {
      id: '1',
      name: 'Doggo',
      description: 'Good boy',
      species: 'Dog',
      breed: 'Pug'
    },
    {
      id: '2',
      name: 'Catto',
      description: 'Evil cat, but nice',
      species: 'Cat'
    }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ANIMALS:
      return {
        ...state
      };
    case DELETE_ANIMAL:
      return {
        ...state,
        animals: state.animals.filter(animal => animal.id !== action.payload)
      };
    case ADD_ANIMAL:
      return {
        ...state,
        animals: [...state.animals, action.payload]
      };
    default:
      return state;
  }
}