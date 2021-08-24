import React, { useContext, useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import FirebaseContext from '../context/firebase';
import logo from '../images/logo.png';

export default function Login() {
    const { firebase } = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || email === '';
    const history = useHistory();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push(ROUTES.DASHBOARD);
        } catch (error) {
            setEmail('');
            setPassword('');
            setError(error.message);
        }
    };

    useEffect(() => {
        document.title = 'Login - Artisto';
    }, []);

    return (
        <div className="sm:flex justify-center container max-w-screen-md items-center h-screen mx-auto px-2 my-2">
            <div className="sm:w-1/2 sm:mx-0 w-60 mx-auto">
                <h1 className="w-full flex items-center justify-end">
                    <img src={logo} alt="artisto" className="" />
                </h1>
            </div>
            <div className="sm:w-1/2 sm:max-h-full">
                <div className="sm:bg-gray-dark rounded">
                    <div className="p-8">
                        {error && <p className="text-xs text-red-primary">{error}</p>}
                        <form className="flex flex-col" onSubmit={handleLogin}>
                            <p className="text-gray-light text-sm mt-8">Email</p>
                            <input
                                placeholder="Enter Email"
                                type="email"
                                onChange={({ target }) => setEmail(target.value)}
                                value={email}
                                className="bg-gray-light w-full p-1 h-10 text-base"
                            />
                            <p className="text-gray-light text-sm mt-8">Password</p>
                            <input
                                placeholder="Enter Password"
                                type="password"
                                onChange={({ target }) => setPassword(target.value)}
                                value={password}
                                className="bg-gray-light w-full p-1 h-10 text-base"
                            />
                            <button
                                className={`bg-yellow-primary text-gray-dark mt-12 w-full p-1 h-10 rounded ${
                                    isInvalid && 'opacity-50'
                                }`}
                                type="submit"
                                disabled={isInvalid}
                            >
                                Login
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col justify-center items-end pr-8">
                        <p className="text-gray-light text-xs mb-12 mt-8">
                            Don&apos;t have an account?{' '}
                            <Link to={ROUTES.SIGN_UP} className="text-yellow-primary">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
