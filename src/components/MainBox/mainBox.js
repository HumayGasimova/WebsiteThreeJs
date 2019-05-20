/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * MainBox component definition and export
 */
class MainBox extends Component {

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
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default MainBox;
