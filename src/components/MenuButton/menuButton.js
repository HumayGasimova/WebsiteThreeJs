/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Styles
 */

import './menuButton.scss';

/**
 * SelectPlayer component definition and export
 */
class MenuButton extends Component {


    render(){
        return(
            <div 
                onClick={this.props.menuButtonHandler}
                className="menuButton"
                >
                   <div className="menuLine"/>
                   <div className="menuEmptyLine"/>
                   <div className="menuLine"/>
                   <div className="menuEmptyLine"/>
                   <div className="menuLine"/>
            </div>
        );
    }
}

export default MenuButton;
