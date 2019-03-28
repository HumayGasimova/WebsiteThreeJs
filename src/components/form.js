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
    
    render(){
        return(
        <div className="ss">
            <h2>{"Humay"}</h2>
        </div>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
