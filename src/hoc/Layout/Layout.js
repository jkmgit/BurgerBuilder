//import React from 'react';
import React, {Component} from 'react';
import classes from './Layout.css';
import BurgerBuilder from '../../container/BurgerBuilder/BurgerBuilder';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sideDrawer: false
        }
    }

    changeSideDrawerStateToFalse = () => {
        this.setState({
            sideDrawer: false
        });
    }

    changeSideDrawerStateToTrue = () => {
        this.setState({
            sideDrawer: true
        });
    }

    render() {
        return (
            <div className={classes.Content}>
                <Toolbar changeSDStateTrue={this.changeSideDrawerStateToTrue}/>
                <SideDrawer show={this.state.sideDrawer} changeSDStateFalse={this.changeSideDrawerStateToFalse}/>
                <BurgerBuilder />
            </div>
        )
    }    
    
}


export default Layout;

/*class Layout extends Component {
    constructor(props) {
        super(props);
        this.state={
            showSideDrawer:false
        }
    }

    changeShowSideDrawerState = () => {
        
               this.setState((prevState) => {return {
                   showSideDrawer: !prevState.showSideDrawer
               };});
           }
       
    changeShowSideDrawerStateToFalse = () => {
               this.setState({
                   showSideDrawer: false
               });
    }

    render() {
        return(
            <div className={classes.Content}>
                <Toolbar />
                <SideDrawer showme={this.state.showSideDrawer} backDropClick={this.changeShowSideDrawerStateToFalse} />
                <BurgerBuilder />
            </div>
        )
    }

}

export default Layout;*/





