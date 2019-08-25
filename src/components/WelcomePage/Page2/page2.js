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
 * Actions
 */

import * as Actions from '../../../actions';

/**
 * WelcomePage component definition and export
 */

class Page2 extends Component {

    /**
    * Constructor
    */

   constructor(props) {
        super(props);
        this.state = {
        showImageButtons: true
        }
    }
    
    showLoginForm = () => {
        this.props.newUser(false);
    }

    /**
    * Markup
    */

    render(){
        return(
            <div className="page2">
                <div 
                    className={"login-page2"}
                    onClick={this.showLoginForm}
                >
                    Login
                </div>
            </div>
        );
    }
}

export default connect(
  null,
    (dispatch) => {
       return {
        newUser: bindActionCreators(Actions.userSignUp, dispatch)
       };
    }
 )(Page2);
