/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Styles
*/

import './main.scss';

/**
* Components
*/

import Toolbar from './Parts/Toolbar/toolbar';
import MovingBubbles from './Parts/MovingBubbles/movingBubbles';
import OtherProjects from './Parts/OtherProjects/otherProjects';
import Services from './Parts/Services/services';
import Newsletter from './Parts/Newslatter/newsletter';
import Portfolio from './Parts/Portfolio/portfolio';
import CustomerFeedbacks from './Parts/CustomerFeedbacks/customerFeedbacks';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Main component definition and export
*/

export const Main = (props) => {

    /**
    * Methods
    */

  

    /**
    * Markup
    */

    return(
        <div className="main">
            <Toolbar/>
            <MovingBubbles/>
            <OtherProjects/>
            <Services/>
            <Newsletter/>
            <Portfolio/>
            <CustomerFeedbacks/>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedback: Selectors.getFeedbackState(state),
            // dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
            // stopChangingFeedbacks: bindActionCreators(Actions.stopChangingFeedbacks, dispatch)
        };
    }
)(Main);
 