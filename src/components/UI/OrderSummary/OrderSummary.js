import React from 'react';
import Button from '../Button/Button';

const orderSummary = (props) => {

    let ingredientsOfBurger = [];
    const allIngrs = Object.keys(props.listOfIngredient);

    for (let i = 0; i < allIngrs.length; i++ ) {
        ingredientsOfBurger.push(<li key={allIngrs[i]}>{allIngrs[i]} : {props.listOfIngredient[allIngrs[i]]}</li>); 
    }

    return(<div>
        <h3>Order Summary:</h3>
        <p>Below is the list of items in your Burger:</p>
        <ul>
            {ingredientsOfBurger}
        </ul>
        <p>Total Price: <strong>{props.totalOrderPrice.toFixed(2)}</strong></p>
        <p>Do you want to checkout:</p>
        <Button btnType={'Success'} clickme={props.checkout}>Check out</Button>
        <Button btnType={'Danger'} clickme={props.changeOrderStatus}>Cancel</Button>
    </div>);
}

export default orderSummary;