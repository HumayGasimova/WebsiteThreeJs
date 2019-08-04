/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

import NavigationItems from '../NavigationItems/navigationItems';

/**
 * Styles
 */


import './sideDrawer.scss';

/**
 * SideDrawer component definition and export
 */

class SideDrawer extends Component {

    render(){
        return(
            <div 
                onClick={this.props.sideDrawerHandler}
                className={this.props.sideDrawerOpen === "Yes" ? "sideDrawerOpen" : null}>
                    {/* <NavigationItems/> */}
            </div>
        );
    }
}

export default SideDrawer;
