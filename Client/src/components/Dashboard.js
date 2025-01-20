import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ isAuthenticated }) => {
    const handleLogout = () => {
        // Redirect to logout route
        window.location.href = '/auth/logout';
    };

    return (
        <nav className="bg-blue-500 p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-white font-bold text-xl">
                    <Link to="/">MyApp</Link>
                </div>

                <div className="space-x-4">
                    {!isAuthenticated ? (
                        <>
                            <Link to="/login" className="text-white hover:text-gray-200">
                                Login
                            </Link>
                            <Link to="/signup" className="text-white hover:text-gray-200">
                                Sign Up
                            </Link>
                            <button
                                onClick={() => (window.location.href = '/auth/google')}
                                className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-200"
                            >
                                Continue with Google
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/todo" className="text-white hover:text-gray-200">
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Dashboard;
