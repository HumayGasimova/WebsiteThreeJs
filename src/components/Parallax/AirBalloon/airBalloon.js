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

import AirBalloonLogo  from '../../../images/5a1ccf951a6881.1519408315118375891082.png';
 
/**
* Styles
*/

import './airBalloon.scss';
 
/**
* App component definition and export
*/

export const AirBalloon = (props) => {

   const [slower, setSlower] = useState(0);

    /**
    * Methods
    */
    const handleScroll = () => {
        let scrollHeight = document.body.scrollTop;
        setSlower(scrollHeight/2);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

 
    const renderImage = () => {
        if(props.left){
            return(
                <img 
                    src={AirBalloonLogo}
                    style={{transform: `translate(0px, -${slower}px)`}}
                />
            )
        }else{
            return(
                <img 
                    src={AirBalloonLogo}
                    style={{transform: `translate(0px, ${slower}px)`}}
                />
            ) 
        }
    }

    return(
        <div className={props.left ? "leftAirBallon": "rightAirBallon"}>
            {renderImage()}
        </div>
    );
}

export default AirBalloon;
 