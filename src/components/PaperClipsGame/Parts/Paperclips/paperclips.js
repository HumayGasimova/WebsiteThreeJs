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

import Hover from '../../SmallParts/Hover/hover';

/**
* Styles
*/

import './paperclips.scss';

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
* Constants
*/

import * as projectsToAdd from '../../../../constants/projectsToAdd';

/**
* Paperclips component definition and export
*/

export class Paperclips extends Component {

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
            let length = Utility.getLength(this.props.paperClips);
            
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
            let length = Utility.getLength(this.props.paperClips);
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
            let length = Utility.getLength(this.props.paperClips);
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
            let length = Utility.getLength(this.props.paperClips);
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
            let length = Utility.getLength(this.props.paperClips);
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
            let length = Utility.getLength(this.props.paperClips);
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
            let length = Utility.getLength(this.props.paperClips);
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
            let length = Utility.getLength(this.props.paperClips);
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
        
            if(this.props.paperClips === 100){
                this.props.sendCommentToTerminal(`100 ${comment}`);
            }
            if(this.props.paperClips === 300){
                this.props.sendCommentToTerminal(`300 ${comment}`);
            }
            if(this.props.paperClips === 500){
                this.props.sendCommentToTerminal(`500 ${comment}`);
            }
            if(this.props.paperClips === 1000){
                this.props.sendCommentToTerminal(`1,000 ${comment}`);
            }
            if(this.props.paperClips === 3000){
                this.props.sendCommentToTerminal(`3,000 ${comment}`);
            }
            if(this.props.paperClips === 5000){
                this.props.sendCommentToTerminal(`5,000 ${comment}`);
            }
            if(this.props.paperClips === 7000){
                this.props.sendCommentToTerminal(`7,000 ${comment}`);
            }
            if(this.props.paperClips === 10000){
                this.props.sendCommentToTerminal(`10,000 ${comment}`);
            }
            if(this.props.paperClips === 100000){
                this.props.sendCommentToTerminal(`100,000 ${comment}`);
            }
            if(this.props.paperClips === 5000 && this.props.completeGameIsThrown === false){
                this.props.addProject(projectsToAdd.CompleteGame);
                this.props.toggleThrownProject('completeGame', true);
            }
        }

        if(prevProps.countdown !== this.props.countdown){
            if(this.props.countdown === 0){
                this.props.showEnding(false);
                this.props.lastComents()
                this.props.stopSendingLastComments();
            }
        }

    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="paperclips">
               {this.props.isGameOver ? 
                    <div className="paperclips-text"> 
                        Countdown : {Utility.commaSeparator(this.props.countdown)}
                    </div> : 
                   <div 
                        onMouseEnter={this.handleMouseEnter} 
                        onMouseLeave={this.handleMouseLeave} 
                        className="paperclips-text"> 
                        Paperclips : {Utility.commaSeparator(this.props.paperClips)}
                    </div>
                }
                {this.renderHoverComponent()}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            paperClips: Selectors.getPaperclipsState(state),
            funds: Selectors.getFundsState(state),
            unsoldInventory: Selectors.getUnsoldInventoryState(state),
            paperclipPrice: Selectors.getPaperclipPriceState(state),
            delay: Selectors.getDelayState(state),
            wire: Selectors.getWireState(state),
            makePaperclipDisabled: Selectors.getMakePaperclipDisabledState(state),
            time: Selectors.getTimeState(state),
            countdown: Selectors.getCountdownState(state),
            isGameOver: Selectors.getIsGameOverState(state),
            completeGameIsThrown: Selectors.getCompleteGameIsThrownState(state),
        };
    },
    (dispatch) => {
        return {
            makePaperclip: bindActionCreators(Actions.makePaperclip, dispatch),
            sellPaperclips: bindActionCreators(Actions.sellPaperclips, dispatch),
            sendCommentToTerminal: bindActionCreators(Actions.sendCommentToTerminal, dispatch),
            showEnding: bindActionCreators(Actions.showEnding, dispatch),
            lastComents: bindActionCreators(Actions.lastComents, dispatch),
            stopSendingLastComments: bindActionCreators(Actions.stopSendingLastComments, dispatch),
            addProject: bindActionCreators(Actions.addProject, dispatch),
            toggleThrownProject: bindActionCreators(Actions.toggleThrownProject, dispatch),
            countdownOnClick: bindActionCreators(Actions.countdownOnClick, dispatch),
        };
    }
)(Paperclips);
