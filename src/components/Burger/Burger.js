import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let transformIngredients = Object.keys(props.ingredients)
        .map(iKey => {
            return [...Array(props.ingredients[iKey])]
                .map((_, i) => {
               return <BurgerIngredient key={iKey + i} type={iKey} />
            });
        }).reduce((arr, el) => {
             return arr.concat(el)
        }, []);

    if(transformIngredients.length === 0) {
        transformIngredients = <p>Please start adding ingredients </p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;