/**
 * Libraries
 */

import React,{
    Component
} from 'react';


/**
 * Styles
 */

import './page5.scss';

/**
 * Actions
 */

/**
 * WelcomePage component definition and export
 */

class Page5 extends Component {

    /**
    * Constructor
    */

   constructor(props) {
        super(props);
        this.state = {
        showImageButtons: true
        }
    }

    /**
    * Markup
    */

    render(){
        return(
            <div className="page5">
               <div className="border1">
                    <div className="border2">
                        <div className="border3">
                           <div className="page5-text"> © 2019 TicTacToe. All Rights Reserved.</div>
                        </div>
                    </div>
               </div>
            </div>
        );
    }
}

export default Page5;
