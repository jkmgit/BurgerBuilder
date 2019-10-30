import React from 'react';
import classes from './Logo.css';
import LogoImage from '../../assets/images/burger-logo.png';


const logo = () => {
    return(<div className={classes.Logo}>
        <img src={LogoImage} alt={''}/>
    </div>);
}

export default logo;