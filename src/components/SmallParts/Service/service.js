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

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Icons
*/

import { 
    faLaptopCode,
    faChartLine,
    faPaperPlane,
    faUniversity,
    faCameraRetro,
    faShoppingBag
} from '@fortawesome/free-solid-svg-icons'

/**
* Styles
*/

import './service.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Service component definition and export
*/

export const Service = (props) => {

    /**
    * State
    */

    const [isHovering, setIsHovering] = useState(false);

    /**
    * Methods
    */

    const handleMouseEnter = () => {
        setIsHovering(true);
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const renderIcon = () => {
        switch(props.icon) {
            case "faLaptopCode":
                return (<FontAwesomeIcon icon={faLaptopCode} size="lg" className="icon"/>);
            case "faChartLine":
                return (<FontAwesomeIcon icon={faChartLine} size="lg" className="icon"/>);
            case "faPaperPlane":
                return (<FontAwesomeIcon icon={faPaperPlane} size="lg" className="icon"/>);
            case "faUniversity":
                return (<FontAwesomeIcon icon={faUniversity} size="lg" className="icon"/>);
            case "faCameraRetro":
                return (<FontAwesomeIcon icon={faCameraRetro} size="lg" className="icon"/>);
            case "faShoppingBag":
                return (<FontAwesomeIcon icon={faShoppingBag} size="lg" className="icon"/>);
        }
    }

    const renderCard = () => {
        if(props.show){
            return(
                <div 
                    className="service"
                >
                    <div 
                        className={isHovering ? "service-icon-hover" : "service-icon"}
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave} 
                    >
                    {renderIcon()} 
                    </div>
                    <div 
                        className="service-inner-part"
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave} 
                        onClick={props.onClick}
                    >
                        <div className="service-inner-part-header">{props.header}</div>
                        <div className="service-inner-part-text">{props.text}</div>
                    </div>
                </div>
            )
        }
    }
    
    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        let el = document.getElementById(props.cardId);
        if(scrollHeight >= el.offsetTop - window.innerHeight/2 - 150 ){
            props.showCard(props.cardId);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /**
    * Markup
    */

    return(
        <div id={props.cardId} className={props.cardId}>
            {renderCard()}
        </div>
    );
}

export default connect(
    null,
    (dispatch) => {
        return {
            showCard: bindActionCreators(Actions.showCard, dispatch),
        };
    }
)(Service);
 