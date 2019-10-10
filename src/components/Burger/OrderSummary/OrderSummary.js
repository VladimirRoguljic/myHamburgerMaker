import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(iKey => {
            return (
                <li key={iKey}>
                <span style={{textTransform: 'capitalize'}}>
                    {iKey}</span>: {props.ingredients[iKey]}
                </li> );
        });
    return (
        <Auxiliary>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout ?</p>
        </Auxiliary>
    );
};
export default orderSummary;