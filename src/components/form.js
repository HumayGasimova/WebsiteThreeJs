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
    renderInnerBoxes = () => {
        return(
            <div className="outer-box">
                <div>
                    <div className="innerBox">{"1"}</div>
                    <div className="innerBox">{"1"}</div>
                    <div className="innerBox">{"1"}</div>
                </div>
                <div>
                    <div className="innerBox">{"1"}</div>
                    <div className="innerBox">{"1"}</div>
                    <div className="innerBox">{"1"}</div>
                </div>
                <div>
                    <div className="innerBox">{"1"}</div>
                    <div className="innerBox">{"1"}</div>
                    <div className="innerBox">{"1"}</div>
                </div>
            </div>
        );
    }

    renderPlayer = () => {
        return(
            <div className="players">
                <div className="player">{"Player1"}</div>
                <div className="player">{"Player2"}</div>
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
