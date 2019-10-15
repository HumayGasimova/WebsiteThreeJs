/**
* Libraries
*/

import React,{
    Component
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';


/**
* Components
*/

import Button from '../../../../../library/Button/button';

/**
* Styles
*/

import './megaClippers.scss';

/**
* Actions
*/

import * as Actions from '../../../../../actions';

/**
* MegaClippers component definition and export
*/

export class MegaClippers extends Component {

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
    * Methods
    */

    /**
    * Markup
    */

    render(){
        return(
            <div className="megaClippers-section">
                <div className="megaClippers-wrapper2">
                    <Button
                        // onClick={()=>this.props.autoPaperclips()}
                        text={"MegaClippers"}
                        disabled={this.props.autoClippersButtonDisabled}
                
                    />
                    <div className="megaClippers-text">{this.props.autoClippersPerSec}</div>
                </div>
                <div className="megaClippers-text">Cost: ${this.props.autoClippersPerSec === 0 ? this.props.autoClipperInitPrice : this.props.autoClipperPrice}</div>
            </div> 
        );
    }
}

export default connect(
    (state) => {
        return {
            autoClippersButtonDisabled: state.business.autoClippersButtonDisabled,
            autoClippersPerSec: state.business.autoClippersPerSec,
            autoClipperInitPrice: state.business.autoClipperInitPrice,
            autoClipperPrice: state.business.autoClipperPrice
        };
    },
    (dispatch) => {
        return {
            autoPaperclips: bindActionCreators(Actions.autoPaperclips, dispatch),
        };
    }
)(MegaClippers);
