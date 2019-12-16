/**
* Libraries
*/

import React, {
    useEffect
} from 'react';

import {
    Route
} from 'react-router-dom';

import {
    connect
} from 'react-redux';

import {
    bindActionCreators
} from 'redux';

/**
* Components
*/

import Image from '../../SmallParts/Image/image';

/**
* Styles
*/

import './gallery.scss';

/**
* Actions
*/

import * as Actions from '../../../actions';

/**
* Selectors
*/

import * as Selectors from '../../../reducers/selectors';

/**
* Constants
*/

import {
    images
} from '../../../constants/images';

import * as Icon from '../../../constants/iconNames';

/**
* Gallery component definition and export
*/

export const Gallery = (props) => {

    /**
    * Methods
    */
    const imageOnClick = () => {
        // console.log("fff")
    }
    const renderImages = () => {
        return (
            <div className="gallery-images">
                {props.images.map((el, i) => {
                    return(
                        <Image 
                            key={i}
                            id={el.id}
                            src={el.src}
                            title={el.title}
                            description={el.description}
                            imageId={`image${i+1}`}
                            hover={el.hover}
                            onClick={imageOnClick}
                        />
                    )
                })}
            </div>
        )
    }

    useEffect(()=>{
        props.initImages(images);
        return () => props.initImages([]);
    }, [])
   
    /**
    * Markup
    */

    return(
        <div className="gallery" id={Icon.GALLERY}>
            <h1>Gallery</h1>
            <div>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
                {renderImages()}
            <br/>
        </div>
    );
}
 export default connect(
    (state) => {
        return {
            images: Selectors.getImagesState(state),
        };
    },
    (dispatch) => {
        return {
            initImages: bindActionCreators(Actions.initImages, dispatch),
        };
    }
)(Gallery);
 