/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

import {
    Route
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Components
*/

import Button from '../../../library/Button/button';

/**
* Styles
*/

import './sendMessage.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    images
} from '../../../constants/images';

/**
* SendMessage component definition and export
*/

export const SendMessage = (props) => {

    /**
    * Methods
    */
    
   
    /**
    * Markup
    */

    return(
        <div className="sendMessage">
            <div className="sendMessage-wrapper">
                <input placeholder="Full Name"/>
                <input placeholder="Email"/>
                <input placeholder="Contact"/>
                <input placeholder="Company"/>
            </div>
            <textarea placeholder="Your Message" rows="2"></textarea>
            <Button 
                className={"sendMessage-submit"}
                outerDivClassName={"sendMessage-outerDiv-submit"}
                text={"Submit"}
            />
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            images: Selectors.getImagesState(state),
        };
    },
    (dispatch) => {
        return {
            initImages: bindActionCreators(Actions.initImages, dispatch),
        };
    }
)(SendMessage);
 