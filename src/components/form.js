import React,{
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    addArticle
} from '../actions/index';
import './form.scss';

function mapDispatchToProps(dispatch){
    return{
        addArticle: article => dispatch(addArticle(article))
    };
}
class ConnectedForm extends Component {
    constructor (){
        super();
    }
    state = {
        x1y3: false,
        x2y3: false,
        x3y3: false,
        x1y2: false,
        x2y2: false,
        x3y2: false,
        x1y1: false,
        x2y1: false,
        x3y1: false,
        player1: false,
        player2: true
    }

    handleBoxx1y3 = () => {
        this.setState({
            x1y3: true
        })
    }

    handleBoxx2y3 = () => {
        this.setState({
            x2y3: true
        })
    }

    handleBoxx3y3 = () => {
        this.setState({
            x3y3: true
        })
    }

    handleBoxx1y2 = () => {
        this.setState({
            x1y2: true
        })
    }

    handleBoxx2y2 = () => {
        this.setState({
            x2y2: true
        })
    }

    handleBoxx3y2 = () => {
        this.setState({
            x3y2: true
        })
    }

    handleBoxx1y1 = () => {
        this.setState({
            x1y1: true
        })
    }

    handleBoxx2y1 = () => {
        this.setState({
            x2y1: true
        })
    }

    handleBoxx3y1 = () => {
        this.setState({
            x3y1: true
        })
    }

    handlePlayer1 = () => {
        this.setState({
            player1: true,
            player2: false
        })
    }

    handlePlayer2 = () => {
        this.setState({
            player1: false,
            player2: true
        })
    }

    renderInnerBoxes = () => {
        return(
            <div className="outer-box">
                <div>
                    <div 
                        className="innerBox"
                        onClick={this.handleBoxx1y3}
                    >
                    {
                        (this.state.x1y3)? <div className="cross"/>:null
                    }  
                    </div>
                    <div 
                        className="innerBox"
                        onClick={this.handleBoxx2y3}
                    >
                    {
                        (this.state.x2y3)? <div className="cross"/>:null
                    }  
                    </div>
                    <div 
                        className="innerBox"
                        onClick={this.handleBoxx3y3}
                    >
                    {
                        (this.state.x3y3)? <div className="cross"/>:null
                    }  
                    </div>
                </div>
                <div>
                    <div 
                        className="innerBox"
                        onClick={this.handleBoxx1y2}
                    >
                    {
                        (this.state.x1y2)? <div className="cross"/>:null
                    }  
                    </div>
                    <div 
                        className="innerBox"
                        onClick={this.handleBoxx2y2}
                    >
                    {
                        (this.state.x2y2)? <div className="cross"/>:null
                    }  
                    </div>
                    <div 
                        className="innerBox"
                        onClick={this.handleBoxx3y2}
                    >
                    {
                        (this.state.x3y2)? <div className="cross"/>:null
                    }  
                    </div>
                </div>
                <div>
                    <div 
                        className="innerBox"
                        onClick={this.handleBoxx1y1}
                    >
                    {
                        (this.state.x1y1)? <div className="cross"/>:null
                    }  
                    </div>
                    <div 
                        className="innerBox"
                        onClick={this.handleBoxx2y1}
                    >
                    {
                        (this.state.x2y1)? <div className="cross"/>:null
                    }  
                    </div>
                    <div 
                        className="innerBox"
                        onClick={this.handleBoxx3y1}
                    >
                    {
                        (this.state.x3y1)? <div className="cross"/>:null
                    }  
                    </div>
                </div>
            </div>
        );
    }

    renderPlayer = () => {
        return(
            <div className="players">
                <div 
                    className={this.state.player1 ? "player chosen" : "player"}
                    onClick={this.handlePlayer1}
                >
                    {"Player 1"}
                </div>
                <div 
                    className={this.state.player2 ? "player chosen" : "player"}
                    onClick={this.handlePlayer2}
                >
                    {"Player 2"}
                </div>
            </div>
        );
    }

    render(){
        return(
        <div>
            {this.renderInnerBoxes()}
            {this.renderPlayer()}
        </div>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
