/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

import ButtonImage from '../ButtonImage/buttonImage';

/**
 * Pictures
 */

import ticTacToe3x3 from '../../../Image/3x3TicTacToe.png';
import ticTacToe4x4 from '../../../Image/4x4TicTacToe.png';
/**
 * Styles
 */

import './page2.scss';

/**
 * WelcomePage component definition and export
 */

class Page2 extends Component {

    /**
    * Constructor
    */

   constructor(props) {
    super(props);
    this.state = {
       showImageButtons: false
    }
}
    
    /**
    * Markup
    */

    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        let scrollHeight = document.body.scrollTop
        let el = document.getElementById("buttons-images")
        
        if(scrollHeight > el.offsetTop - window.innerHeight/2){
           this.setState({
                showImageButtons: true
           })
        }else{
            this.setState({
                showImageButtons: false
            })
        }
    }

    render(){
        return(
            <div 
                className={this.state.showImageButtons ? "buttons-images" : "hide-buttons-images"}
                id="buttons-images"
                >
                <ButtonImage
                    pathname={"/tictactoe"}
                    text={"TicTacToe 3x3"}
                    >
                    <img src={ticTacToe3x3} alt="ticTacToe3x3"/>
                </ButtonImage>
                <ButtonImage
                    pathname={"/tictactoe4x4"}
                    text={"TicTacToe 4x4"}
                    >
                    <img src={ticTacToe4x4} alt="ticTacToe4x4"/>
                </ButtonImage>
            </div>
        );
    }
}

export default Page2;
