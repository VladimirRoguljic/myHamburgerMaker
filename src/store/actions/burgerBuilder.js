import * as actionTypes from './actionsTypes';
import axios from '../../axios-order';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDINET,
        ingredientName: name
    }

};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

export const setIngridents = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
};

export const fetchIngredientsFailed = () =>  {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
};

export const initiIgnredients = () => {
    return dispatch => {
        axios.get('https://react-my-burger-2fbba.firebaseio.com/ingredients.json')
            .then(response => {
                 dispatch(setIngridents(response.data));
            })
            .catch(err => {
             dispatch(fetchIngredientsFailed())
        })
    };
};