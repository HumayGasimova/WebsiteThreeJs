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
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

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
            <div className="feedbacks-section">{props.feedbacks.map((el, i) => {
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

    const renderDots = () => {
        return(
            <div className="feedbacks-dots">
                {props.dots.map((el,i) => {
                    return(
                        <div 
                            key={i} 
                            // className={el.chosen ? "feedbacks-dot-chosen": "feedbacks-dot"}
                            className="feedbacks-dot"
                            onClick={() => chooseFeedback(i)}
                        />
                    )
                })}
            </div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="feedbacks" >
          {renderFeedbacks()}
          {renderDots()}
        </div>
    );
}

export default connect(
    (state) => {
        return {
            dots: Selectors.getDotsState(state)
        };
    },
    (dispatch) => {
        return {
            // startChangingFeedbacks: bindActionCreators(Actions.startChangingFeedbacks, dispatch),
        };
    }
)(Feedbacks);
 