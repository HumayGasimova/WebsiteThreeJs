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

import Button from '../../../library/Button/button';

/**
* Styles
*/

import './manufacturing.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Manufacturing component definition and export
*/

class Manufacturing extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }

    /**
    * Methods
    */

    renderAutoClippers = () => {
        if(this.props.funds >= 5){
            return(
                <div className="manufacturing-section">
                    <div className="manufacturing-wrapper2">
                        <Button
                            // onClick={this.makePaperclip}
                            text={"AutoClippers"}
                            // disabled={this.props.marketingButtonDisabled}
                        />
                        <div className="manufacturing-text"> Number </div>
                    </div>
                    <div className="manufacturing-text">Cost: $</div>
                </div>  
            )
        }
    }

    getRandomDelay = () => {
        let a = Math.floor(Math.random()*15000) + 5000;
        console.log(a)
        return a
   
    }

    getRandomNumber = () => {
        return Math.floor(Math.random()*20) + 10;
    }

    componentDidMount () {
        this.interval = setInterval(()=>{
            this.props.randomWirePrice(this.getRandomNumber())
        }, this.getRandomDelay())

    }

    componentWillUnmount = () => {
        clearInterval(this.interval)
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
                    <div className="manufacturing-text">Clips per Second: </div>
                </div>
                <div className="manufacturing-section">
                    <div className="manufacturing-wrapper1">
                        <Button
                            onClick={this.props.buyWire}
                            text={"Wire"}
                            disabled={this.props.wireButtonDisabled}
                        />
                        <div className="manufacturing-text">{this.props.wire} inches </div>
                    </div>
                    <div className="manufacturing-text">Cost: $ {this.props.wirePrice}</div>
                </div> 
                {this.renderAutoClippers()} 
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
            // publicDemand: state.business.publicDemand,
            // marketingLevel: state.business.marketingLevel,
            // marketingCost: state.business.marketingCost,
            // marketingButtonDisabled: state.business.marketingButtonDisabled
        };
    },
    (dispatch) => {
        return {
            buyWire: bindActionCreators(Actions.buyWire, dispatch),
            randomWirePrice: bindActionCreators(Actions.randomWirePrice, dispatch),
            // marketingNextLevel: bindActionCreators(Actions.marketingNextLevel, dispatch),
        };
    }
)(Manufacturing);
