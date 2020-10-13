import { GET_ANIMALS, ADD_ANIMAL, DELETE_ANIMAL, ANIMALS_LOADING, EDIT_ANIMAL } from './types';
import axios from 'axios';

export const getAnimals = () => dispatch => {
  dispatch(setAnimalsLoading());
  axios.get('/api/animals')
    .then(res => dispatch({
      type: GET_ANIMALS,
      payload: res.data
    }));
};

export const addAnimal = animal => dispatch => {
  axios.post('/api/animals', animal)
    .then(res => dispatch({
      type: ADD_ANIMAL,
      payload: res.data
    }));
};

export const editAnimal = animal => dispatch => {
  axios.put(`/api/animals/${animal._id}`, animal)
    .then(res => dispatch({
      type: EDIT_ANIMAL,
      payload: res.data
    }));
};

export const deleteAnimal = id => dispatch => {
  axios.delete(`/api/animals/${id}`)
    .then(res => dispatch({
      type: DELETE_ANIMAL,
      payload: res.data._id
    }));
};

export const setAnimalsLoading = () => {
  return {
    type: ANIMALS_LOADING,
  };
};
