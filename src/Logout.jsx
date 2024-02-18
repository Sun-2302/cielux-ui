// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
    const handleLogout = () => {
        // Supprimer les informations d'authentification du stockage local ou de session
        localStorage.removeItem('token'); // Vous pouvez adapter ceci en fonction de votre méthode d'authentification
        // Vous pouvez également ajouter d'autres actions de déconnexion ici

        window.location.href = '/login'; // Rediriger vers la page de connexion
    };

    return (
        <div>
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>
            {/* Utilisation de Link pour rediriger vers une autre page */}
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout;
