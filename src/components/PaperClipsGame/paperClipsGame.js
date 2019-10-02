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

import Terminal from './Terminal/terminal';
import Game from './Game/game';
import Paperclips from './Parts/Paperclips/paperclips';

/**
* Styles
*/

import './paperClipsGame.scss';

/**
* Actions
*/

import * as Actions from '../../actions';

/**
* PaperClipsGame component definition and export
*/

class PaperClipsGame extends Component {

    /**
    * Constructor
    */

    constructor (props){
        super(props);
    }
    
    /**
    * Methods
    */

    mouseScroll = () => {
        this.props.closeDropdowns();
    }

    componentDidMount = () => {
        setInterval(()=>{
            this.props.startTimer();
        }, 1000);
        window.addEventListener('scroll', this.mouseScroll);
    };

    /**
    * Markup
    */

    render(){
        return(
            <div className="paper-clips-game">
                <Terminal/>
                <Paperclips/>
                <Game/>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            // paperClips: state.business.paperClips,

        };
    },
    (dispatch) => {
        return {
            closeDropdowns: bindActionCreators(Actions.closeDropdowns, dispatch),
            startTimer: bindActionCreators(Actions.startTimer, dispatch)
        };
    }
)(PaperClipsGame);
