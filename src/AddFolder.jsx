/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

const AddFolder = () => {
    const [folderName, setFolderName] = useState('');

    const handleFolderNameChange = (e) => {
        setFolderName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Effectuer une requête POST à l'API pour ajouter le dossier
        axios.post('https://votre-api.com/dossiers', { name: folderName })
            .then(response => {
                console.log('Folder added successfully:', response.data);
                // Réinitialiser le champ de saisie après l'ajout du dossier
                setFolderName('');
            })
            .catch(error => {
                console.error('Error adding folder:', error);
            });
    };

    return (
        <div>
            <h2>Add New Folder</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="folderName">Folder Name:</label>
                    <input
                        type="text"
                        id="folderName"
                        value={folderName}
                        onChange={handleFolderNameChange}
                        required
                    />
                </div>
                <button type="submit">Add Folder</button>
            </form>
        </div>
    );
}

export default AddFolder;
