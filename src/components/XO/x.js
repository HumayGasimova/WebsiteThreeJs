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
            <div className={this.props.screen ? "xScreen" : "x"}>
                <div className="diagonalFirst"/>
                <div className="diagonalSecond"/>
            </div>
        );
    }
}

export default X;
