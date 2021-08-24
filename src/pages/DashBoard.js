import React, { useEffect, useState, useContext } from 'react';
import UserContext from '../context/user';
import Header from '../components/Header';
import Timeline from '../components/Timeline';
import SideProfile from '../components/SideProfile';
import { getUserByUserId } from '../services/firebase';
import useUser from '../hooks/useUser';

export default function DashBoard() {
    return (
        <div className="font-body">
            <Header />
            <div className="w-sceen flex justify-center mt-24 px-4">
                <div className="grid grid-cols-3 w-full max-w-screen-lg">
                    <Timeline />
                    <SideProfile />
                </div>
            </div>
        </div>
    );
}

{
    /* <img src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=612x612&w=0&h=NGxdexflb9EyQchqjQP0m6wYucJBYLfu46KCLNMHZYM=" /> */
}
