/**
* Libraries
*/

import React,{
    Component
} from 'react';


/**
* Components
*/

import General from '../../Parts/General/general';
import Business from '../../Parts/Business/business';
import Manufacturing from '../../Parts/Manufacturing/manufacturing';

/**
* Styles
*/

import './section1.scss';

/**
* Section1 component definition and export
*/

class Section1 extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="section1">
               <General/>
               <Business/>
               <Manufacturing/>
            </div>
        );
    }
}

export default Section1;
