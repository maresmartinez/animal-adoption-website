import {
  GET_ANIMALS,
  ADD_ANIMAL,
  EDIT_ANIMAL,
  DELETE_ANIMAL,
  ANIMALS_LOADING
} from '../actions/types';

const initialState = {
  animals: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ANIMALS:
      return {
        ...state,
        animals: action.payload,
        loading: false,
      };
    case ADD_ANIMAL:
      return {
        ...state,
        animals: [...state.animals, action.payload]
      };
    case DELETE_ANIMAL:
      return {
        ...state,
        animals: state.animals.filter(animal => animal._id !== action.payload)
      };
    case EDIT_ANIMAL:
      return {
        ...state,
        animals: [...state.animals.filter(animal => animal._id !== action.payload._id), action.payload]
      };
    case ANIMALS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}