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

/**
* Styles
*/

import './card.scss';

/**
* Actions
*/

import * as Actions from '../../../../actions';

/**
* Card component definition and export
*/

class Card extends Component {

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
        this.intervalCheckCardValidity = setInterval(()=>{
            if(this.props.ops >= this.props.priceOps || 
                this.props.creativity  >= this.props.priceCreat ||
                this.props.trust  >= this.props.priceTrust
            ){
                this.props.checkCardValidity(this.props.id, true, this.props.i)
            }else{
                this.props.checkCardValidity(this.props.id, false, this.props.i)
            }
        }, 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.intervalCheckCardValidity)
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <button 
                onClick={this.props.onClick} 
                className={this.props.valid ? "card" : "card-invalid"}
                disabled={!this.props.valid}
            >
                {this.props.children}
            </button>
        );
    }
}

export default connect(
    (state) => {
        return {
            ops: state.business.ops,
            creativity: state.business.creativity,
            trust: state.business.trust,
            // unsoldInventory: Selectors.getUnsoldInventoryState(state),
            // paperclipPrice: Selectors.getPaperclipPriceState(state),
            // delay: Selectors.getDelayState(state),
        };
    },
    (dispatch) => {
        return {
            checkCardValidity: bindActionCreators(Actions.checkCardValidity, dispatch),
            // sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch)
        };
    }
)(Card);
