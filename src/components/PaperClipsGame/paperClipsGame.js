/**
* Libraries
*/

import React,{
    Component
} from 'react';

/**
* Components
*/

import Terminal from './Terminal/terminal';
import Game from './Game/game';

/**
* Styles
*/

import './paperClipsGame.scss';
import backdrop from './SmallParts/Backdrop/backdrop';

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

export default PaperClipsGame;
