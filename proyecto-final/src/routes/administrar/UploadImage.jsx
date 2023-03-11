import React from 'react'
import { useState } from 'react'

function UploadImage() {
   
    const [selectedFile, setSelectedFile] = useState(null)
    const [imageUrl, setImageUrl] = useState('')

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = () => {
        const formData = new FomrData();
        formData.append('image', selectedFile);
    }

  return (
    <div>UploadImage</div>
  )
}

export default UploadImage