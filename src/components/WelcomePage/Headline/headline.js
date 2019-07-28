/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Styles
 */

import './headline.scss';

/**
 * Headline component definition and export
 */

class Headline extends Component {

    /**
    * Constructor
    */

    constructor(props) {
        super(props);
        this.state={
        slower: 0
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        let scrollHeight = document.body.scrollTop
        this.setState({
            slower: scrollHeight/2
        })
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll)
    }
    
    /**
    * Markup
    */

    render(){
        return(
            <div 
                className="headline"
                style={{transform: `translate(0px, ${this.state.slower}px)`}}
            >
               Tic Tac Toe
            </div>
        );
    }
}

export default Headline;
