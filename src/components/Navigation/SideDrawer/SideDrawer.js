import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {

    let sideDrawerClasses=[classes.SideDrawer, classes.Close];
    if(props.show) {
        sideDrawerClasses=[classes.SideDrawer, classes.Open];
    }

    return(
        <div>
            <BackDrop showme={props.show} clickme={props.changeSDStateFalse} />
            <div className={sideDrawerClasses.join(' ')}> 
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </div>
    )
}

export default sideDrawer;