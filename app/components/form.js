import React,{
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import uuidv1 from 'uuid';
import {
    addArticle
} from '../../src/js/actions/index';

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
         null
        );
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
