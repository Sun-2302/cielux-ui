/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

const AddFile = () => {
    const [file, setFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState (false)

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!file) {
            setErrorMessage('Please select a file.');
            return;
        }


        setLoading(true); 
        


        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('https://your-api.com/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('File uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
            setErrorMessage('Error uploading file. Please try again later.');
        }
        finally{
            setLoading(false)
        }
    };



    return (
        <div>
            <h2>Add File</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload File</button>
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    );
}

export default AddFile;
