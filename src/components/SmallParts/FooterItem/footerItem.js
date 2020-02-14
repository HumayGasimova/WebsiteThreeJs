/**
* Libraries
*/

import React from 'react';

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';


/**
* Styles
*/

import './footerItem.scss';

/**
* Icons
*/

import { 
    faCaretRight  
} from '@fortawesome/free-solid-svg-icons'

/**
* FooterItem component definition and export
*/

export const FooterItem = (props) => {

    /**
    * Methods
    */

    const renderLinks = () => {
        return(
            <div className="footer-item-links">{props.links.map((el, i) => {
                return(
                    <div key={i} className="footer-item-links-link">
                        <FontAwesomeIcon icon={faCaretRight} size="lg" className="icon-arrow"/>
                        <a 
                            href={`/${el.path}`}
                        >
                            {el.link}
                        </a>
                    </div>
                )
            })}</div>
        )
    }

    /**
    * Markup
    */

    return(
        <div className="footer-item">
            <div className="footer-item-header">{props.header}</div>
            {renderLinks()}
        </div>
    );
}

export default FooterItem;
 