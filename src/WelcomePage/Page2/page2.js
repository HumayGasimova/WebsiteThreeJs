/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */
import Button from '../Button/button';

/**
 * Styles
 */

import './page2.scss';

/**
 * WelcomePage component definition and export
 */

class Page2 extends Component {

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
            <div className="">
                <Button/>
                <Button/>
            </div>
        );
    }
}

export default Page2;
