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
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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
        let state = JSON.parse(localStorage.getItem('store')) === null ? this.props.store : {...JSON.parse(localStorage.getItem('store')), comments: ['Welcome to Universal Paperclips']};
        console.log("GGG", {...JSON.parse(localStorage.getItem('store')), comments: ['Welcome to Universal Paperclips']})
        setInterval(()=>{
            this.props.startTimer();
        }, 1000);
        window.addEventListener('scroll', this.mouseScroll);

        setInterval(()=>{
            let jsonStore = JSON.stringify(this.props.store)
            localStorage.setItem('store',jsonStore)
        }, 5000);

        this.props.stateFromLocalStorage(state)
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
            store: state.business,

        };
    },
    (dispatch) => {
        return {
            closeDropdowns: bindActionCreators(Actions.closeDropdowns, dispatch),
            startTimer: bindActionCreators(Actions.startTimer, dispatch),
            stateFromLocalStorage: bindActionCreators(Actions.stateFromLocalStorage, dispatch),
        };
    }
)(PaperClipsGame);
