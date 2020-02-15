/**
* Libraries
*/

import React from 'react';

/**
* Styles
*/

import './services.scss';

/**
* Components
*/

import Service from '../../SmallParts/Service/service';

/**
* Constants
*/

import {
    serviceCards
} from '../../../constants/serviceCards';

/**
* Services component definition and export
*/

export const Services = () => {

    /**
    * Methods
    */

    const renderServices = () => {
        return(
            <div className="services-cards">{
                serviceCards.map((el,i)=>{
                return(
                    <Service
                        key={i}
                        icon={el.icon}
                        header={el.header}
                        text={el.text}
                        hexagonStyle={el.hexagonStyle}
                    />
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="services">
            <div className="services-paragraph">
                <div className="services-text-line1">OUR SERVICES</div>
                <div className="services-text-line2">Web design, bring your ideas to life</div>
                <div className="services-text-line3"> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. 
                </div>
            </div>
            {renderServices()}
        </div>
    );
}

export default Services;
 