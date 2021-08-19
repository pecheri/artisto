import React, { useContext, useState, useEffect } from 'react';
import FirebaseContext from '../context/firebase';
import { Link, useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import logo from '../images/logo.png';
import { categories } from '../lib/categories';
import { doesUsernameExist } from '../services/firebase';

export default function SignUp() {
    const { firebase } = useContext(FirebaseContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [category, setCategory] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || email === '' || username === '' || fullName === '' || category === '';
    const history = useHistory();

    useEffect(() => {
        document.title = 'Sign In - Artisto';
    }, []);

    const handleSignUp = async (event) => {
        event.preventDefault();
        const usernameExist = await doesUsernameExist(username);
        if (!usernameExist) {
            try {
                const createdUserResult = await firebase.auth().createUserWithEmailAndPassword(email, password);
                await createdUserResult.user.updateProfile({
                    displayName: username.toLowerCase(),
                });

                await firebase.firestore().collection('users').add({
                    userId: createdUserResult.user.uid,
                    username: username.toLowerCase(),
                    fullName,
                    email: email.toLowerCase(),
                    category: category,
                    title: '',
                    bio: '',
                    followers: [],
                    following: [],
                    photo: '',
                    dateCreated: Date.now(),
                });
                history.push(ROUTES.DASHBOARD);
            } catch (error) {
                setError(error.message);
            }
        } else {
            setUsername('');
            setError('That username is already taken, please try another.');
        }
    };

    return (
        <div className="flex justify-center container max-w-screen-md items-center h-screen mx-auto">
            <div className="w-1/2">
                <h1 className="w-full flex items-center justify-end">
                    <img src={logo} alt="artisto" className="" />
                </h1>
            </div>
            <div className="w-1/2">
                <div className="bg-gray-dark rounded">
                    <div className="p-8">
                        {error && <p className="text-xs text-red-primary">{error}</p>}
                        <form className="flex flex-col" onSubmit={handleSignUp}>
                            <input
                                placeholder="Username"
                                type="text"
                                onChange={({ target }) => setUsername(target.value)}
                                value={username}
                                className="bg-gray-light w-full p-1 h-10 text-sm mb-5"
                            />
                            <input
                                placeholder="Full Name"
                                type="text"
                                onChange={({ target }) => setFullName(target.value)}
                                value={fullName}
                                className="bg-gray-light w-full p-1 h-10 text-sm mb-5"
                            />
                            <select
                                className="bg-gray-light w-full py-1 h-10 text-sm text-gray-dark mb-5"
                                onChange={({ target }) => setCategory(target.value)}
                                value={category}
                            >
                                <option hidden value="">
                                    Category
                                </option>
                                {categories.sort().map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                                <option value="others">Others</option>
                            </select>
                            <input
                                placeholder="Email Address"
                                type="text"
                                onChange={({ target }) => setEmail(target.value)}
                                value={email}
                                className="bg-gray-light w-full p-1 h-10 text-sm mb-5"
                            />

                            <input
                                placeholder="Password"
                                type="password"
                                onChange={({ target }) => setPassword(target.value)}
                                value={password}
                                className="bg-gray-light w-full p-1 h-10 text-sm"
                            />
                            <button
                                className={`bg-yellow-primary text-gray-dark mt-12 w-full p-1 h-10 rounded ${
                                    isInvalid && 'opacity-50'
                                }`}
                                type="submit"
                                disabled={isInvalid}
                            >
                                Sign Up
                            </button>
                        </form>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-gray-light text-xs mb-12 mt-8">
                            You already have an account?{' '}
                            <Link to={ROUTES.LOGIN} className="text-yellow-primary">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}