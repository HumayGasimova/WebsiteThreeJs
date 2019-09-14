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
            if(this.props.ops >= this.props.price){
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
            <div onClick={this.props.onClick} className={this.props.valid ? "card" : "card-invalid"}>
                {this.props.children}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            ops: state.business.ops,
            // funds: state.business.funds,
            // unsoldInventory: state.business.unsoldInventory,
            // paperclipPrice: state.business.paperclipPrice,
            // delay: state.business.delay
        };
    },
    (dispatch) => {
        return {
            checkCardValidity: bindActionCreators(Actions.checkCardValidity, dispatch),
            // sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch)
        };
    }
)(Card);
