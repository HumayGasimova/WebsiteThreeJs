/**
* Libraries
*/

import React, {
    useState,
    useEffect
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

import Toolbar from '../../Parts/Toolbar/toolbar';
import MovingBubbles from '../../Parts/MovingBubbles/movingBubbles';
import Footer from '../../Parts/Footer/footer';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Styles
*/

import './portfolioSinglePage.scss';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* PortfolioSinglePage component definition and export
*/

export const PortfolioSinglePage = (props) => {

    /**
    * State
    */

    /**
    * Methods
    */

    /**
    * Markup
    */

    return(
        <div className="portfolio-single-age">
            <Toolbar/>
            <MovingBubbles 
                mainHeader={"Portfolio"}
            />
           <Footer/>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            // menuButtonIsPressed: Selectors.getMenuButtonIsPressedState(state),
        };
    },
    (dispatch) => {
        return {
            // toggleMenuButton: bindActionCreators(Actions.toggleMenuButton, dispatch),
        };
    }
)(PortfolioSinglePage);
 