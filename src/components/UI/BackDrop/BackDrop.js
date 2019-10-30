import React from 'react';
import classes from './BackDrop.css';

const backDrop = (props) => {
    return(props.showme ? <div className={classes.Backdrop} onClick={props.clickme}></div> : null);
}

export default backDrop;