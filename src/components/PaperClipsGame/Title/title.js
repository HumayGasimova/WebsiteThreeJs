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

import './title.scss';

/**
* Images
*/

import universalPaperclips from '../../../images/mobile-title.png';
import linkImages from '../../../images/Images.png';

/**
* Title component definition and export
*/

class Title extends Component {

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
            <div className="title">
               <img className="title-img-1" src={universalPaperclips}/>
               <div className="title-text">
                   <div>The web version of this game was</div>
                   <div>not designed to work on phones.</div>
                   <div>Grab the mobile version below.</div>
               </div>
               <img className="title-img-2" src={linkImages}/>
            </div>
        );
    }
}

export default Title;
