/**
* Libraries
*/

import React,{
    Component
} from 'react';

/**
* Styles
*/

import './revTracker.scss';

/**
* RevTracker component definition and export
*/

export class RevTracker extends Component {

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
            <div>
                <div className="revTracker-text">Avg. Rev. per sec: $ {this.props.avgRevPerSec}</div>
                <div className="revTracker-text">Avg. Clips Sold per sec: {this.props.avgClipsSoldPerSec} </div>
            </div>
        );
    }
}

export default RevTracker;
