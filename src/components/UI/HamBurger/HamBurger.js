import React from 'react';
import classes from './HamBurger.css';


const hamBurger = (props) => {
    return (<div className={classes.HamBurger} onClick={props.clickme}>
        <div></div>
        <div></div>
        <div></div>
    </div>);
}

export default hamBurger;
