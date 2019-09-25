/**
* Libraries
*/

import React,{
    Component
} from 'react';

/**
* Components
*/

/**
* Styles
*/

import './backdrop.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Backdrop component definition and export
*/

class Backdrop extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }

    /**
    * Methods
    */
    
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
