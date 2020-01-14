/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

import {
    withRouter
} from 'react-router-dom';

/**
* Styles
*/

import './toolbarItem.scss';

/**
* ToolbarIcon component definition and export
*/

export const ToolbarItem = (props) => {

    /**
    * State
    */

    const [isHovering, setIsHovering] = useState(false);

    /**
    * Methods
    */

    const handleMouseEnter = (text) => {
        if(text === "Portfolio"){
            setIsHovering(true);
        }
    }

    const handleMouseLeave = () => {
        setIsHovering(false);
    }

    const toolbarOptionOnClick = (path) => {
        props.history.push(`/${path}`)
    }

    const renderOptions = () => {
        return(
            <div 
                className="toolbar-item-options" 
                onMouseLeave={handleMouseLeave} 
            >{props.options.map((el, i) => {
                return(
                    <div 
                        key={i}
                        className="toolbar-item-option" 
                        onClick={() => toolbarOptionOnClick(el.optPath)}
                    >
                        {el.optText}
                    </div>
                )
            })}</div>
        )
    }
    /**
    * Markup
    */

    return(
        <>
            <div 
                className={`${props.className}`}
                onClick={props.text !== "Portfolio" ? props.onClick : null}
                onMouseEnter={() => handleMouseEnter(props.text)} 
            >
                {props.text}
            </div>
            {isHovering ? renderOptions() : null}
        </>
    );
}

export default withRouter(ToolbarItem);
