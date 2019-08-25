/**
 * Libraries
 */

import React,{
    Component
} from 'react';


/**
 * Styles
 */

import './page4.scss';

/**
 * Actions
 */

/**
 * WelcomePage component definition and export
 */

class Page4 extends Component {

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

    render(){
        return(
            <div className="page2">
                <div 
                    className={"logout-page4"}
                    onClick={this.props.logout}
                >
                    {this.props.isAuth ? "Logout" : null}
                </div>
            </div>
        );
    }
}

export default Page4;
