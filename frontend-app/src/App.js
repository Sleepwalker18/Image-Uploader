import React, { useState } from 'react';

import './App.css';
import ImageUploader from './components/ImageUploader';
import Uploading from './components/Uploading';
import UploadedImage from './components/UploadedImage';
import { upload_image } from './api';

function App() {
    const [isUploadingFile, setUploading] = useState(false);
    const [imageUrl, setImageUrl] = useState(null)

    const uploadingFile = (file) => {
        setUploading(true)
        upload_image(file).then(res => {
            console.log(res)
            if(res.success) {
                setUploading(true)
                setImageUrl(res.file)
            }
        })
    }

    return (
        <div className="App">
            {
                isUploadingFile ? 
                <Uploading/> : 
                <ImageUploader uploadingFile={uploadingFile}/>
            }
            <UploadedImage image={imageUrl}/>
        </div>
    );
}

export default App;
