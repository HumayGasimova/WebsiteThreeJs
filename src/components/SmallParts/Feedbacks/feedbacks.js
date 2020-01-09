/**
* Libraries
*/

import React, {
    useEffect,
    useState
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

import './feedbacks.scss';

/**
* Components
*/

import Feedback from '../../SmallParts/Feedback/feedback';

/**
* Constants
*/

import {
    feedbacks
} from '../../../constants/feedbacks';

// import * as Selectors from '../../../reducers/selectors';

/**
* Images
*/

/**
* Feedbacks component definition and export
*/

export const Feedbacks = (props) => {
    
    /**
    * Methods
    */

    const renderFeedbacks = () => {
        return(
            <div className="feedbacks-section">{feedbacks.map((el, i) => {
                    return(
                        <Feedback
                            key={i}
                            image={el.image}
                            icon={el.icon}
                            feedback={el.feedback}
                            name={el.name}
                            position={el.position}
                        />
                    )
                })
            }</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="feedbacks" >
          {renderFeedbacks()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            // feedback: Selectors.getFeedbackState(state),
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
        };
    }
)(Feedbacks);
 