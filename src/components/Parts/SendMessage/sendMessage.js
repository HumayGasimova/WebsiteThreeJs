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

import Image from '../../SmallParts/Image/image';

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
                <input/>
                <input/>
                <input/>
                <input/>
            </div>
            <textarea></textarea>
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
 