/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';

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

    /**
    * Markup
    */

    return(
        <>
            <div 
                className={`${props.className}`}
                onClick={props.onClick}
                onMouseEnter={() => handleMouseEnter(props.text)} 
            >
                {props.text}
            </div>
            {isHovering ? 
                <div 
                    className="toolbar-item-options" 
                    onMouseLeave={handleMouseLeave} 
                >
                    <div className="toolbar-item-option">Portfolio</div>
                    <div className="toolbar-item-option">Portfolio Single</div>
                </div> : null}
        </>
    );
}

export default ToolbarItem;
 