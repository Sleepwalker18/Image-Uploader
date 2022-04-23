import './style.css'
import ImagePlaceHolder from '../image.svg'

function ImageUploader() {
    return(
        <div className='container'>
            <div className='header-container'>
                <div className='header-title'>
                    Upload your image
                </div>
                <div className='header-subtitle'>
                    File should be Jpeg, Png, ...
                </div>
            </div>
            <div className='image-selector'>
                <img className='image-field' src={ImagePlaceHolder} alt='Your file here'></img>
                <div className='image-placeholder'>Drag & Drop image here</div>
            </div>
            <div className='file-selector'>
                <div className='image-placeholder'>Or</div>
                <button className='file-button'>
                    Choose a file
                </button>
            </div>
        </div>
    )
}

export default ImageUploader;