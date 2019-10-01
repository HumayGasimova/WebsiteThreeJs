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
* General component definition and export
*/

class General extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
        this.state = {
            isHovering: false
        }
    }

    /**
     * Methods
     */

    makePaperclip = () => {
        // this.props.makePaperclip();
        this.props.sellPaperclips(this.props.paperclipPrice, this.props.delay, this.props.wire)
     
    }

    handleMouseEnter = () => {
        this.setState({
            isHovering: true
        })
    }

    handleMouseLeave = () => {
        this.setState({
            isHovering: false
        })
    }

    renderHoverComponent = () => {
        if(this.state.isHovering){
            return(
                <Hover>
                    {this.props.paperClips}
                </Hover>
            )
        }
       
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.paperClips !== this.props.paperClips){
            let hour = this.props.time;
            let min = +(this.props.time / 60).toFixed();
            let sec = this.props.time - min*60;
            if(this.props.paperClips === 500){
                this.props.sendCommentToTerminal(`500 clips created in ${min} minutes ${sec} seconds`);
            }
        }
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="general">
               <div 
                    onMouseEnter={this.handleMouseEnter} 
                    onMouseLeave={this.handleMouseLeave} 
                    className="general-text"> 
                    Paperclips : {this.props.paperClips} 
                </div>
                {this.renderHoverComponent()}
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
            paperClips: state.business.paperClips,
            funds: state.business.funds,
            unsoldInventory: state.business.unsoldInventory,
            paperclipPrice: state.business.paperclipPrice,
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
