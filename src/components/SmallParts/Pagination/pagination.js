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
    withRouter
} from 'react-router-dom';

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
        props.startChoosingPage(props.page, id);
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

    const handleOnClickLeftArrow = (direction) => {
        switch(props.page){
            case 'portfolio':
                return props.startChoosingPortfolioPageOnArrowButton(direction);
            case 'portfolioSingle':
                return props.startChoosingPortfolioSinglePageOnArrowButton(direction);
        }
    }

    const handleOnClickRightArrow = (direction) => {
        switch(props.page){
            case 'portfolio':
                return props.startChoosingPortfolioPageOnArrowButton(direction);
            case 'portfolioSingle':
                return props.startChoosingPortfolioSinglePageOnArrowButton(direction);
        }
    }
  
    useEffect(() => {
        props.startInitPagination(props.page);
        if(props.page === "portfolioSingle"){
            props.choosePage(props.location.state.id)
        }
        props.disablePaginationArrowButton("arrowLeft");
        props.disablePaginationArrowButton("arrowRight");
    }, []);

    /**
    * Markup
    */

    return(
        <div className="pagination">
            <Button 
                className="pagination-button"
                onClick={() => handleOnClickLeftArrow("arrowLeft")}
                disabled={props.padinationArrowLeft}
            >
                <FontAwesomeIcon icon={faChevronLeft} size="sm" className="icon-arrow-left"/>
            </Button> 
            {renderPageNumbers()}
            <Button 
                className="pagination-button"
                onClick={() => handleOnClickRightArrow("arrowRight")}
                disabled={props.padinationArrowRight}
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
            padinationArrowLeft: Selectors.getPadinationArrowLeftState(state),
            padinationArrowRight: Selectors.getPadinationArrowRightState(state),
        };
    },
    (dispatch) => {
        return {
            startInitPagination: bindActionCreators(Actions.startInitPagination, dispatch),
            startChoosingPage: bindActionCreators(Actions.startChoosingPage, dispatch),
            startChoosingPortfolioPageOnArrowButton: bindActionCreators(Actions.startChoosingPortfolioPageOnArrowButton, dispatch),
            startChoosingPortfolioSinglePageOnArrowButton: bindActionCreators(Actions.startChoosingPortfolioSinglePageOnArrowButton, dispatch),
            disablePaginationArrowButton: bindActionCreators(Actions.disablePaginationArrowButton, dispatch),
            choosePage: bindActionCreators(Actions.choosePage, dispatch),
        };
    }
)(withRouter(Pagination));
 