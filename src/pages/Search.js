import React, { useEffect } from 'react';
import Header from '../components/Header';
import SideProfile from '../components/SideProfile';
import SearchIndex from '../components/search';

export default function Search() {
    useEffect(() => {
        document.title = 'Search - Artisto';
    }, []);

    return (
        <div className="font-body">
            <Header />
            <div className="w-sceen flex justify-center pt-24">
                <div className="grid grid-cols-3 w-full max-w-screen-lg mx-4">
                    <SearchIndex />
                    <SideProfile />
                </div>
            </div>
        </div>
    );
}
