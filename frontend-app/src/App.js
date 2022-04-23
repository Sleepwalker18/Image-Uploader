import React, { useState } from 'react';

import './App.css';
import ImageUploader from './components/ImageUploader';
import Uploading from './components/Uploading';
import UploadedImage from './components/UploadedImage';

function App() {

    const [isUploadingFile, setUploading] = useState(false);

    const uploadingFile = (file) => {
        setUploading(true)
    }

    return (
        <div className="App">
            {/* {
                isUploadingFile ? 
                <Uploading/> : 
                <ImageUploader uploadingFile={uploadingFile}/>
            }
            <UploadedImage/> */}
        </div>
    );
}

export default App;
