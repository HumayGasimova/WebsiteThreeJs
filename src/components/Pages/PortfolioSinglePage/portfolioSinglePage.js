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
import PortfolioContent from '../../SmallParts/PortfolioContent/portfolioContent';
import PortfolioComments from '../../SmallParts/PortfolioComments/portfolioComment';
import Pagination from '../../SmallParts/Pagination/pagination';
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

    const [portfolioId, setPortfolioId] = useState(0);

    /**
    * Methods
    */

    useEffect(() => {
        let portfolioIdString = props.match.params.id;
        let portfolioId = portfolioIdString.slice(1, portfolioIdString.length);
        setPortfolioId(portfolioId);
        props.startInitPortfolioSingle(+portfolioId);
    }, [props.match.params.id]);

    /**
    * Markup
    */

    return(
        <div className="portfolio-single-page">
            <Toolbar/>
            <MovingBubbles 
                mainHeader={`Portfolio #${portfolioId}`}
            />
            <div className="portfolio-single-page-wrapper">
                <div className="portfolio-single-page-wrapper2">
                    <div className="portfolio-single-page-wrapper3">
                        <PortfolioContent
                            image={props.singlePortfolio !== {} ? props.singlePortfolio.image : null}
                            paragraphs={props.singlePortfolio !== {} ? props.singlePortfolio.paragraphs : null}
                        />
                        <PortfolioComments
                            singlePortfolio={props.singlePortfolio !== {} ? props.singlePortfolio : null}
                        />
                    </div>
                    <div className="portfolio-single-page-guide">
                    
                    </div>
                </div>
                    <Pagination 
                        page="portfolioSingle"
                    />
            </div>
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
 