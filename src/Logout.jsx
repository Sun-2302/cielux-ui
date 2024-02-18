import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
    const handleLogout = () => {
        // Supprimer les informations d'authentification du stockage local ou de session
        localStorage.removeItem('token'); // Vous pouvez adapter ceci en fonction de votre méthode d'authentification
        // Vous pouvez également ajouter d'autres actions de déconnexion ici

        // Après la déconnexion, rediriger l'utilisateur vers la page de connexion
        window.location.href = '/login'; // Rediriger vers la page de connexion
    };

    return (
        <div>
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>
            {/* Utilisation de Link pour rediriger vers une autre page */}
            <button onClick={handleLogout}>Logout</button>
            {/* Vous pouvez utiliser un bouton ou un lien selon votre préférence */}
        </div>
    );
}

export default Logout;
