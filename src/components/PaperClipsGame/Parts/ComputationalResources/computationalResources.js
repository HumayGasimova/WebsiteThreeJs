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
                this.increaseProcessors();
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
            if(this.props.ops === this.props.opsMax && this.props.creativityCounterIsThrown === false){
                this.props.addProject(projectsToAdd.Creativity);
                this.props.toggleThrownProject('creativityCounter', true);
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
        let updatedDelayOperations = this.state.delayOperations * 0.9;

        this.setState({
            delayOperations: updatedDelayOperations
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
            if(this.props.creativity === 10 && this.props.lexicalProcessingIsThrown === false){
                this.props.addProject(projectsToAdd.LexicalProcessing)
                this.props.toggleThrownProject('lexicalProcessing', true);
            }
            if(this.props.creativity === 20 && this.props.combinatoryHarmonicsIsThrown === false){
                this.props.addProject(projectsToAdd.CombinatoryHarmonics);
                this.props.toggleThrownProject('combinatoryHarmonics', true);
            }
            if(this.props.creativity === 30 && this.props.theHadwingerProblemIsThrown === false){
                this.props.addProject(projectsToAdd.TheHadwigerProblem);
                this.props.toggleThrownProject('theHadwingerProblem', true);
            }
            if(this.props.creativity === 40 && this.props.theTothSausageConjectureIsThrown === false){
                this.props.addProject(projectsToAdd.TheTothSausageConjecture);
                this.props.toggleThrownProject('theTothSausageConjecture', true);
            }
            if(this.props.creativity === 50 && this.props.donkeySpaceIsThrown === false){
                this.props.addProject(projectsToAdd.DonkeySpace);
                this.props.toggleThrownProject('donkeySpace', true);
            }
            if(this.props.creativity === 60 && this.props.xavierReinitializationIsThrown === false){
                this.props.addProject(projectsToAdd.XavierReinitialization)
                this.props.toggleThrownProject('xavierReinitialization', true);
            }
        }
       
        if(prevProps.processorsNumber !== this.props.processorsNumber){
            if(this.props.processorsNumber === 2 && this.props.quantumComputingIsThrown === false){//this.props.processorsNumber === 5
                this.props.addProject(projectsToAdd.QuantumComputing);
                this.props.toggleThrownProject('quantumComputing', true);
            }
        }

        if(prevProps.ops !== this.props.ops){
            if(this.props.ops <= -10 && this.props.quantumTemporalReversionIsThrown === false){
                this.props.addProject(projectsToAdd.QuantumTemporalReversion)
                this.props.toggleThrownProject('quantumTemporalReversion', true);
            }
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.intervalOperationsIncrease);
        clearInterval(this.intervalOperationsDecrease);
        clearInterval(this.intervalStartCreativity);
        clearInterval(this.intervalCreativity);
    }

    renderProcessorsNumber = () => {
        return(
            <div className="computationalResources-wrapper1">
                <Button
                    className="computationalResources-button"
                    onClick={()=>this.buttonsOnCLick('processors')}
                    text={"Processors"}
                    disabled={this.props.processorsNumber + this.props.processorsMemory >= this.props.trust}
                />
                <div className="computationalResources-text">{this.props.processorsNumber}</div>
            </div>
        )
    }

    renderProcessorsMemory = () => {
        return(
            <div className="computationalResources-wrapper1">
                <Button
                    className="computationalResources-button"
                    onClick={()=>this.buttonsOnCLick('memory')}
                    text={"Memory"}
                    disabled={this.props.processorsNumber + this.props.processorsMemory >= this.props.trust}
                />
                <div className="computationalResources-text">{this.props.processorsMemory}</div>
            </div>
        )
    }

    renderTrust = () => {
        return(
            <div className="computationalResources-section">
                <div className="computationalResources-text">Trust: {this.props.trust}</div>
                <div className="computationalResources-text">+1 Trust at: {Utility.commaSeparator(this.props.clipsToBuyTrust)}</div>
            </div>
        )
    }

    renderComputationalResourses = () => {
        return(
            <div>
                <div className="computationalResources">
                    <div className="computationalResources-label">Computational Resources</div>
                    <div className="computationalResources-line"/>
                    {this.props.processorsNumberIsShown ? this.renderTrust() : null}
                    <div className="computationalResources-section">
                    {this.props.processorsNumberIsShown ? this.renderProcessorsNumber() : null}
                    {this.renderProcessorsMemory()}
                    </div>
                    <div className="computationalResources-section">
                        <div className="computationalResources-text">Operations: {Utility.commaSeparator(this.props.ops)}/{Utility.commaSeparator(this.props.opsMax)}</div>
                        {this.props.processorsNumberIsShown ? <div className="computationalResources-text">Creativity: {Utility.commaSeparator(this.props.creativity)}</div> : null}
                    </div>
                
                    {/* {this.props.showQuanumComputing ? <QuantumComputing/> : null} */}
                </div>
                {/* <QuantumComputing/>  */}
                {this.props.quantumComputingIsShown ? <QuantumComputing/> : null}
            </div>
        )
    }

    /**
    * Markup
    */

    render(){
        return(
            <div>
              {this.props.processorsMemoryIsShown ? this.renderComputationalResourses() : null}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            trust: Selectors.getTrustState(state),
            clipsToBuyTrust: Selectors.getClipsToBuyTrustState(state),
            ops: Selectors.getOpsState(state),
            opsMax: Selectors.getOpsMaxState(state),
            processorsNumber: Selectors.getProcessorsNumberState(state),
            processorsMemory: Selectors.getProcessorsMemoryState(state),
            creativity: Selectors.getCreativityState(state),
            creativityTurnOn: Selectors.getCreativityTurnOnState(state),
            quantumComputingIsShown: Selectors.getQuantumComputingIsShownState(state),
            creativityCounterIsThrown: Selectors.getCreativityCounterIsThrownState(state),
            lexicalProcessingIsThrown: Selectors.getLexicalProcessingIsThrownState(state),
            combinatoryHarmonicsIsThrown: Selectors.getCombinatoryHarmonicsIsThrownState(state),
            theHadwingerProblemIsThrown: Selectors.getTheHadwingerProblemIsThrownState(state),
            theTothSausageConjectureIsThrown: Selectors.getTheTothSausageConjectureIsThrownState(state),
            donkeySpaceIsThrown: Selectors.getDonkeySpaceIsThrownState(state),
            xavierReinitializationIsThrown: Selectors.getXavierReinitializationIsThrownState(state),
            quantumComputingIsThrown: Selectors.getQuantumComputingIsThrownState(state),
            quantumTemporalReversionIsThrown: Selectors.getQuantumTemporalReversionIsThrownState(state),
            processorsMemoryIsShown: Selectors.getProcessorsMemoryIsShownState(state),
            processorsNumberIsShown: Selectors.getProcessorsNumberIsShownState(state)
        };
    },
    (dispatch) => {
        return {
            increaseOps: bindActionCreators(Actions.increaseOps, dispatch),
            increaseProcessors: bindActionCreators(Actions.increaseProcessors, dispatch),
            increaseProcessorsMemory: bindActionCreators(Actions.increaseProcessorsMemory, dispatch),
            increaseCreativity: bindActionCreators(Actions.increaseCreativity, dispatch),
            addProject: bindActionCreators(Actions.addProject, dispatch),
            startDecreasingOperations: bindActionCreators(Actions.startDecreasingOperations, dispatch),
            sendCommentToTerminal: bindActionCreators(Actions.sendCommentToTerminal, dispatch),
            toggleThrownProject: bindActionCreators(Actions.toggleThrownProject, dispatch)
        };
    }
)(ComputationalResources);
