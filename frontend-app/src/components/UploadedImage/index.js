import React from "react";

import ImagePlaceHolder from '../../image.svg'
import '../style.css'

const UploadedImage = (props) => {
    return (
        <div className='container'>
            <div className='header-container'>
                <div className='header-title'>
                    <span class='material-icons md-36 green icon-centered'>check_circle</span><br/>
                    Uploaded Successfully!
                </div>
            </div>
            <div className='image-selector'>
                <img className='image-field' src={ImagePlaceHolder} alt='Your file here'></img>
                <div className='image-placeholder'>Drag & Drop image here</div>
            </div>
            <div className='share-box'>
                <div className='share-url'>https://github.com/google/material-design-icons</div>
                <button className='share-button'>Copy link</button>
            </div>
        </div>
    )
}

export default UploadedImage;