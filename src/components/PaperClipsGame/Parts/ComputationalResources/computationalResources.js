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

import './computationalResources.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Utility
*/

import {
    commaSeparator
} from '../../../../utility/commaSeparator';

/**
* ComputationalResources component definition and export
*/

class ComputationalResources extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }

    /**
    * Methods
    */

    componentDidMount () {
        this.intervalOperations = setInterval(()=>{
            if(this.props.ops < this.props.opsMax){
                this.props.increaseOps()
            }
        }, 700);
    }

    componentWillUnmount = () => {
        clearInterval(this.interval)
        clearInterval(this.intervalCheckButton)
    }

    /**
    * Markup
    */

    render(){
        return(
            <div className="computationalResources">
                <div className="computationalResources-label">Computational Resources</div>
                <div className="computationalResources-line"/>
                <div className="computationalResources-section">
                    <div className="computationalResources-text">Trust: {this.props.trust}</div>
                    <div className="computationalResources-text">+1 Trust at: {commaSeparator(this.props.clipsToBuyTrust)}</div>
                </div>

                <div className="computationalResources-section">
                    <div className="computationalResources-wrapper1">
                        <Button
                            className="computationalResources-button"
                            // onClick={this.props.marketingNextLevel}
                            text={"Processors"}
                            // disabled={this.props.marketingButtonDisabled}
                        />
                        <div className="computationalResources-text">1</div>
                    </div>
                    <div className="computationalResources-wrapper1">
                        <Button
                            className="computationalResources-button"
                            // onClick={this.props.marketingNextLevel}
                            text={"Memory"}
                            // disabled={this.props.marketingButtonDisabled}
                        />
                        <div className="computationalResources-text">1</div>
                    </div>
                </div>

                 <div className="computationalResources-section">
                    <div className="computationalResources-text">Operations: {this.props.ops}/{this.props.opsMax}</div>
                    <div className="computationalResources-text">Creativity: </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            paperClips: state.business.paperClips,
            trust: state.business.trust,
            clipsToBuyTrust: state.business.clipsToBuyTrust,
            ops: state.business.ops,
            opsMax: state.business.opsMax
        };
    },
    (dispatch) => {
        return {
            increaseOps: bindActionCreators(Actions.increaseOps, dispatch),
            // raisePrice: bindActionCreators(Actions.raisePrice, dispatch),
            // marketingNextLevel: bindActionCreators(Actions.marketing, dispatch),
        };
    }
)(ComputationalResources);
