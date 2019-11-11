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
import Title from './Title/title'

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
        let state = JSON.parse(localStorage.getItem('store')) === null ? this.props.store : {...JSON.parse(localStorage.getItem('store')), comments: ['Welcome to Universal Paperclips']};
   
        setInterval(()=>{
            let jsonStore = JSON.stringify(this.props.store)
            localStorage.setItem('store',jsonStore)
        }, 10000);

        setInterval(()=>{
            this.props.startTimer();
        }, 1000);
        window.addEventListener('scroll', this.mouseScroll);

        this.props.stateFromLocalStorage(state)
        if(state.chips.length > 0){
            switch(state.chips.length){
                case 1:
                    this.props.startAddingQOps("chip1");
                    break;
                case 2:
                    this.props.startAddingQOps("chip1");
                    this.props.startAddingQOps("chip2");
                    break;
                case 3:
                    this.props.startAddingQOps("chip1");
                    this.props.startAddingQOps("chip2");
                    this.props.startAddingQOps("chip3");
                    break;
                case 4:
                    this.props.startAddingQOps("chip1");
                    this.props.startAddingQOps("chip2");
                    this.props.startAddingQOps("chip3");
                    this.props.startAddingQOps("chip4");
                    break;
                case 5:
                    this.props.startAddingQOps("chip1");
                    this.props.startAddingQOps("chip2");
                    this.props.startAddingQOps("chip3");
                    this.props.startAddingQOps("chip4");
                    this.props.startAddingQOps("chip5");
                    break;
                case 6:
                    this.props.startAddingQOps("chip1");
                    this.props.startAddingQOps("chip2");
                    this.props.startAddingQOps("chip3");
                    this.props.startAddingQOps("chip4");
                    this.props.startAddingQOps("chip5");
                    this.props.startAddingQOps("chip6");
                    break;
                case 7:
                    this.props.startAddingQOps("chip1");
                    this.props.startAddingQOps("chip2");
                    this.props.startAddingQOps("chip3");
                    this.props.startAddingQOps("chip4");
                    this.props.startAddingQOps("chip5");
                    this.props.startAddingQOps("chip6");
                    this.props.startAddingQOps("chip7");
                    break;
                case 8:
                    this.props.startAddingQOps("chip1");
                    this.props.startAddingQOps("chip2");
                    this.props.startAddingQOps("chip3");
                    this.props.startAddingQOps("chip4");
                    this.props.startAddingQOps("chip5");
                    this.props.startAddingQOps("chip6");
                    this.props.startAddingQOps("chip7");
                    this.props.startAddingQOps("chip8");
                    break;
                case 9:
                    this.props.startAddingQOps("chip1");
                    this.props.startAddingQOps("chip2");
                    this.props.startAddingQOps("chip3");
                    this.props.startAddingQOps("chip4");
                    this.props.startAddingQOps("chip5");
                    this.props.startAddingQOps("chip6");
                    this.props.startAddingQOps("chip7");
                    this.props.startAddingQOps("chip8");
                    this.props.startAddingQOps("chip9");
                    break;
                case 10:
                    this.props.startAddingQOps("chip1");
                    this.props.startAddingQOps("chip2");
                    this.props.startAddingQOps("chip3");
                    this.props.startAddingQOps("chip4");
                    this.props.startAddingQOps("chip5");
                    this.props.startAddingQOps("chip6");
                    this.props.startAddingQOps("chip7");
                    this.props.startAddingQOps("chip8");
                    this.props.startAddingQOps("chip9");
                    this.props.startAddingQOps("chip10");
                    break;
            }
        }
    };

    /**
    * Markup
    */

    render(){
        return(  
            <div>
                <div className="paper-clips-game">
                    <Terminal/>
                    <Paperclips/>
                    <Game/>
                </div>
                <div className="title">
                    <Title/>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            store: state.business

        };
    },
    (dispatch) => {
        return {
            closeDropdowns: bindActionCreators(Actions.closeDropdowns, dispatch),
            startTimer: bindActionCreators(Actions.startTimer, dispatch),
            stateFromLocalStorage: bindActionCreators(Actions.stateFromLocalStorage, dispatch),
            startAddingQOps: bindActionCreators(Actions.startAddingQOps, dispatch),
        };
    }
)(PaperClipsGame);
