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

import './achievements.scss';

/**
* Components
*/

import Achievement from '../../SmallParts/Achievement/achievement';

/**
* Actions
*/

// import * as Actions from '../../../actions';

/**
* Selectors
*/

// import * as Selectors from '../../../reducers/selectors';

/**
* Achievements component definition and export
*/

export const Achievements = (props) => {

    /**
    * Methods
    */

  

    /**
    * Markup
    */

    return(
        <div className="achievements">
            <div className="achievements-feedbacks-paragraph">
                <div className="achievements-feedbacks-text-line1">ACHIEVEMENTS</div>
                <div className="achievements-feedbacks-text-line2">Our achievements</div>
                <div className="achievements-feedbacks-text-line3"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
            </div>
            <div className="achievements-wrapper">
                <div className="achievements-achievment1">
                    <Achievement
                        achievementValue={400}
                        achievementText={"Customers are satisfied with our professional support"}
                    />
                </div>
                <div className="achievements-achievment2">
                    <Achievement
                        achievementValue={1000}
                        achievementText={"Amazing preset options to be mixed and combined"}
                    />
                </div>
                <div className="achievements-achievment3">
                    <Achievement
                        achievementValue={8000}
                        achievementText={"Average response time on live chat support channel"}
                    />
                </div>
            </div>
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
)(Achievements);
 