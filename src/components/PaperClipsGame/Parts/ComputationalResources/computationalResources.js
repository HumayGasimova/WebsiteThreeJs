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
            if(this.props.creativity === 50 && this.props.lexicalProcessingIsThrown === false){
                this.props.addProject(projectsToAdd.LexicalProcessing)
                this.props.toggleThrownProject('lexicalProcessing', true);
            }
            if(this.props.creativity === 100 && this.props.combinatoryHarmonicsIsThrown === false){
                this.props.addProject(projectsToAdd.CombinatoryHarmonics);
                this.props.toggleThrownProject('combinatoryHarmonics', true);
            }
            if(this.props.creativity === 150 && this.props.theHadwingerProblemIsThrown === false){
                this.props.addProject(projectsToAdd.TheHadwigerProblem);
                this.props.toggleThrownProject('theHadwingerProblem', true);
            }
            if(this.props.creativity === 200 && this.props.theTothSausageConjectureIsThrown === false){
                this.props.addProject(projectsToAdd.TheTothSausageConjecture);
                this.props.toggleThrownProject('theTothSausageConjecture', true);
            }
            if(this.props.creativity === 250 && this.props.donkeySpaceIsThrown === false){
                this.props.addProject(projectsToAdd.DonkeySpace);
                this.props.toggleThrownProject('donkeySpace', true);
            }
            if(this.props.creativity === 10 && this.props.xavierReinitializationIsThrown === false){
                this.props.addProject(projectsToAdd.XavierReinitialization)
                this.props.toggleThrownProject('xavierReinitialization', true);
            }
        }
       
        if(prevProps.processorsNumber !== this.props.processorsNumber){
            if(this.props.processorsNumber === 5 && this.props.quantumComputingIsThrown === false){
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
                                // disabled={this.props.processorsNumber + this.props.processorsMemory >= this.props.trust}
                            />
                            <div className="computationalResources-text">{this.props.processorsNumber}</div>
                        </div>
                        <div className="computationalResources-wrapper1">
                            <Button
                                className="computationalResources-button"
                                onClick={()=>this.buttonsOnCLick('memory')}
                                text={"Memory"}
                                // disabled={this.props.processorsNumber + this.props.processorsMemory >= this.props.trust}
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
            creativityTurnOn: Selectors.getCreativityTurnOnState(state),
            showQuantumComputing: Selectors.getShowQuantumComputingState(state),
            creativityCounterIsThrown: Selectors.getCreativityCounterIsThrownState(state),
            lexicalProcessingIsThrown: Selectors.getLexicalProcessingIsThrownState(state),
            combinatoryHarmonicsIsThrown: Selectors.getCombinatoryHarmonicsIsThrownState(state),
            theHadwingerProblemIsThrown: Selectors.getTheHadwingerProblemIsThrownState(state),
            theTothSausageConjectureIsThrown: Selectors.getTheTothSausageConjectureIsThrownState(state),
            donkeySpaceIsThrown: Selectors.getDonkeySpaceIsThrownState(state),
            xavierReinitializationIsThrown: Selectors.getXavierReinitializationIsThrownState(state),
            quantumComputingIsThrown: Selectors.getQuantumComputingIsThrownState(state),
            quantumTemporalReversionIsThrown: Selectors.getQuantumTemporalReversionIsThrownState(state),
        };
    },
    (dispatch) => {
        return {
            increaseOps: bindActionCreators(Actions.increaseOps, dispatch),
            increaseProcessors: bindActionCreators(Actions.increaseProcessors, dispatch),
            increaseProcessorsMemory: bindActionCreators(Actions.increaseProcessorsMemory, dispatch),
            increaseCreativity: bindActionCreators(Actions.increaseCreativity, dispatch),
            // startCreativityCounter: bindActionCreators(Actions.startCreativityCounter, dispatch),
            // addLexicalProcessing: bindActionCreators(Actions.addLexicalProcessing, dispatch),
            // addCombinatoryHarmonics: bindActionCreators(Actions.addCombinatoryHarmonics, dispatch),
            // addTheHadwingerProblem: bindActionCreators(Actions.addTheHadwingerProblem, dispatch),
            // addTheTothSausageConjecture: bindActionCreators(Actions.addTheTothSausageConjecture, dispatch),
            // addDonkeySpace: bindActionCreators(Actions.addDonkeySpace, dispatch),
            addProject: bindActionCreators(Actions.addProject, dispatch),
            stopDecreasingOps: bindActionCreators(Actions.stopDecreasingOps, dispatch),
            startDecreasingOperations: bindActionCreators(Actions.startDecreasingOperations, dispatch),
            sendCommentToTerminal: bindActionCreators(Actions.sendCommentToTerminal, dispatch),
            // addXavierReinitialization: bindActionCreators(Actions.addXavierReinitialization, dispatch),
            toggleThrownProjectStartCreativityCounter: bindActionCreators(Actions.toggleThrownProjectStartCreativityCounter, dispatch),
            toggleThrownProjectLexicalProcessing: bindActionCreators(Actions.toggleThrownProjectLexicalProcessing, dispatch),
            toggleThrownProjectCombinatoryHarmonics: bindActionCreators(Actions.toggleThrownProjectCombinatoryHarmonics, dispatch),
            toggleThrownProjectTheHadwingerProblem: bindActionCreators(Actions.toggleThrownProjectTheHadwingerProblem, dispatch),
            toggleThrownProjectTheTothSausageConjecture: bindActionCreators(Actions.toggleThrownProjectTheTothSausageConjecture, dispatch),
            toggleThrownProjectDonkeySpace: bindActionCreators(Actions.toggleThrownProjectDonkeySpace, dispatch),
            toggleThrownProjectXavierReinitialization: bindActionCreators(Actions.toggleThrownProjectXavierReinitialization, dispatch),
            toggleThrownProjectQuantumComputing: bindActionCreators(Actions.toggleThrownProjectQuantumComputing, dispatch),
            toggleThrownProjectQuantumTemporalReversion: bindActionCreators(Actions.toggleThrownProjectQuantumTemporalReversion, dispatch),
            toggleThrownProject: bindActionCreators(Actions.toggleThrownProject, dispatch),
            
        };
    }
)(ComputationalResources);
