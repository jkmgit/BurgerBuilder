import React from 'react';
import BuildControl from '../BuildControl/BuildControl';
import classes from './BurgerController.css';

const burgerController = (props) => {
    const allControls = ['salad', 'bacon', 'cheese', 'meat'];

    const allControllerComps = [];

    for(let i=0; i < allControls.length; i++) {
        allControllerComps.push(<BuildControl ingrLabel={allControls[i]} 
                                              key={allControls[i]} 
                                              changeIngrPositive={props.changeIngrPositive} 
                                              changeIngrNegative={props.changeIngrNegative} 
                                              disableLess={props.disableLess[allControls[i]]}    
                                              />);
    }

    return(
        <div className={classes.BurgerController}>
            <p>Current Price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
            {allControllerComps}
            <button className={classes.OrderButton} 
                    disabled={!(props.totalPrice.toFixed(2)>4)} 
                    onClick={props.changeOrderStatus} >ORDER NOW</button>
        </div>    
    );
}

export default burgerController;



