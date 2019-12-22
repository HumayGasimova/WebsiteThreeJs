/**
* Libraries
*/

import React, {
    useState,
    useEffect
} from 'react';
 
/**
* Components
*/

import UnicornLogo  from '../../../images/pink-unicorn-silhouette-png-18.png';
 
/**
* Styles
*/

import './unicorn.scss';
 
/**
* Unicorn component definition and export
*/

export const Unicorn = (props) => {

    /**
    * State
    */

    const [slower, setSlower] = useState(0);

    /**
    * Methods
    */
    
    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        setSlower(scrollHeight/2);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderImage = () => {
        if(props.left){
            return(
                <img 
                    src={UnicornLogo}
                    style={{transform: `translate(0px, ${slower}%)`}}
                />
            )
        }else{
            return(
                <img 
                src={UnicornLogo}
                style={{transform: `translate(0px, ${slower}px)`}}
            />
            ) 
        }
    }

    return(
        <div className={props.left ? "leftUnicorn": "rightUnicorn"}>
            {renderImage()}
        </div>
    );
}
 
export default Unicorn;
 