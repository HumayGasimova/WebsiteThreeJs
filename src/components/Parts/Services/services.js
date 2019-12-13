/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

import {
    withRouter
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

import './services.scss';

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
* Services component definition and export
*/

export const Services = (props) => {

    /**
    * Methods
    */

    const serviceOnClick = (page) => {
        props.history.push(`/${page}`)
    }

    const renderServicesCards = () => {
        return (
            <div className="services-cards">
                {props.services.map((el, i) => {
                    return(
                        <Service 
                            key={i}
                            header={el.header}
                            text={el.text}
                            icon={el.icon}
                            cardId={`card${i+1}`}
                            show={el.show}
                            onClick={() => serviceOnClick(el.path)}
                        />
                    )
                })}
            </div>
        )
    }

    useEffect(()=>{
        props.initServices(serviceCards);
        return () => props.initServices([]);
    }, [])

    /**
    * Markup
    */

    return(
        <div className="services">
            <h1>Services</h1>
            <div>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            {renderServicesCards()}
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
)(withRouter(Services));
 