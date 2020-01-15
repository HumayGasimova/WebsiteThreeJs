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

import { 
    FontAwesomeIcon 
} from '@fortawesome/react-fontawesome';

/**
* Styles
*/

import './pagination.scss';

/**
* Icons
*/

import { 
    faChevronLeft,
    faChevronRight  
} from '@fortawesome/free-solid-svg-icons'

/**
* Components
*/

import Button from '../../../library/Button/button';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Pagination component definition and export
*/

export const Pagination = (props) => {

    /**
    * Methods
    */

    const paginationOnClick = (id) => {
        props.choosePage(id);
    }

    const renderPageNumbers = () => {
        return(
            <div className="pagination-items">{
                props.paging.map((el,i)=>{
                return(
                   <div 
                        key={i}
                        className={el.chosen ? "pagination-item-chosen" : "pagination-item"}
                        onClick={() => paginationOnClick(el.id)}
                   >
                       {i + 1}
                   </div>
                )
            })}</div>
        )
    }
  
    useEffect(() => {
        props.startInitPagination(props.page);
    }, [])
    /**
    * Markup
    */

    return(
        <div className="pagination">
            <Button 
                className="pagination-button"
                onClick={props.leftArrowOnClick}
            >
                <FontAwesomeIcon icon={faChevronLeft} size="sm" className="icon-arrow-left"/>
            </Button> 
            {renderPageNumbers()}
            <Button 
                className="pagination-button"
                onClick={props.rightArrowOnClick}
            >
                <FontAwesomeIcon icon={faChevronRight} size="sm" className="icon-arrow-right"/>
            </Button>
        </div>
    );
}

export default connect(
    (state) => {
        return {
            paging: Selectors.getPagingState(state),
        };
    },
    (dispatch) => {
        return {
            startInitPagination: bindActionCreators(Actions.startInitPagination, dispatch),
            choosePage: bindActionCreators(Actions.choosePage, dispatch),
        };
    }
)(Pagination);
 