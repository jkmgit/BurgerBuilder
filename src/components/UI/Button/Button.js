import React from 'react';
import classes from './Button.css'; 

const button = (props) => {
    return(<button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.clickme}>{props.children}</button>);
}

export default button;

