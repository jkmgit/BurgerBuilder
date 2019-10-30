import React from 'react';
import classes from './Modal.css';
import Backdrop from '../BackDrop/BackDrop';

const modal = (props) => {
    return(
    <div>    
        <Backdrop showme={props.show} clickme={props.changeOrderStatus}/>    
        <div className={classes.Modal} style = {{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'}}>
            {props.children}
        </div>
    </div>    );
}

export default modal;