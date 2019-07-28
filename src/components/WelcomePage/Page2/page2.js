/**
 * Libraries
 */

import React,{
    Component
} from 'react';

import {
    NavLink
 } from 'react-router-dom';

/**
 * Components
 */

import ButtonImage from '../ButtonImage/buttonImage';

/**
 * Pictures
 */

import ticTacToe3x3 from '../../../Image/3x3TicTacToe.png';
import ticTacToe4x4 from '../../../Image/4x4TicTacToe.png';
/**
 * Styles
 */

import './page2.scss';

/**
 * WelcomePage component definition and export
 */

class Page2 extends Component {

    /**
    * Constructor
    */

    constructor (){
        super();
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div className="page2">
                <NavLink to={{ pathname: '/tictactoe'}}>
                    <ButtonImage>
                        <img src={ticTacToe3x3} alt="ticTacToe3x3"/>
                    </ButtonImage>
                </NavLink>
                <NavLink to={{ pathname: '/tictactoe4x4'}}>
                    <ButtonImage>
                        <img src={ticTacToe4x4} alt="ticTacToe4x4"/>
                    </ButtonImage>
                </NavLink>
            </div>
        );
    }
}

export default Page2;
