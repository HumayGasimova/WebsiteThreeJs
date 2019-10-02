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
* Utility
*/

import * as Utility from '../../../../utility';

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
    renderShortNumber = () => {
        if(this.props.paperClips < 1000){
            return (this.props.paperClips).toFixed(1);
        }
        if(this.props.paperClips < 1000000){
            let length = Utility.getlength(this.props.paperClips);
            
            if(length === 4){
                length -= 1;
            }
            if(length === 5){
                length -= 2;
            }
            if(length === 6){
                length -= 3;
            }
            
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " thousand"; 
        }
        if(this.props.paperClips < 1000000000){
            let length = Utility.getlength(this.props.paperClips);
            if(length === 7){
                length -= 1;
            }
            if(length === 8){
                length -= 2;
            }
            if(length === 9){
                length -= 3;
            }
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " million"; 
        }
        if(this.props.paperClips < 1000000000000){
            let length = Utility.getlength(this.props.paperClips);
            if(length === 10){
                length -= 1;
            }
            if(length === 11){
                length -= 2;
            }
            if(length === 12){
                length -= 3;
            }
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " milliard"; 
        }
        if(this.props.paperClips < 1000000000000000){
            let length = Utility.getlength(this.props.paperClips);
            if(length === 13){
                length -= 1;
            }
            if(length === 14){
                length -= 2;
            }
            if(length === 15){
                length -= 3;
            }
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " billion"; 
        }
        if(this.props.paperClips < 1000000000000000000){
            let length = Utility.getlength(this.props.paperClips);
            if(length === 16){
                length -= 1;
            }
            if(length === 17){
                length -= 2;
            }
            if(length === 18){
                length -= 3;
            }
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " billiard"; 
        }
        if(this.props.paperClips < 1000000000000000000000){
            let length = Utility.getlength(this.props.paperClips);
            if(length === 19){
                length -= 1;
            }
            if(length === 20){
                length -= 2;
            }
            if(length === 21){
                length -= 3;
            }
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " trillion"; 
        }
        if(this.props.paperClips < 1000000000000000000000000){
            let length = Utility.getlength(this.props.paperClips);
            if(length === 22){
                length -= 1;
            }
            if(length === 23){
                length -= 2;
            }
            if(length === 24){
                length -= 3;
            }
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " trilliard"; 
        }
        if(this.props.paperClips < 1000000000000000000000000000){
            let length = Utility.getlength(this.props.paperClips);
            if(length === 25){
                length -= 1;
            }
            if(length === 26){
                length -= 2;
            }
            if(length === 27){
                length -= 3;
            }
            let denominator = Utility.getDenominator(length);
            let shortNumber = this.props.paperClips/denominator;
            return shortNumber.toFixed(1) + " quadrillion"; 
        }
    }

    renderHoverComponent = () => {
        if(this.state.isHovering){
            return(
                <Hover>
                    {this.renderShortNumber()}
                </Hover>
            )
        }
       
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
            // if(this.props.paperClips === 1500){
            //     this.props.sendCommentToTerminal(`1,500 ${comment}`);
            // }
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
               <div 
                    onMouseEnter={this.handleMouseEnter} 
                    onMouseLeave={this.handleMouseLeave} 
                    className="general-text"> 
                    Paperclips : {Utility.commaSeparator(this.props.paperClips)}
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
