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
 * Actions
 */

import * as Actions from '../../../actions';
import axios from 'axios';
import { format } from 'util';

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
        showImageButtons: true
        }
    }

    componentDidMount() {
        axios.get('https://tictactoe-8fa18.firebaseio.com/users.json')
        .then(res => {
            let data = res.data;
            let usersArray=[]
            for(let key in data){
                usersArray.push({
                    id: key,
                    data: data[key]
                })
            }

            let a = usersArray.find(x=>x.data.name === "Humay")
            console.log(a )
        })
    }

    /**
    * Markup
    */

    render(){
        return(
            <div className="page2">
                <div 
                    className={"login-page2"}
                    onClick={() => this.props.newUser(false)}
                >
                    {this.props.isAuth ? `Welcome ${this.props.user}`: "Login"}
                </div>
            </div>
        );
    }
}

export default Page2;
