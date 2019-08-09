/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Styles
 */

import './xo.scss';

/**
 * X component definition and export
 */

class X extends Component {

    /**
    * Markup
    */

    render(){
        return(
            <div 
               className={this.props.className}
                // className={this.props.screen ? "xScreen" : this.props.centerX ? "smallX" : "x"} 
                style={{opacity: this.props.opacity}}
            >
                <div className="diagonalFirst"/>
                <div className="diagonalSecond"/>
            </div>
        );
    }
}

export default X;
