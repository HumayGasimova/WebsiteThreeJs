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
* Actions
*/

import * as Actions from '../../../actions';

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

    const select = React.createRef();

    const [xCoordinate, setXCoordinate] = useState(false);
    const [feedbacksDivRefPosition, setFeedbacksDivRefPosition] = useState(0);
    
    const [cardPosition1, setCardPosition1] = useState({left: 0, id: 0});
    const [cardPosition2, setCardPosition2] = useState({left: 0, id: 0});
    const [cardPosition3, setCardPosition3] = useState({left: 0, id: 0});
    const [cardPosition4, setCardPosition4] = useState({left: 0, id: 0});
    const [cardPosition5, setCardPosition5] = useState({left: 0, id: 0});
    
    /**
    * Methods
    */

    useEffect(()=>{
        const feedbacksDivRef = select.current.getBoundingClientRect();
        setFeedbacksDivRefPosition(feedbacksDivRef.left);

        let feedbacksDiv = document.getElementById("feedbacks");
        let isDown = false;
        let startX;
        let scrollLeft;

        // card.addEventListener('dragstart', dragStart);
        // card.addEventListener('dragend', dragEnd);

        feedbacksDiv.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - feedbacksDiv.offsetLeft;
            scrollLeft = feedbacksDiv.scrollLeft;
            // console.log("mouseDown", startX);
        });
        feedbacksDiv.addEventListener('mouseleave', () => {
            isDown = false
            // console.log("mouseLeave");
        });
        feedbacksDiv.addEventListener('mouseup', () => {
            isDown = false
            // console.log("mouseUp");
        });
        feedbacksDiv.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - feedbacksDiv.offsetLeft;
            const walk = x - startX;
            feedbacksDiv.scrollLeft = scrollLeft - walk;
            setXCoordinate(x);
            // feedbacksDiv.scrollLeft = (scrollLeft - walk) * 4; // scrolling with speed
            // console.log("mouseMove", isDown, {scrollLeft,startX,x,walk});
            // console.log(feedbacksDiv.offsetLeft)
        });

        if(cardPosition1.left < 0 && cardPosition1.left > -200){
            props.chooseDotOnScroll(cardPosition1.id);
        }
        if(cardPosition2.left < 0 && cardPosition2.left > -200){
            props.chooseDotOnScroll(cardPosition2.id);
        }
        if(cardPosition3.left < 0 && cardPosition3.left > -200){
            props.chooseDotOnScroll(cardPosition3.id);
        }
        if(cardPosition4.left < 0 && cardPosition4.left > -200){
            props.chooseDotOnScroll(cardPosition4.id);
        }
        if(cardPosition5.left < 0 && cardPosition5.left > -200){
            props.chooseDotOnScroll(cardPosition5.id);
        }
        console.log(feedbacksDivRefPosition, cardPosition1, cardPosition2, cardPosition3, cardPosition4, cardPosition5)
    }, [cardPosition1])

    const leftOfFeedbackDiv = (left, width, cardId) => {
        // console.log(left)
        switch(cardId) {
            case 1:
                return setCardPosition1({left, id: cardId});
            case 2:
                return setCardPosition2({left, id: cardId});
            case 3:
                return setCardPosition3({left, id: cardId});
            case 4:
                return setCardPosition4({left, id: cardId});
            case 5:
                return setCardPosition5({left, id: cardId});
        }
        // console.log({left, width, cardId})
    }

    const renderFeedbacks = () => {
        return(
            <div className="feedbacks-section" id="feedbacks">{props.feedbacks.map((el, i) => {
                    return(
                        <Feedback
                            key={i}
                            cardId={el.cardId}
                            id={el.id}
                            image={el.image}
                            icon={el.icon}
                            feedback={el.feedback}
                            name={el.name}
                            position={el.position}
                            getLeft={(left, width, cardId) => leftOfFeedbackDiv(left, width, cardId)}
                            coordinateX={xCoordinate}
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
                            className={el.chosen ? "feedbacks-dot-chosen": "feedbacks-dot"}
                            // onClick={() => chooseFeedback(i)}
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
        <div className="feedbacks" ref={select}>
          {renderFeedbacks()}
          {renderDots()}
          {/* {console.log("coord")} */}
          {/* {console.log("rectPosition",{cardPosition1, cardPosition2, cardPosition3, cardPosition4, cardPosition5})} */}
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
            chooseDotOnScroll: bindActionCreators(Actions.chooseDotOnScroll, dispatch),
        };
    }
)(Feedbacks);
 