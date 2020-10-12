import { GET_ANIMALS, ADD_ANIMAL, DELETE_ANIMAL } from './types';

export const getAnimals = () => {
  return {
    type: GET_ANIMALS,
  };
};

export const deleteAnimal = id => {
  return {
    type: DELETE_ANIMAL,
    payload: id,
  };
};

export const addAnimal = animal => {
  return {
    type: ADD_ANIMAL,
    payload: animal,
  };
};
