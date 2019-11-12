/**
* Libraries
*/

import React,{
    Component
} from 'react';

/**
* Styles
*/

import './backdrop.scss';

/**
* Backdrop component definition and export
*/

export class Backdrop extends Component {

    /**
    * Markup
    */

    render(){
        return(
            <div
                onClick={this.props.closeDropdowns} 
                className="backdrop"
            />
        );
    }
}

export default Backdrop;
