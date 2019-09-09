/**
* Libraries
*/

import React,{
    Component
} from 'react';


/**
* Components
*/

import ComputationalResources from '../../Parts/ComputationalResources/computationalResources';

/**
* Styles
*/

import './section2.scss';

/**
* Section2 component definition and export
*/

class Section2 extends Component {

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
            <div className="section2">
                <ComputationalResources/>
                {/* <Projects/> */}
            </div>
        );
    }
}

export default Section2;
