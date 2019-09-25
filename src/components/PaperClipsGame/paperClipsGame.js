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
        window.addEventListener('scroll', this.mouseScroll);
    };

    /**
    * Markup
    */

    render(){
        return(
            <div className="paper-clips-game">
                <Terminal/>
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
            closeDropdowns: bindActionCreators(Actions.closeDropdowns, dispatch)
        };
    }
)(PaperClipsGame);
