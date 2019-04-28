import React,{
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    addArticle
} from '../../actions/index';
import './box.scss';

function mapDispatchToProps(dispatch){
    return{
        addArticle: article => dispatch(addArticle(article))
    };
}
class Box extends Component {
    constructor (){
        super();
    }
    
    renderInnerBoxes = () => {
        return(
            <div 
                className={this.props.number}
                onClick={this.props.onClick}
            >
              {this.props.children}
            </div>
        );
    }

    render(){
        return(
            <div>
                {this.renderInnerBoxes()}
            </div>
        );
    }
}

const Form = connect(null, mapDispatchToProps)(Box);

export default Box;
