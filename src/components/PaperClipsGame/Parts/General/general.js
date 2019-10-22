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
import Hover from '../../SmallParts/Hover/hover';

/**
* Styles
*/

import './general.scss';

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
* General component definition and export
*/

export class General extends Component {

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
        this.props.sellPaperclips()
     
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.paperClips !== this.props.paperClips){
            let weeks;
            let days;
            let hours
            let min;
            let sec;
            let comment;
            if(this.props.time >= 604800){
                weeks =  Math.floor(this.props.time/604800);
                days = Math.floor((this.props.time - weeks*604800)/86400);
                hours = Math.floor((this.props.time - weeks*604800 - days*86400)/3600);
                min = Math.floor((this.props.time - weeks*604800 - days*86400 - hours*3600)/60);
                sec = this.props.time - weeks*604800 - days*86400 - hours*3600 - min*60;
                comment = `clips created in ${weeks} ${weeks === 1 ? "week": "weeks"} ${days} ${days === 1 ? "day": "days"} ${hours} ${hours === 1 ? "hour": "hours"} ${min} ${min === 1 ? "minute": "minutes"} ${sec} ${sec === 1 ? "second": "seconds"}`;
            }
            if(this.props.time < 604800){
                days = Math.floor(this.props.time/86400);
                hours = Math.floor((this.props.time - days*86400)/3600);
                min = Math.floor((this.props.time - days*86400 - hours*3600)/60);
                sec = this.props.time - days*86400 - hours*3600 - min*60;
                comment = `clips created in ${days} ${days === 1 ? "day": "days"} ${hours} ${hours === 1 ? "hour": "hours"} ${min} ${min === 1 ? "minute": "minutes"} ${sec} ${sec === 1 ? "second": "seconds"}`;
            }
            if(this.props.time < 86400){
                hours = Math.floor(this.props.time/3600);
                min = Math.floor((this.props.time - hours*3600)/60);
                sec = this.props.time - hours*3600 - min*60;
                comment = `clips created in ${hours} ${hours === 1 ? "hour": "hours"} ${min} ${min === 1 ? "minute": "minutes"} ${sec} ${sec === 1 ? "second": "seconds"}`;
            }
            if(this.props.time < 3600){
                min = Math.floor(this.props.time / 60);
                sec = this.props.time - min*60;
                comment = `clips created in ${min} ${min === 1 ? "minute": "minutes"} ${sec} ${sec === 1 ? "second": "seconds"}`;
            }
            if(this.props.time < 60){
                sec = this.props.time;
                comment = `clips created in ${sec} ${sec === 1 ? "second": "seconds"}`;
            }
        
            if(this.props.paperClips === 500){
                this.props.sendCommentToTerminal(`500 ${comment}`);
            }
            if(this.props.paperClips === 1000){
                this.props.sendCommentToTerminal(`1,000 ${comment}`);
            }
            if(this.props.paperClips === 1000000){
                this.props.sendCommentToTerminal(`100,000 ${comment}`);
            }
            // if(this.props.paperClips === 2000){
            //     this.props.sendCommentToTerminal(`2,000 ${comment}`);
            // }
        }
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="general">
                <Button 
                    onClick={this.makePaperclip}
                    text={"Make Paperclip"}
                    disabled={this.props.makePaperclipDisabled}
                />
                <div>{this.props.isPing}</div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            paperClips: Selectors.getPaperclipsState(state),
            funds: Selectors.getFundsState(state),
            unsoldInventory: state.business.unsoldInventory,
            paperclipPrice: Selectors.getPaperclipPriceState(state),
            delay: state.business.delay,
            wire: state.business.wire,
            makePaperclipDisabled: state.business.makePaperclipDisabled,
            time: state.business.time,
        };
    },
    (dispatch) => {
        return {
            makePaperclip: bindActionCreators(Actions.makePaperclip, dispatch),
            sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch),
            sendCommentToTerminal: bindActionCreators(Actions.sendCommentToTerminal, dispatch),
        };
    }
)(General);
