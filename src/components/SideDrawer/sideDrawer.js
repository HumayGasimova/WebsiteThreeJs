/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Styles
 */

import './sideDrawer.scss';

/**
 * SelectPlayer component definition and export
 */
class SideDrawer extends Component {

    render(){
        return(
            <div>
            <div 
                onClick={this.props.sideDrawerHandler}
                className={this.props.sideDrawerOpen === "Yes" ? "sideDrawerOpen" : this.props.sideDrawerOpen === "No" ? "sideDrawerClose" : null}>
            </div>
            </div>
        );
    }
}

export default SideDrawer;
