import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.css';

const burger = (props) => {
    
    /*const ingredientsOfBurger= Object.keys(props.ingredients).map (
        
        (ingrType) => {
            return([...Array(props.ingredients[ingrType])]
                        .map((gh, ind)=>{ return (<BurgerIngredient type={ingrType} key={ingrType+ind}/>)}));
        }
    
    );*/

    let ingredientsOfBurger = [];
    const allIngrs = Object.keys(props.ingredients);
    for (let i = 0; i < allIngrs.length; i++ ) {
        for(let j=0; j < props.ingredients[allIngrs[i]]; j++) {
            ingredientsOfBurger.push(<BurgerIngredient type={allIngrs[i]} key={allIngrs[i]+j}/>) 
        }
    }

    if (ingredientsOfBurger.length===0) {
        ingredientsOfBurger=<p>Please start adding ingredients...</p>;
    }

    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {ingredientsOfBurger}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default burger;