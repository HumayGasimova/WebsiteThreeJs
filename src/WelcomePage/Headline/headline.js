/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Styles
 */

import './headline.scss';

/**
 * WelcomePage component definition and export
 */

class WelcomePage extends Component {

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
            <div className="headline">
               Tic Tac Toe
            </div>
        );
    }
}

export default WelcomePage;
