/**
* Libraries
*/

import React,{
    Component
} from 'react';

/**
* Styles
*/

import './hover.scss';

/**
* Card component definition and export
*/

export class Hover extends Component {
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="hoverComponent">
                {this.props.children}
            </div>
        );
    }
}

export default Hover;
