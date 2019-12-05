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

import Service from '../../SmallParts/Service/service';

/**
* Styles
*/

import './gallery.scss';

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
    serviceCards
} from '../../../constants/serviceCards';

/**
* Gallery component definition and export
*/

export const Gallery = (props) => {

    /**
    * Methods
    */

    const renderImages = () => {
        return (
            <div className="services-cards">
                {props.images.map((el, i) => {
                    return(
                        <Service 
                            key={i}
                            header={el.header}
                            text={el.text}
                            icon={el.icon}
                            cardId={`card${i+1}`}
                            show={el.show}
                        />
                    )
                })}
            </div>
        )
    }

    useEffect(()=>{
        props.initImagess(serviceCards);
    },[])
   
    /**
    * Markup
    */

    return(
        <div className="gallery">
            <h1>Gallery</h1>
            <div>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
                {renderImages()}
            <br/>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            services: Selectors.getServicesState(state),
        };
    },
    (dispatch) => {
        return {
            initServices: bindActionCreators(Actions.initServices, dispatch),
        };
    }
)(Gallery);
 