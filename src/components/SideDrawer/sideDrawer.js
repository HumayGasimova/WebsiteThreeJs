/**
 * Libraries
 */

import React,{
    Component
} from 'react';

/**
 * Components
 */

import NavigationItems from '../NavigationItems/navigationItems';
import NavigationItem from '../NavigationItems/NavigationItem/navigationItem';
import LogoOX from '../../Image/LogoXO.png';

/**
 * Styles
 */


import './sideDrawer.scss';

/**
 * SideDrawer component definition and export
 */

class SideDrawer extends Component {

    // renderSideDrawer = () => {
    //     if(this.props.sideDrawerOpen === "Yes"){
    //         return(
    //             <div 
    //             onClick={this.props.sideDrawerHandler}
    //             className={"sideDrawer sideDrawerOpen "}>
    //                 <div className="LogoXO-sideDrawer">
    //                     <img src={LogoOX} alt="LogoOX"/>
    //                 </div>
    //                 <NavigationItems className={"navigationItems-sideDrawer"}>
    //                     <NavigationItem 
    //                         path={"/"}
    //                         className="navigationItem-sideDrawer"
    //                         >
    //                         Welcome Page
    //                     </NavigationItem>   
    //                     <NavigationItem 
    //                         path={"/tictactoe"}
    //                         className="navigationItem-sideDrawer"
    //                         >
    //                             TicTacToe3x3
    //                     </NavigationItem>   
    //                     <NavigationItem 
    //                         path={"/tictactoe4x4"}
    //                         className="navigationItem-sideDrawer"
    //                         >
    //                             TicTacToe4x4
    //                     </NavigationItem>  
    //             </NavigationItems>
    //             </div>
    //         );
    //     }
    // }

    render(){
        return(
            <div 
            onClick={this.props.sideDrawerHandler}
            className={this.props.sideDrawerOpen === "Yes" ? "sideDrawer sideDrawerOpen " : "sideDrawer sideDrawerClose "}>
                <div className="LogoXO-sideDrawer">
                    <img src={LogoOX} alt="LogoOX"/>
                </div>
                <NavigationItems className={"navigationItems-sideDrawer"}>
                    <NavigationItem 
                        path={"/"}
                        className="navigationItem-sideDrawer"
                        >
                        Welcome Page
                    </NavigationItem>   
                    <NavigationItem 
                        path={"/tictactoe"}
                        className="navigationItem-sideDrawer"
                        >
                            TicTacToe3x3
                    </NavigationItem>   
                    <NavigationItem 
                        path={"/tictactoe4x4"}
                        className="navigationItem-sideDrawer"
                        >
                            TicTacToe4x4
                    </NavigationItem>  
            </NavigationItems>
            </div>
        );
    }
}

export default SideDrawer;
