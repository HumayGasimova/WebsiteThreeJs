/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Styles
 */

import './toolbar.scss';

/**
 * MainBox component definition and export
 */

class Toolbar extends Component {

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
            <div className="toolbar">
                {this.props.children}
            </div>
        );
    }
}

export default Toolbar;
