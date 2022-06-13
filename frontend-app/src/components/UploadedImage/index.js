import React from "react";

import ImagePlaceHolder from '../../image.svg'
import '../style.css'

const UploadedImage = (props) => {
    console.log(props.image)
    if(props.image !== null) {
        return (
            <div className='container'>
                <div className='header-container'>
                    <div className='header-title'>
                        <span class='material-icons md-36 green icon-centered'>check_circle</span><br/>
                        Uploaded Successfully!
                    </div>
                </div>
                <div className='image-selector'>
                    <img className='image-field' src={process.env.REACT_APP_API_URL + '/' + props.image.path} alt='Your file here'></img>
                    <div className='image-placeholder'>Drag & Drop image here</div>
                </div>
                <div className='share-box'>
                    <div className='share-url'>{process.env.REACT_APP_API_URL + '/' + props.image.path}</div>
                    <button className='share-button'>Copy link</button>
                </div>
            </div>
        )
    } else return null;
}

export default UploadedImage;