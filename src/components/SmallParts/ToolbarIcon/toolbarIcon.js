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

import './toolbarIcon.scss';

/**
* ToolbarIcon component definition and export
*/

export const ToolbarIcon = (props) => {

    /**
    * State
    */

    const iconRef = React.createRef();
    const [width, setWidth] = useState(0);

    /**
    * Methods
    */

    useEffect(()=>{
        setWidth(iconRef.current.clientWidth);
    }, []);

    /**
    * Markup
    */

    return(
        <a className="toolbarIcon" href={`#${props.id}`}>
            <div className={props.scrollTop > 0 ? "toolbarIcon-element-scroll-down" : (props.scrollTop === 0 && props.toolBarInit ? "toolbarIcon-element-scroll-up" : "toolbarIcon-element")} ref={iconRef}>
                {props.text}
                <div className={`toolbarIcon-line ${props.active ? "active" : null}`}>
                    <div 
                        className="toolbarIcon-line-left-part" 
                        style={{width: `${width/2 - 6}`}}
                    />
                    <div 
                        className="toolbarIcon-line-right-part" 
                        style={{width: `${width/2 - 6}`}}
                    />
                </div>
            </div>
        </a>
    );
}

export default ToolbarIcon;
 