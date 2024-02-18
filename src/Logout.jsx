// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();

    // Fonction de déconnexion
    const handleLogout = () => {
        // Supprimer les informations d'authentification du stockage local ou de session
        localStorage.removeItem('token'); // Vous pouvez adapter ceci en fonction de votre méthode d'authentification

        // Rediriger l'utilisateur vers la page de connexion
        history.push('/login');
    };

    return (
        <div>
            <h2>Logout</h2>
            <p>Êtes-vous sûr de vouloir vous déconnecter?</p>
            <button onClick={handleLogout}>Déconnexion</button>
        </div>
    );
}

export default Logout;
