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

import { Subject } from 'rxjs';
import {  Observable } from 'rxjs';
import 'rxjs/add/observable/fromEvent';


/**
* Components
*/

import Button from '../../../../library/Button/button';
import AutoClippers from './AutoClippers/autoClippers';
import MegaClippers from './MegaClippers/megaClippers';
import AutoWireBuyer from './AutoWireBuyer/autoWireBuyer';


/**
* Styles
*/

import './manufacturing.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Manufacturing component definition and export
*/

export class Manufacturing extends Component {

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

    getRandomDelay = () => {
        let a = Math.floor(Math.random()*15000) + 5000;
        console.log(a)
        return a;
   
    }

    getRandomNumber = () => {
        return Math.floor(Math.random()*20) + 10;
    }

    componentDidMount () {
        this.interval = setInterval(()=>{
            this.props.randomWirePrice(this.getRandomNumber())
        }, this.getRandomDelay());

        this.intervalCheckButton = setInterval(()=>{
            this.props.checkButtons();
            this.props.checkExistenceOfWire(this.props.wire);
        }, 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.interval);
        clearInterval(this.intervalCheckButton);
        clearInterval(this.intervalAutoWireBuyer);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.wireBuyerIsShown !== this.props.wireBuyerIsShown) {
            this.intervalAutoWireBuyer = setInterval(()=>{
                if(this.props.autoWireBuyerIsOn === true){
                    this.props.autoWireBuyer();
                }
            }, 1000);
        }
        if (prevProps.paperClips !== this.props.paperClips) {
            if(this.props.paperClips === 500000){
                this.props.addMegaClippers();
            }
        }
      
        if (prevProps.autoClipperInitPrice !== this.props.autoClipperInitPrice) {
            if(this.props.autoClipperInitPrice === 5){
                this.props.sendCommentToTerminal("AutoClippers available for purchase");
                this.props.showAutoClippers();
            }
        }
       
       
       
    }
    
    wireButtonToggle = () => {
        this.props.startBuyingWire();
        this.props.clickWireButton();
        this.props.autoPaperclipsStart();
        
    }

    /**
    * Markup
    */

    render(){
        return(
            <div className="manufacturing">
                <div className="manufacturing-label">Manufacturing</div>
                <div className="manufacturing-line"/>
                <div className="manufacturing-section">
                    <div className="manufacturing-text">Clips per Second: {this.props.clipsPerSec}</div>
                </div>
                <div className="manufacturing-section">
                    {this.props.wireBuyerIsShown ? <AutoWireBuyer/> : null}
                    <div className="manufacturing-wrapper1">
                        <Button
                            onClick={this.wireButtonToggle}
                            text={"Wire"}
                            disabled={this.props.wireButtonDisabled}
                            id={"wireButton"}
                                 // buttonRef={this.buttonRef}
                        />
                        <div className="manufacturing-text">{this.props.wire} inches</div>
                    </div>
                    <div className="manufacturing-text">Cost: $ {this.props.wirePrice}</div>
                </div> 
                {this.props.autoClippersIsShown ? <AutoClippers/> : null}
                {this.props.megaClippersIsShown ? <MegaClippers/> : null}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            wire: state.business.wire,
            funds: state.business.funds,
            wirePrice: state.business.wirePrice,
            wireButtonDisabled: state.business.wireButtonDisabled,
            autoClippersPerSec: state.business.autoClippersPerSec,
            autoClipperInitPrice: state.business.autoClipperInitPrice,
            autoClipperPrice: state.business.autoClipperPrice,
            autoClippersButtonDisabled: state.business.autoClippersButtonDisabled,
            paperclipPrice: state.business.paperclipPrice,
            delay: state.business.delay,
            delayAutoPaperClippers: state.business.delayAutoPaperClippers,
            wire: state.business.wire,
            noWire: state.business.noWire,
            wireBuyerIsShown: state.business.wireBuyerIsShown,
            autoWireBuyerIsOn: state.business.autoWireBuyerIsOn,
            paperClips: state.business.paperClips,
            megaClippersIsShown: state.business.megaClippersIsShown,
            clipsPerSec: state.business.clipsPerSec,
            autoClippersIsShown: state.business.autoClippersIsShown,
        };
    },
    (dispatch) => {
        return {
            checkButtons: bindActionCreators(Actions.checkButtons, dispatch),
            startBuyingWire: bindActionCreators(Actions.startBuyingWire, dispatch),
            randomWirePrice: bindActionCreators(Actions.randomWirePrice, dispatch),
            autoPaperclips: bindActionCreators(Actions.autoPaperclips, dispatch),
            makePaperclip: bindActionCreators(Actions.makePaperclip, dispatch),
            checkExistenceOfWire: bindActionCreators(Actions.checkExistenceOfWire, dispatch),
            sendCommentToTerminal: bindActionCreators(Actions.sendCommentToTerminal, dispatch),
            clickWireButton: bindActionCreators(Actions.clickWireButton, dispatch),
            autoWireBuyer: bindActionCreators(Actions.autoWireBuyer, dispatch),
            toggleAutoWireBuyer: bindActionCreators(Actions.toggleAutoWireBuyer, dispatch),
            addMegaClippers: bindActionCreators(Actions.addMegaClippers, dispatch),
            autoPaperclipsStart: bindActionCreators(Actions.autoPaperclipsStart, dispatch),
            showAutoClippers: bindActionCreators(Actions.showAutoClippers, dispatch),
        };
    }
)(Manufacturing);
