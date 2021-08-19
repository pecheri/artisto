import React, { useState } from 'react';
import { categories } from '../../lib/categories';
import Results from './Results';
import { getSearchResults } from '../../services/firebase';

export default function SearchIndex() {
    const [searchKeyword, setSearchKeyword] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [results, setResults] = useState(null);
    const [displayFilterButtons, setDisplayFilterButtons] = useState(false);

    const isInvalid = searchKeyword === '' || selectedCategory === '';

    const searchHandle = async (event) => {
        event.preventDefault();
        setSelectedFilter('all');
        const result = await getSearchResults(selectedCategory);
        setResults(result);
        setDisplayFilterButtons(true);
    };

    return (
        <div className="col-span-2 container">
            <div>
                <form className="grid grid-cols-7 items-center" onSubmit={searchHandle}>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-gray-light p-1 h-10 text-sm rounded-l border-r border-gray-primary col-span-4"
                        value={searchKeyword}
                        onChange={({ target }) => setSearchKeyword(target.value)}
                    />
                    <select
                        className="bg-gray-light p-1 h-10 text-sm text-gray-dark col-span-2 capitalize"
                        onChange={({ target }) => setSelectedCategory(target.value)}
                        value={selectedCategory}
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
                    <button
                        type="submit"
                        className={`bg-gray-dark text-gray-light h-10 p-1 text-sm rounded-r ${
                            isInvalid && 'opacity-50'
                        }`}
                        disabled={isInvalid}
                    >
                        Search
                    </button>
                </form>
            </div>
            <div className={`flex justify-evenly text-gray-light h-10 mt-4 mb-8 ${!displayFilterButtons && 'hidden'}`}>
                <button
                    type="button"
                    className={`px-4 font-bold ${selectedFilter === 'all' && 'border-b  border-yellow-primary '}`}
                    value="all"
                    onClick={({ target }) => setSelectedFilter(target.value)}
                >
                    All
                </button>
                <button
                    type="button"
                    value="username"
                    className={`px-4 ${selectedFilter === 'username' && 'border-b  border-yellow-primary '}`}
                    onClick={({ target }) => setSelectedFilter(target.value)}
                >
                    Username
                </button>
                <button
                    type="button"
                    value="title"
                    className={`px-4 ${selectedFilter === 'title' && 'border-b  border-yellow-primary '}`}
                    onClick={({ target }) => setSelectedFilter(target.value)}
                >
                    Title
                </button>
                <button
                    type="button"
                    value="bio"
                    className={`px-4 ${selectedFilter === 'bio' && 'border-b  border-yellow-primary '}`}
                    onClick={({ target }) => setSelectedFilter(target.value)}
                >
                    Bio
                </button>
            </div>
            <Results results={results} selectedFilter={selectedFilter} searchKeyword={searchKeyword} />
        </div>
    );
}
