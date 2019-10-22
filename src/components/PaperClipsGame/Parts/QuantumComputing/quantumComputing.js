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
import Chip from '../../SmallParts/Chip/chip';

/**
* Styles
*/

import './quantumComputing.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../../reducers/selectors';


/**
* QuantumComputing component definition and export
*/

export class QuantumComputing extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        // this.state = {
        //     chips: ['','']
        // }
    }
    
    /**
    * Methods
    */

    computeOnClick = () => {
        this.props.showQuantCompMessage();
        if(this.props.changedToQOps){
            let chips = this.props.chips;
            let captureQOps = chips.reduce((a,b) => +a + b.qOps, 0);
            // console.log(captureVal)
             
            this.props.captureCurrentQOps(captureQOps);

            if(this.props.ops >= this.props.opsMax && captureQOps > 0){
                let randomNumber =  Math.floor(Math.random()*70);
                this.props.updateOps(randomNumber);
                // this.props.startDecreasingOperations();
            }else{
                this.props.updateOps(captureQOps);
            }            
        }
    }

    renderChip = () => {
        return(
            <div className="quantumComputing-wrapper3">
                {this.props.chips.map((el,i)=>{
                    return(
                        <Chip
                            key={el.id}
                            showChip={el.showChip}
                            chipsNumber={el.chipsNumber}
                            qOps={el.qOps}
                        />
                    )
                })}
            </div>
        )        
    }

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.qOps !== this.props.qOps) {
    //         if(this.props.qOps === 360){
    //             this.props.stopAddingQOps();
    //             this.props.startSubtractingQOps();
    //         }
    //         if(this.props.qOps === -360){
    //             this.props.stopSubtractingQOps();
    //             this.props.startAddingQOps();
    //         }
    //     }      
    // }

    /**
    * Markup
    */

    render(){
        return(
            <div className="quantumComputing">
                <div className="quantumComputing-label">Quantum Computing</div>
                {this.renderChip()}
                {/* {this.props.showChip ? <Chip/> : null} */}
                <div className={this.props.changedToQOps ? "quantumComputing-wrapper2" : "quantumComputing-wrapper1"}>
                    <Button
                        className="quantumComputing-button"
                        onClick={this.computeOnClick}
                        text={"Compute"}
                        // disabled={this.props.marketingButtonDisabled}
                    />
                    {this.props.changedToQOps ? 
                    <div className={this.props.showQCompMessage === 0 ? 'quantumComputing-text-with-effect0' : (this.props.showQCompMessage % 2 === 0 ? 'quantumComputing-text-with-effect1' :'quantumComputing-text-with-effect2' )}>
                        qOps: {this.props.currentQOps}
                    </div> : 
                    <div className={this.props.showQCompMessage === 0 ? 'quantumComputing-text-with-effect0' : (this.props.showQCompMessage % 2 === 0 ? 'quantumComputing-text-with-effect1' :'quantumComputing-text-with-effect2' )}>
                        Need Photonic Chips
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            showQCompMessage: Selectors.getShowQCompMessageState(state),
            showChip: Selectors.getShowChipState(state),
            changedToQOps: Selectors.getChangedToQOpsState(state),
            qOps: state.business.qOps,
            currentQOps: Selectors.getCurrentQOpsState(state),
            chips: state.business.chips,
            ops: Selectors.getOpsState(state),
            opsMax: Selectors.getOpsMaxState(state),
            chips: state.business.chips,
        };
    },
    (dispatch) => {
        return {
            showQuantCompMessage: bindActionCreators(Actions.showQuantCompMessage, dispatch),
            captureCurrentQOps: bindActionCreators(Actions.captureCurrentQOps, dispatch),
            updateOps: bindActionCreators(Actions.updateOps, dispatch),
            startDecreasingOperations: bindActionCreators(Actions.startDecreasingOperations, dispatch),
            stopDecreasingOps: bindActionCreators(Actions.stopDecreasingOps, dispatch),
            // addCaptureVal: bindActionCreators(Actions.addCaptureVal, dispatch),
        };
    }
)(QuantumComputing);
