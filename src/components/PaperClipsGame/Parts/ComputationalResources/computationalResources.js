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
        this.state = {
            delayOperations: 1000
        }
    }

    /**
    * Methods
    */

    componentDidMount () {
        this.intervalOperations = setInterval(()=>{
            if(this.props.ops < this.props.opsMax){
                this.props.increaseOps()
            }
        }, this.state.delayOperations);

        this.intervalStartCreativity = setInterval(()=>{
            if(this.props.ops === this.props.opsMax){
                
                this.props.startCreativityCounter();
            }
        }, 1000);

        this.intervalCreativity = setInterval(()=>{
            if(this.props.ops === this.props.opsMax && this.props.creativityTurnOn){
                this.props.increaseCreativity()
            }
        }, 300);

        // this.props.throwProject();
    }

    increaseProcessors = () => { 
        this.props.increaseProcessors();
        this.setState({
            delayOperations: this.state.delayOperations - 100
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.delayOperations !== this.state.delayOperations) {
            clearInterval(this.intervalOperations);
            this.intervalOperations = setInterval(()=>{
                if(this.props.ops < this.props.opsMax){
                    this.props.increaseOps()
                }
            }, this.state.delayOperations);
        }
        if(this.props.creativity === 50){
            this.props.addLexicalProcessing();
        }
        if(this.props.creativity === 100){
            this.props.addCombinatoryHarmonics();
        }
        if(this.props.creativity === 100){
            this.props.addCombinatoryHarmonics();
        }
        if(this.props.creativity === 150){
            this.props.addTheHadwingerProblem();
        }
        if(this.props.creativity === 200){
            this.props.addTheTothSausageConjecture();
        }
        if(this.props.creativity === 250){
            this.props.addDonkeySpace();
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.intervalOperations);
        clearInterval(this.intervalStartCreativity);
        clearInterval(this.intervalCreativity);
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
                            onClick={this.increaseProcessors}
                            text={"Processors"}
                            // disabled={this.props.marketingButtonDisabled}
                        />
                        <div className="computationalResources-text">{this.props.processorsNumber}</div>
                    </div>
                    <div className="computationalResources-wrapper1">
                        <Button
                            className="computationalResources-button"
                            onClick={this.props.increaseProcessorsMemory}
                            text={"Memory"}
                            // disabled={this.props.marketingButtonDisabled}
                        />
                        <div className="computationalResources-text">{this.props.processorsMemory}</div>
                    </div>
                </div>

                 <div className="computationalResources-section">
                    <div className="computationalResources-text">Operations: {this.props.ops}/{this.props.opsMax}</div>
                    <div className="computationalResources-text">Creativity: {this.props.creativity}</div>
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
            opsMax: state.business.opsMax,
            processorsNumber: state.business.processorsNumber,
            processorsMemory: state.business.processorsMemory,
            creativity: state.business.creativity,
            creativityTurnOn: state.business.creativityTurnOn
        };
    },
    (dispatch) => {
        return {
            increaseOps: bindActionCreators(Actions.increaseOps, dispatch),
            increaseProcessors: bindActionCreators(Actions.increaseProcessors, dispatch),
            increaseProcessorsMemory: bindActionCreators(Actions.increaseProcessorsMemory, dispatch),
            increaseCreativity: bindActionCreators(Actions.increaseCreativity, dispatch),
            startCreativityCounter: bindActionCreators(Actions.startCreativityCounter, dispatch),
            addLexicalProcessing: bindActionCreators(Actions.addLexicalProcessing, dispatch),
            addCombinatoryHarmonics: bindActionCreators(Actions.addCombinatoryHarmonics, dispatch),
            addTheHadwingerProblem: bindActionCreators(Actions.addTheHadwingerProblem, dispatch),
            addTheTothSausageConjecture: bindActionCreators(Actions.addTheTothSausageConjecture, dispatch),
            addDonkeySpace: bindActionCreators(Actions.addDonkeySpace, dispatch),
            throwProject: bindActionCreators(Actions.throwProject, dispatch),
        };
    }
)(ComputationalResources);
