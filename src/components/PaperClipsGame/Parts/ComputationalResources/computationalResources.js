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
import QuantumComputing from '../../Parts/QuantumComputing/quantumComputing';
/**
* Styles
*/

import './computationalResources.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';

/**
* Utility
*/

import * as Utility from '../../../../utility';

/**
* Const
*/

import * as projectsToAdd from '../../../../constants/projectsToAdd';

/**
* ComputationalResources component definition and export
*/

export class ComputationalResources extends Component {

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

    buttonsOnCLick = (arg) => {
        switch(arg){
            case 'processors': 
                this.props.increaseProcessors();
                this.props.sendCommentToTerminal("Processor added, operations (or creativity) per sec increased");
                break;
            case 'memory': 
                this.props.increaseProcessorsMemory();
                this.props.sendCommentToTerminal("Memory added, max operations increased");
                break;
        }
    }

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
      
        this.intervalOperationsDecrease = setInterval(()=>{
            if(this.props.ops > this.props.opsMax){
                this.props.startDecreasingOperations();
            }
        }, 1000);
        
        this.props.sendCommentToTerminal("Trust-Constrained Self-Modification enabled"); 
    }

    increaseProcessors = () => { 
        this.props.increaseProcessors();
        this.setState({
            delayOperations: this.state.delayOperations - 100
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.delayOperations !== this.state.delayOperations) {
            clearInterval(this.intervalOperationsIncrease);
            this.intervalOperationsIncrease = setInterval(()=>{
                if(this.props.ops < this.props.opsMax){
                    this.props.increaseOps()
                }
            }, this.state.delayOperations);
        }
        if (prevProps.creativity !== this.props.creativity) {
            if(this.props.creativity === 50){
                this.props.addLexicalProcessing();
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
       
        if(prevProps.processorsNumber !== this.props.processorsNumber){
            if(this.props.processorsNumber === 5){
                this.props.addProject(projectsToAdd.QuantumComputing);
            }
        }
        // if(prevProps.ops !== this.props.ops){
        //     if(this.props.ops >= this.props.opsMax){
        //     this.props.startDecreasingOperations();
        //     }
        // }
    }

    componentWillUnmount = () => {
        clearInterval(this.intervalOperationsIncrease);
        clearInterval(this.intervalOperationsDecrease);
        clearInterval(this.intervalStartCreativity);
        clearInterval(this.intervalCreativity);
    }

    /**
    * Markup
    */

    render(){
        return(
            <div>
                <div className="computationalResources">
                    <div className="computationalResources-label">Computational Resources</div>
                    <div className="computationalResources-line"/>
                    <div className="computationalResources-section">
                        <div className="computationalResources-text">Trust: {this.props.trust}</div>
                        <div className="computationalResources-text">+1 Trust at: {Utility.commaSeparator(this.props.clipsToBuyTrust)}</div>
                    </div>

                    <div className="computationalResources-section">
                        <div className="computationalResources-wrapper1">
                            <Button
                                className="computationalResources-button"
                                onClick={()=>this.buttonsOnCLick('processors')}
                                text={"Processors"}
                                // disabled={this.props.processorsNumber + this.props.processorsMemory > this.props.trust}
                            />
                            <div className="computationalResources-text">{this.props.processorsNumber}</div>
                        </div>
                        <div className="computationalResources-wrapper1">
                            <Button
                                className="computationalResources-button"
                                onClick={()=>this.buttonsOnCLick('memory')}
                                text={"Memory"}
                                // disabled={this.props.processorsNumber + this.props.processorsMemory > this.props.trust}
                            />
                            <div className="computationalResources-text">{this.props.processorsMemory}</div>
                        </div>
                    </div>

                    <div className="computationalResources-section">
                        <div className="computationalResources-text">Operations: {this.props.ops}/{this.props.opsMax}</div>
                        <div className="computationalResources-text">Creativity: {this.props.creativity}</div>
                    </div>
                
                    {/* {this.props.showQuanumComputing ? <QuantumComputing/> : null} */}
                </div>
                {/* <QuantumComputing/>  */}
                {this.props.showQuantumComputing ? <QuantumComputing/> : null}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            paperClips: Selectors.getPaperclipsState(state),
            trust: Selectors.getTrustState(state),
            clipsToBuyTrust: Selectors.getClipsToBuyTrustState(state),
            ops: Selectors.getOpsState(state),
            opsMax: Selectors.getOpsMaxState(state),
            processorsNumber: Selectors.getProcessorsNumberState(state),
            processorsMemory: Selectors.getProcessorsMemoryState(state),
            creativity: Selectors.getCreativityState(state),
            creativityTurnOn: state.business.creativityTurnOn,
            showQuantumComputing: state.business.showQuantumComputing
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
            addProject: bindActionCreators(Actions.addProject, dispatch),
            stopDecreasingOps: bindActionCreators(Actions.stopDecreasingOps, dispatch),
            startDecreasingOperations: bindActionCreators(Actions.startDecreasingOperations, dispatch),
            sendCommentToTerminal: bindActionCreators(Actions.sendCommentToTerminal, dispatch),
        };
    }
)(ComputationalResources);
