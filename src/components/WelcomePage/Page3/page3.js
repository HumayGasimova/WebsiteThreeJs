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

import cat1 from '../../../Image/pngguru.com-id-bgzfv.png';
import cat2 from '../../../Image/pngguru.com-id-bpdqo.png';
import cat3 from '../../../Image/pngguru.com-id-dwxwu.png';
import cat4 from '../../../Image/pngguru.com-id-ekjjo.png';
import cat5 from '../../../Image/pngguru.com-id-eldmj.png';
import cat6 from '../../../Image/pngguru.com-id-gfomw.png';
import cat7 from '../../../Image/pngguru.com-id-kgegy.png';
import cat8 from '../../../Image/pngguru.com-id-kvnun.png';
import cat9 from '../../../Image/pngguru.com-id-znfce.png';
/**
 * Styles
 */

import './page3.scss';

/**
 * WelcomePage component definition and export
 */

class Page3 extends Component {

    /**
    * Constructor
    */

   constructor(props) {
    super(props);
    this.state = {
       showImageButtons: true
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
        let el = document.getElementById("buttons-images");
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

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll)
    }

    render(){
        return(
            <div className="backgroundBoxPage3">
                <div 
                    className={this.state.showImageButtons ? "buttons-images" : "hide-buttons-images"}
                    // className="buttons-images"
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
              
                    <img className="cat1" src={cat9}/>
                    <img className="cat2" src={cat3}/>
                    <img className={this.state.showImageButtons ? "cat3": null} src={cat5}/>
                    <img className={this.state.showImageButtons ? "cat4": null} src={cat8}/>
               
            </div>
        );
    }
}

export default Page3;
