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

import store from '../../../store/store';
/**
* Components
*/

import Button from '../../../library/Button/button';

/**
* Styles
*/

import './general.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* General component definition and export
*/

class General extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }

    /**
     * Methods
     */

    makePaperclip = () => {
        // this.props.makePaperclip();
        this.props.sellPaperclips(this.props.paperclipPrice, this.props.delay)
     
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="general">
               <div className="general-text"> Paperclips : {this.props.paperClips} </div>
                <Button 
                    onClick={this.makePaperclip}
                    text={"Make Paperclip"}
                />
                <div>{this.props.isPing}</div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            paperClips: state.business.paperClips,
            funds: state.business.funds,
            unsoldInventory: state.business.unsoldInventory,
            paperclipPrice: state.business.paperclipPrice,
            delay: state.business.delay
        };
    },
    (dispatch) => {
        return {
            makePaperclip: bindActionCreators(Actions.makePaperclip, dispatch),
            sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch)
        };
    }
)(General);
