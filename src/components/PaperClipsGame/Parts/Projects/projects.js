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

import Card from '../../SmallParts/Card/card';

/**
* Styles
*/

import './projects.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Const
*/

import * as projectsToAdd from '../../../../constants/projectsToAdd';
import * as chipsToAdd from '../../../../constants/chipsToAdd';

/**
* Projects component definition and export
*/

class Projects extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state = {
            card1:  {
                text1: "Improved AutoClippers (750 ops)",
                text2 : "Increases AutoClipper performance 25%",
                price: {
                    ops: 5
                },
                action: 25,
                next: 'AutoClippers25',
                valid: false,
                id: "card1",
                terminal: "AutoClippper performance boosted by 25%"
            },
            card2: {
                text1: "Improved Wire Extrusion (1,750 ops)",
                text2 : "50% more wire supply from every spool",
                price: {
                    ops: 5
                },
                action: 50,
                next: 'wireExtrusion50',
                valid: false,
                id: "card2",
                terminal: "Wire extrusion technique improved, 1,500 supply from every spool"
            },
            card3: {
                text1: "RecTracker (500 ops)",
                text2 : "Automatically calculates average revenue",
                text3 : "per second",
                price: {
                    ops: 5
                },
                action: null,
                next: 'showRevTracker',
                valid: false,
                id: "card3",
                terminal: "RevTracker online"
            }
        }
    }

    /**
    * Methods
    */

    handleOnClick = (id, next, price, action, terminal) => {
        this.props.deleteCard(id);
        switch(next){
            case 'showRevTracker':
                this.props.showRevTracker(price.ops);
                this.props.sendCommentToTerminal(terminal);
                break;
            case 'AutoClippers25':
                this.props.addProject(projectsToAdd.AutoClippers50);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.improveAutoClippers(action); //change logic
                if(this.props.autoClipperOn){
                    this.props.stop();
                    this.props.autoPaperclipsStart();
                }
                break;
            case 'autoClippers50':
                this.props.addProject(projectsToAdd.OptimizedAutoClippers75);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.improveAutoClippers(action);//change logic
                if(this.props.autoClipperOn){
                    this.props.stop();
                    this.props.autoPaperclipsStart();
                }
                break;
            case 'autoClippers75':
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.improveAutoClippers(action);//change logic
                if(this.props.autoClipperOn){
                    this.props.stop();
                    this.props.autoPaperclipsStart();
                }
                break;
            case 'wireExtrusion50':
                this.props.addProject(projectsToAdd.WireExtrusion75);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.improveWireExtrusion(action);
                break;
            case 'wireExtrusion75':
                this.props.addProject(projectsToAdd.MicrolatticeShapecasting100);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.improveWireExtrusion(action);
                break;
            case 'microlatticeShapecasting100':
                this.props.addProject(projectsToAdd.SpectralFrothAnnealment200);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.improveWireExtrusion(action);
                break;
            case 'spectralFrothAnnealment200':
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.improveWireExtrusion(action);
                break;
            case 'creativity':
                this.props.addProject(projectsToAdd.Limerick);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.creativityTurnOn();
                break;
            case 'lexicalProcessing':
                this.props.addProject(projectsToAdd.NewSlogan);
                this.props.addProject(projectsToAdd.AlgorithmicTrading);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectCreat(price.creat);
                this.props.trustPlusOneFromProject();
                break;
            case 'newSlogan':
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOpsAndCreat(price.ops, price.creat);
                this.props.startImprovingMarketing(action);
                this.props.updatePublicDemand();
                break;
            case 'algorithmicTrading':
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.showInvestEngine();
                break;
            case 'combinatoryHarmonics':
                this.props.addProject(projectsToAdd.CatchyJingle);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectCreat(price.creat);
                this.props.trustPlusOneFromProject();
                break;
            case 'catchyJingle':
                this.props.addProject(projectsToAdd.HypnoHarmonics);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOpsAndCreat(price.ops, price.creat);
                this.props.startImprovingMarketing(action);
                this.props.updatePublicDemand();
                break;
            case 'hypnoHarmonics':
                this.props.addProject(projectsToAdd.HypnoDrones);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.startImprovingMarketing(action);
                this.props.updatePublicDemand();
                break;
            case 'hypnoDrones':
                this.props.addProject(projectsToAdd.ReleaseTheHypnoDrones);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.startImprovingMarketing(action);
                this.props.updatePublicDemand();
                break;
            case 'releaseTheHypnoDrones':
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectTrust(price.trust);
                this.props.startImprovingMarketing(action);
                this.props.updatePublicDemand();
                break;
            case 'theHadwigerProblem':
                this.props.addProject(projectsToAdd.HadwigerClipDiagrams);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectCreat(price.creat);
                this.props.trustPlusOneFromProject();
                break;
            case 'hadwigerClipDiagrams':
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.improveAutoClippers(action);
                // if(this.props.autoClipperOn){
                //     this.props.stop();
                //     this.props.autoPaperclipsStart(this.props.paperclipPrice, this.props.delay, this.props.delayAutoPaperClippers, this.props.wire);
                // } in progress //change logic
                break;
            case 'theTothSausageConjecture':
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectCreat(price.creat);
                this.props.trustPlusOneFromProject();
                break;
            case 'donkeySpace':
                this.props.addProject(projectsToAdd.StrategicModeling);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectCreat(price.creat);
                this.props.trustPlusOneFromProject();
                break;
            case 'strategicModeling':
                this.props.addProject(projectsToAdd.NewStrategyA100);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.showStrategicModeling();
                break;
            case 'newStrategyA100':
                this.props.addProject(projectsToAdd.NewStrategyB100);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addNewStrategy("A100");
                break;
            case 'newStrategyB100':
                this.props.addProject(projectsToAdd.NewStrategyGreedy);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addNewStrategy("B100");
                break;
            case 'newStrategyGreedy':
                this.props.addProject(projectsToAdd.NewStrategyGenerous);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addNewStrategy("GREEDY");
                break;
            case 'newStrategyGenerous':
                this.props.addProject(projectsToAdd.NewStrategyMinimax);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addNewStrategy("GENEROUS");
                break;
            case 'newStrategyMinimax':
                this.props.addProject(projectsToAdd.NewStrategyTitForTat);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addNewStrategy("MINIMAX");
                break;
            case 'newStrategyTitForTat':
                this.props.addProject(projectsToAdd.NewStrategyBeatLast);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addNewStrategy("TIT FOR TAT");
                break;
            case 'newStrategyTitForTat':
                this.props.addProject(projectsToAdd.TheoryOfMind);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addNewStrategy("BEAT LAST");
                break;
            case 'theoryOfMind':
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                break; 
            case 'quantumComputing':
                this.props.addProject(projectsToAdd.PhotonicChip);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.showQuantumComputing();
                break; 
            case 'photonicChip':
                this.props.addProject(projectsToAdd.PhotonicChip2);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addChip(chipsToAdd.Chip1)
                this.props.changeToQOps();
                this.props.startAddingQOps("chip1");
                break; 
            case 'photonicChip2':
                this.props.addProject(projectsToAdd.PhotonicChip3);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addChip(chipsToAdd.Chip2);
                this.props.startAddingQOps("chip2");
                break; 
            case 'photonicChip3':
                this.props.addProject(projectsToAdd.PhotonicChip4);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addChip(chipsToAdd.Chip3);
                this.props.startAddingQOps("chip3");
                break; 
            case 'wireBuyer':
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.showAutoWireBuyer();
                break;
            case 'megaClippers':
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.showMegaClippers()
                break; 
            case 'photonicChip4':
                this.props.addProject(projectsToAdd.PhotonicChip5);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addChip(chipsToAdd.Chip4);
                this.props.startAddingQOps("chip4");
                break; 
            case 'photonicChip5':
                this.props.addProject(projectsToAdd.PhotonicChip6);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addChip(chipsToAdd.Chip5);
                this.props.startAddingQOps("chip5");
                break; 
            case 'photonicChip6':
                this.props.addProject(projectsToAdd.PhotonicChip7);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addChip(chipsToAdd.Chip6);
                this.props.startAddingQOps("chip6");
                break; 
            case 'photonicChip7':
                this.props.addProject(projectsToAdd.PhotonicChip8);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addChip(chipsToAdd.Chip7);
                this.props.startAddingQOps("chip7");
                break; 
            case 'photonicChip8':
                this.props.addProject(projectsToAdd.PhotonicChip9);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addChip(chipsToAdd.Chip8);
                this.props.startAddingQOps("chip8");
                break; 
            case 'photonicChip9':
                this.props.addProject(projectsToAdd.PhotonicChip10);
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addChip(chipsToAdd.Chip9);
                this.props.startAddingQOps("chip9");
                break; 
            case 'photonicChip10':
                this.props.sendCommentToTerminal(terminal);
                this.props.removePriceOfProjectOps(price.ops);
                this.props.addChip(chipsToAdd.Chip10);
                this.props.startAddingQOps("chip10");
                break; 
        }
    }

    renderCards = () => {
        return(
            <div>
                {this.props.cards.map((el,i)=>{
                    if(el){
                        return(
                            <Card
                                key={el.id}
                                onClick={() => this.handleOnClick(el.id, el.next, el.price, el.action, el.terminal)}
                                valid={el.valid}
                                priceOps={el.price.ops}
                                priceCreat={el.price.creat}
                                priceTrust={el.price.trust}
                                id={el.id}
                                action={el.action}
                                i={i}
                            >
                                <div>{el.text1}</div>
                                <div>{el.text2}</div>
                                {el.text3 ? <div>{el.text3}</div> : null}
                            </Card>
                        )
                    }
                   
                })}
            </div>
        )        
    }

    componentWillMount = () => {
        this.props.initProjects(this.state.card1, this.state.card2, this.state.card3)
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="projects">
                <div className="projects-label">Projects</div>
                <div className="projects-line"/>
                {this.renderCards()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            cards: state.business.cards,
            paperclipPrice: state.business.paperclipPrice,
            wire: state.business.wire,
            delay: state.business.delay,
            delayAutoPaperClippers: state.business.delayAutoPaperClippers,
            ops: state.business.ops,
            opsMax: state.business.opsMax,
            autoClipperOn: state.business.autoClipperOn,
            processorsNumber: state.business.processorsNumber,
        };
    },
    (dispatch) => {
        return {
            initProjects: bindActionCreators(Actions.initProjects, dispatch),
            deleteCard: bindActionCreators(Actions.deleteCard, dispatch),
            showRevTracker: bindActionCreators(Actions.showRevTracker, dispatch),
            addProject: bindActionCreators(Actions.addProject, dispatch),
            removePriceOfProjectOps: bindActionCreators(Actions.removePriceOfProjectOps, dispatch),
            removePriceOfProjectCreat: bindActionCreators(Actions.removePriceOfProjectCreat, dispatch),
            removePriceOfProjectTrust: bindActionCreators(Actions. removePriceOfProjectTrust, dispatch),
            removePriceOfProjectOpsAndCreat: bindActionCreators(Actions.removePriceOfProjectOpsAndCreat, dispatch),
            improveAutoClippers: bindActionCreators(Actions.improveAutoClippers, dispatch),
            stop: bindActionCreators(Actions.stop, dispatch),
            autoPaperclipsStart: bindActionCreators(Actions.autoPaperclipsStart, dispatch),
            improveWireExtrusion: bindActionCreators(Actions.improveWireExtrusion, dispatch),
            creativityTurnOn: bindActionCreators(Actions.creativityTurnOn, dispatch),
            trustPlusOneFromProject: bindActionCreators(Actions.trustPlusOneFromProject, dispatch),
            startImprovingMarketing: bindActionCreators(Actions.startImprovingMarketing, dispatch),
            showInvestEngine: bindActionCreators(Actions.showInvestEngine, dispatch),
            showStrategicModeling: bindActionCreators(Actions.showStrategicModeling, dispatch),
            sendCommentToTerminal: bindActionCreators(Actions.sendCommentToTerminal, dispatch),
            addNewStrategy: bindActionCreators(Actions.addNewStrategy, dispatch),
            showQuantumComputing: bindActionCreators(Actions.showQuantumComputing, dispatch),
            changeToQOps: bindActionCreators(Actions.changeToQOps, dispatch),
            startAddingQOps: bindActionCreators(Actions.startAddingQOps, dispatch),
            addChip: bindActionCreators(Actions.addChip, dispatch),
            showAutoWireBuyer: bindActionCreators(Actions.showAutoWireBuyer, dispatch),
            updatePublicDemand: bindActionCreators(Actions.updatePublicDemand, dispatch),
            showMegaClippers: bindActionCreators(Actions.showMegaClippers, dispatch)
        };
    }
)(Projects);
