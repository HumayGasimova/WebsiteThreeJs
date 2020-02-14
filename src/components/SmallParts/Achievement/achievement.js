/**
* Libraries
*/

import React, {
    useEffect,
    useState
} from 'react';

/**
* Styles
*/

import './achievement.scss';

/**
* Hooks
*/

import {
    useInterval
} from '../../../Hooks/useInterval';

/**
* Achievement component definition and export
*/

export const Achievement = (props) => {

    /**
    * State
    */
    
    const [value, setValue] = useState(0);
    const [delay, setDelay] = useState(0.01);

    /**
    * Methods
    */

    useInterval(() => {
        setValue(value + 1);
    }, value === props.achievementValue ? null : delay)
    
    useEffect(() => {
        let timer = setTimeout(() => {
            setValue(props.achievementValue);
        }, 7000);
        return () => clearTimeout(timer);
    }, [])
    
    /**
    * Markup
    */

    return(
        <div className="achievement">
            <div className="achievement-value">{value}</div>
            <div className="achievement-text">{props.achievementText}</div>
        </div>
    );
}

export default Achievement;
 