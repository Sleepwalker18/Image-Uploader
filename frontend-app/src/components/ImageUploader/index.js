import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import '../style.css'
import ImagePlaceHolder from '../../image.svg'

const ImageUploader = (props) => {

    const [file, setFile] = useState([])
    
    const onDrop = useCallback(acceptedFiles => {
        props.uploadingFile(acceptedFiles)
        setFile({
            preview: URL.createObjectURL(acceptedFiles[0])
        });
    }, [props])
    
    const { getRootProps, getInputProps, open } = useDropzone({ accept: 'image/*', onDrop, noClick:true, multiple: false })
    
    return(
        <div className='container' {...getRootProps()}>
            <div className='header-container'>
                <div className='header-title'>
                    Upload your image
                </div>
                <div className='header-subtitle'>
                    File should be Jpeg, Png, ...
                </div>
            </div>
            <input name="image" {...getInputProps()} />
            <div className='image-selector'>
                <img className='image-field' src={file.hasOwnProperty('preview') ? file.preview : ImagePlaceHolder} alt='Your file here'></img>
                <div className='image-placeholder'>Drag & Drop image here</div>
            </div>
            <div className='file-selector'>
                <div className='image-placeholder'>Or</div>
                <button className='file-button' onClick={open}>
                    Choose a file
                </button>
            </div>
        </div>
    )
}

export default ImageUploader;