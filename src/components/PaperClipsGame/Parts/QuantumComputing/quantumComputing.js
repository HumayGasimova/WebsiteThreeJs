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

import Button from '../../../../library/Button/button';

/**
* Styles
*/

import './quantumComputing.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* QuantumComputing component definition and export
*/

class QuantumComputing extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state={
            show: false
        }
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="quantumComputing">
                <div className="quantumComputing-label">Quantum Computing</div>
                <div className="quantumComputing-chip"/>
                <div className="quantumComputing-wrapper1">
                    <Button
                        className="quantumComputing-button"
                        onClick={() => this.props.showQuantCompMessage()}
                        text={"Compute"}
                        // disabled={this.props.marketingButtonDisabled}
                    />
                    {this.props.showQCompMessage ? <div className='quantumComputing-text-with-effect'>Need Photonic Chips</div> : null}
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            showQCompMessage: state.business.showQCompMessage,
            // trust: state.business.trust,

        };
    },
    (dispatch) => {
        return {
            showQuantCompMessage: bindActionCreators(Actions.showQuantCompMessage, dispatch),
            // increaseProcessors: bindActionCreators(Actions.increaseProcessors, dispatch),
            // increaseProcessorsMemory: bindActionCreators(Actions.increaseProcessorsMemory, dispatch),

        };
    }
)(QuantumComputing);
