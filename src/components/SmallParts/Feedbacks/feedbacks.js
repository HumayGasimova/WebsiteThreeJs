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
    const [addClassNameCard1, setAddClassNameCard1] = useState('');
    const [addClassNameCard2, setAddClassNameCard2] = useState('');
    const [addClassNameCard3, setAddClassNameCard3] = useState('');
    const [addClassNameCard4, setAddClassNameCard4] = useState('');
    const [addClassNameCard5, setAddClassNameCard5] = useState('');
    const [addClassNameCard6, setAddClassNameCard6] = useState('');
    const [addClassNameCard7, setAddClassNameCard7] = useState('');

    const [cardPosition1, setCardPosition1] = useState({left: 0, width:0, id: 0});
    const [cardPosition2, setCardPosition2] = useState({left: 0, width:0, id: 0});
    const [cardPosition3, setCardPosition3] = useState({left: 0, width:0, id: 0});
    const [cardPosition4, setCardPosition4] = useState({left: 0, width:0, id: 0});
    const [cardPosition5, setCardPosition5] = useState({left: 0, width:0, id: 0});
    const [cardPosition6, setCardPosition6] = useState({left: 0, width:0, id: 0});
    const [cardPosition7, setCardPosition7] = useState({left: 0, width:0, id: 0});

    /**
    * Methods
    */

    useEffect(()=>{
        // const feedbacksDivRef = select.current.getBoundingClientRect();

        let feedbacksDiv = document.getElementById("feedbacks");
        let isDown = false;
        let startX;
        let scrollLeft;
        let walk;

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
            walk = x - startX;
            feedbacksDiv.scrollLeft = scrollLeft - walk;
            setXCoordinate(x);
            // feedbacksDiv.scrollLeft = (scrollLeft - walk) * 4; // scrolling with speed
            // console.log("mouseMove", isDown, {scrollLeft,startX,x,walk});
            // console.log("mouseMove", isDown, {scrollLeft,startX,x,walk});
            // console.log(feedbacksDiv.offsetLeft)
        });
        if(cardPosition1.left < -600){
            // if(walk < 0 && addClassNameCard1 === ''){
                setAddClassNameCard1("card1-move-to-right");
                console.log("KK")
            // }
            // if(addClassNameCard1 === 'card1-move-to-right'){
            //     setAddClassNameCard1("card1-move-to-right-updated");
            // }
            // console.log("KKK")
            // if(addClassNameCard1 === 'card1-move-to-right-updated'){
            //     setAddClassNameCard1("card1-move-to-right");
            // }
        }

        if(cardPosition2.left < -600){
            // if(addClassNameCard2 === ''){
                setAddClassNameCard2("card2-move-to-right");
            // }
            // if(addClassNameCard2 === 'card2-move-to-right'){
            //     setAddClassNameCard2("card2-move-to-right-updated");
            // }
            // if(addClassNameCard2 === 'card2-move-to-right-updated'){
            //     setAddClassNameCard2("card2-move-to-right");
            // }
        }

        if(cardPosition3.left < -600){
           
            // if(addClassNameCard3 === ''){
                setAddClassNameCard3("card3-move-to-right");
            // }
            // if(addClassNameCard3 === 'card3-move-to-right'){
            //     setAddClassNameCard3("card3-move-to-right-updated");
            // }
            // if(addClassNameCard3 === 'card3-move-to-right-updated'){
            //     setAddClassNameCard3("card3-move-to-right");
            // }
        }

        if(cardPosition4.left < -600){
            // if(addClassNameCard4 === ''){
                setAddClassNameCard4("card4-move-to-right");
            // }
            // if(addClassNameCard4 === 'card4-move-to-right'){
            //     setAddClassNameCard4("card4-move-to-right-updated");
            // }
            // if(addClassNameCard4 === 'card4-move-to-right-updated'){
            //     setAddClassNameCard4("card4-move-to-right");
            // }
        }

        if(cardPosition5.left < -600){
            // if(addClassNameCard5 === ''){
                setAddClassNameCard5("card5-move-to-right");
            // }
            // if(addClassNameCard5 === 'card5-move-to-right'){
            //     setAddClassNameCard1("card5-move-to-right-updated");
            // }
            // if(addClassNameCard5 === 'card5-move-to-right-updated'){
            //     setAddClassNameCard5("card5-move-to-right");
            // }
        }

        if(cardPosition6.left < -600){
            // if(addClassNameCard6 === ''){
                setAddClassNameCard6("card6-move-to-right");
            // }
            // if(addClassNameCard6 === 'card6-move-to-right'){
            //     setAddClassNameCard6("card6-move-to-right-updated");
            // }
            // if(addClassNameCard6 === 'card6-move-to-right-updated'){
            //     setAddClassNameCard6("card6-move-to-right");
            // }
        }

        if(cardPosition7.left < -600){
            // if(addClassNameCard7 === ''){
                setAddClassNameCard7("card7-move-to-right");
            // }
            // if(addClassNameCard7 === 'card7-move-to-right'){
            //     setAddClassNameCard1("card7-move-to-right-updated");
            // }
            // if(addClassNameCard7 === 'card7-move-to-right-updated'){
            //     setAddClassNameCard7("card7-move-to-right");
            // }
        }
        
        if(cardPosition1.left < feedbacksDiv.offsetLeft/2 && cardPosition1.left > feedbacksDiv.offsetLeft/2-200){
            props.chooseDotOnScroll(cardPosition2.id);
        }
        if(cardPosition2.left < feedbacksDiv.offsetLeft/2 && cardPosition2.left > feedbacksDiv.offsetLeft/2-200){
            props.chooseDotOnScroll(cardPosition3.id);
        }
        if(cardPosition3.left < feedbacksDiv.offsetLeft/2 && cardPosition3.left > feedbacksDiv.offsetLeft/2-200){
            props.chooseDotOnScroll(cardPosition4.id);
        }
        if(cardPosition4.left < feedbacksDiv.offsetLeft/2 && cardPosition4.left > feedbacksDiv.offsetLeft/2-200){
            props.chooseDotOnScroll(cardPosition5.id);
        }
        if(cardPosition5.left < feedbacksDiv.offsetLeft/2 && cardPosition5.left > feedbacksDiv.offsetLeft/2-200){
            props.chooseDotOnScroll(cardPosition6.id);
        }
        if(cardPosition6.left < feedbacksDiv.offsetLeft/2 && cardPosition6.left > feedbacksDiv.offsetLeft/2-200){
            props.chooseDotOnScroll(cardPosition1.id);
        }
        if(cardPosition6.left < feedbacksDiv.offsetLeft/2 && cardPosition6.left > feedbacksDiv.offsetLeft/2-200){
            props.chooseDotOnScroll(cardPosition7.id);
        }
    }, [cardPosition1, addClassNameCard1])

    const leftOfFeedbackDiv = (left, width, cardId) => {
      
        switch(cardId) {
            case 1:
                console.log({left, width, cardId})
                return setCardPosition1({left, width, id: cardId});
            case 2:
                // console.log({left, width, cardId})
                return setCardPosition2({left, width, id: cardId});
            case 3:
                return setCardPosition3({left, width, id: cardId});
            case 4:
                return setCardPosition4({left, width, id: cardId});
            case 5:
                return setCardPosition5({left, width, id: cardId});
            case 6:
                return setCardPosition6({left, width, id: cardId});
            case 7:
                // console.log({left, width, cardId})
                return setCardPosition7({left, width, id: cardId});
        }
       
    }

    const renderFeedbacks = () => {
        return(
            <div className="feedbacks-section" id="feedbacks">{props.feedbacks.map((el, i) => {
                let additionalClassName = '';
                switch(el.id){
                    case 1:
                        additionalClassName = addClassNameCard1;
                        break;
                    case 2:
                        additionalClassName = addClassNameCard2;
                        break;
                    case 3:
                        additionalClassName = addClassNameCard3;
                        break;
                    case 4:
                        additionalClassName = addClassNameCard4;
                        break;
                    case 5:
                        additionalClassName = addClassNameCard5;
                        break;
                    case 6:
                        additionalClassName = addClassNameCard6;
                        break;
                    case 7:
                        additionalClassName = addClassNameCard7;
                    // default:
                    //     additionalClassName = "";
                    //     break;
                }

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
                            className={additionalClassName}
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
 