/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileList = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        // Appel à l'API pour récupérer les informations sur les fichiers téléchargés
        axios.get('https://votre-api.com/fichiers')
            .then(response => {
                // Mise à jour de l'état avec les données reçues de l'API
                setFiles(response.data);
            })
            .catch(error => {
                console.error('Error fetching files:', error);
            });
    }, []);

    // Fonction pour gérer le partage d'un fichier
    const handleShare = (fileId) => {
        // Implémentez la logique de partage ici, par exemple, ouvrez une boîte de dialogue de partage
        console.log('Sharing file with ID:', fileId);
    };

    return (
        <div>
            <h2>Uploaded Files</h2>
            <ul>
                {files.map(file => (
                    <li key={file.id}>
                        <span>{file.name}</span>
                        <span>{file.type}</span>
                        <span>{file.size}</span>
                        <span>{file.owner}</span>
                        <span>{file.lastAccess}</span>
                        <span>{file.modified}</span>
                        {/* Options d'action pour le partage et autres */}
                        <button onClick={() => handleShare(file.id)}>Share</button>
                        {/* Ajoutez d'autres boutons ou icônes pour d'autres actions */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FileList;
