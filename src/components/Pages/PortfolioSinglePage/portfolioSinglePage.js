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

/**
* Components
*/

import Toolbar from '../../Parts/Toolbar/toolbar';
import MovingBubbles from '../../Parts/MovingBubbles/movingBubbles';
import Footer from '../../Parts/Footer/footer';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Styles
*/

import './portfolioSinglePage.scss';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* PortfolioSinglePage component definition and export
*/

export const PortfolioSinglePage = (props) => {

    /**
    * State
    */

    const [portfolioId, setPortfolioId] = useState(0)
    /**
    * Methods
    */

    useEffect(() => {
        let portfolioIdString = props.match.params.id;
        let portfolioId = portfolioIdString.slice(1, portfolioIdString.length);
        setPortfolioId(portfolioId);
        props.startInitPortfolioSingle(+portfolioId);
    }, [props.match.params.id])

    /**
    * Markup
    */

    return(
        <div className="portfolio-single-age">
            <Toolbar/>
            <MovingBubbles 
                mainHeader={`Portfolio #${portfolioId}`}
            />
            {/* <div>{props.singlePortfolio.id}</div> */}
           <Footer/>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            singlePortfolio: Selectors.getSinglePortfolioState(state),
        };
    },
    (dispatch) => {
        return {
            startInitPortfolioSingle: bindActionCreators(Actions.startInitPortfolioSingle, dispatch),
        };
    }
)(PortfolioSinglePage);
 