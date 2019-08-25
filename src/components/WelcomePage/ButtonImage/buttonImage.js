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

import {
    Link
 } from 'react-router-dom';

/**
 * Components
 */


/**
 * Styles
 */

import './buttonImage.scss';

/**
 * Actions
 */

import * as Actions from '../../../actions';

/**
 * WelcomePage component definition and export
 */

class ButtonImage extends Component {

    /**
    * Constructor
    */

    constructor (){
        super();
    }
    
    /**
    * Markup
    */

    renderText = () => {
        return(
            <div className="textUnderButtonImages">
                {this.props.text}
            </div>
        )
    }
    renderButtonImage = () => {
        if(this.props.isAuthenticated){
            return (
                <div className="buttonImage">
                    <Link to={this.props.pathname}>
                        {this.props.children}
                    </Link>
                </div>
            )
        }else{
            return(
                <div className="buttonImage">
                    <div onClick={() => this.props.newUser(false)}>
                        {this.props.children}
                    </div>
                </div>
            )
        }
    }

    render(){
        return(
            <div >
                {this.renderButtonImage()}
                {this.renderText()}
            </div>
        );
    }
}
export default connect(
    (state) => {
        return {
            isAuthenticated: state.auth.token !== null,
        };
     },
     (dispatch) => {
        return {
         newUser: bindActionCreators(Actions.userSignUp, dispatch)
        };
     }
 )(ButtonImage);
