/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileUpload, FaFolder, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4 flex justify-between items-center">
            <div className="logo text-white text-lg">
                <h1>CielUX</h1>
            </div>
            <div className="nav-links">
                <Link to="/add-file" className="text-white mr-4"><FaFileUpload /> Add File</Link>
                <Link to="/add-folder" className="text-white mr-4"><FaFolder /> Add Folder</Link>
                <Link to="/logout" className="text-white"><FaSignOutAlt /> Logout</Link>
            </div>
        </nav>
    );
}

export default Navbar;
