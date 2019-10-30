import React, {Component} from 'react';
import classes from './BurgerIngredients.css';
import PropTypes from 'prop-types';


class BurgerIngredients extends Component {

    constructor(props) {
        super(props);
        this.type = props.type;
    }

    render() {

        let typeOfIngredient = null;

        switch(this.type) {
            case 'bread-top' : 
                typeOfIngredient = <div className = {classes.BreadTop} ></div>;
                break;
            case 'bread-bottom' :
                typeOfIngredient = <div className = {classes.BreadBottom} ></div>;
                break;
            case 'meat' :
                typeOfIngredient = <div className = {classes.Meat} ></div>;
                break; 
            case 'salad' :
                typeOfIngredient = <div className = {classes.Salad} ></div>;
                break;   
            case 'bacon' :
                typeOfIngredient = <div className = {classes.Bacon} ></div>;
                break;
            case 'cheese' :
                typeOfIngredient = <div className = {classes.Cheese} ></div>;
                break; 
            default :
                typeOfIngredient = null;                     
        }
        return typeOfIngredient;
    }
}

BurgerIngredients.propTypes = {
    type : PropTypes.string.isRequired
}

export default BurgerIngredients;

