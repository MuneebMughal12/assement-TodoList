import React from 'react';
import { Link } from 'react-router-dom';

const handleGoogleSignup = () => {
    window.location.href = '/auth/google'; // Redirect to Google authentication
};

function Login() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-semibold">Email</label>
                        <input type="email" id="email" className="p-2 border border-gray-300 rounded" required />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-semibold">Password</label>
                        <input type="password" id="password" className="p-2 border border-gray-300 rounded" required />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Login</button>
                </form>
                <div className="flex items-center my-4">
                    <hr className="flex-grow" />
                    <span className="mx-4 text-gray-500">or</span>
                    <hr className="flex-grow" />
                </div>
                <button
                    onClick={handleGoogleSignup}
                    className="w-full bg-white border border-gray-300 text-gray-700 p-2 rounded-md flex items-center justify-center hover:bg-gray-100"
                >
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                        alt="Google"
                        style={{ width: '30px', height: '30px' }}
                        className="mr-3"
                    />
                    Continue with Google
                </button>

                <p className="text-center mt-4">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
