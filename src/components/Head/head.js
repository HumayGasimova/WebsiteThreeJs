/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Styles
 */

import './head.scss';

/**
 * MainBox component definition and export
 */

class Head extends Component {

    /**
    * Constructor
    */

    constructor (){
        super();
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="head">
                {this.props.children}
            </div>
        );
    }
}

export default Head;
