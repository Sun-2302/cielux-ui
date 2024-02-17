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

    return (
        <div>
            <h2>Uploaded Files</h2>
            <ul>
                {files.map(file => (
                    <li key={file.id}>
                        <span>{file.name}</span>
                        <span>{file.type}</span>
                        {/* Ajoutez d'autres informations sur le fichier si nécessaire */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FileList;
