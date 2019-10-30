import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamBurger from '../../UI/HamBurger/HamBurger';


const toolbar = (props) => {
    return(<div className={classes.Toolbar}>
        <HamBurger clickme={props.changeSDStateTrue}/>
        <Logo/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </div>);
}

export default toolbar;