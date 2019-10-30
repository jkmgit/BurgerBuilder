import React from 'react';
import classes from './BuildControl.css'


const buildControl = (props) => {
    return( <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.ingrLabel}</div>
        {/*<button className={classes.More} onClick={ props.changeIngrPositive.bind(this, props.ingrLabel)}>More</button>*/}

        <button className={classes.More} onClick={ () => { props.changeIngrPositive(props.ingrLabel)}}>More</button>
        <button disabled={props.disableLess} className={classes.Less} onClick={ () => { props.changeIngrNegative(props.ingrLabel)}}>Less</button>
    </div>);
}

export default buildControl;