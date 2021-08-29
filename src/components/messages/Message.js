import React from 'react';
import { messageSample } from '../../lib/messages';
import PropTypes from 'prop-types';

export default function Message({ photo, showMessage }) {
    return showMessage ? (
        <div className="pb-4 sm:overflow-y-scroll sm:absolute sm:top-28 sm:w-full sm:h-4/5 sm:z-10 mt-16 sm:mt-0">
            <div className="flex justify-center mb-2 mt-6">
                <p className="text-gray-light text-xs mx-auto">Sep 1, 2021</p>
            </div>
            <div className="mt-4 px-4 text-sm">
                <div className="flex items-center">
                    <div className="flex w-5 h-5 mr-2">
                        <img src={photo} className="rounded-full w-full h-full object-cover" />
                    </div>
                    <div className="flex items-end">
                        <p className="bg-gray-dark py-1 px-2 rounded-xl text-gray-light max-w-52">
                            {messageSample[0].message}
                        </p>
                        <p className="text-gray-light text-tiny ml-2">{messageSample[0].time}</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 px-4 text-sm">
                <div className="flex justify-end items-center">
                    <div className="flex flex-row-reverse items-end">
                        <p className="bg-gray-light py-1 px-2 rounded-xl text-gray-dark max-w-52">
                            {messageSample[1].message}
                        </p>
                        <p className="text-gray-light text-tiny mr-2">{messageSample[1].time}</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 px-4 text-sm">
                <div className="flex items-center">
                    <div className="flex w-5 h-5 mr-2">
                        <img src={photo} className="rounded-full w-full h-full object-cover" />
                    </div>
                    <div className="flex items-end">
                        <p className="bg-gray-dark py-1 px-2 rounded-xl text-gray-light max-w-52">
                            {messageSample[2].message}
                        </p>
                        <p className="text-gray-light text-tiny ml-2">{messageSample[2].time}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-2 mt-6">
                <p className="text-gray-light text-xs mx-auto">Sep 2, 2021</p>
            </div>
            <div className="mt-4 px-4 text-sm">
                <div className="flex justify-end items-center">
                    <div className="flex flex-row-reverse items-end">
                        <p className="bg-gray-light py-1 px-2 rounded-xl text-gray-dark max-w-52">
                            {messageSample[3].message}
                        </p>
                        <p className="text-gray-light text-tiny mr-2">{messageSample[3].time}</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 px-4 text-sm">
                <div className="flex justify-end items-center">
                    <div className="flex flex-row-reverse items-end">
                        <p className="bg-gray-light py-1 px-2 rounded-xl text-gray-dark max-w-52">
                            {messageSample[4].message}
                        </p>
                        <p className="text-gray-light text-tiny mr-2">{messageSample[4].time}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-2 mt-6">
                <p className="text-gray-light text-xs mx-auto">Sep 3, 2021</p>
            </div>
            <div className="mt-4 px-4 text-sm">
                <div className="flex items-center">
                    <div className="flex w-5 h-5 mr-2">
                        <img src={photo} className="rounded-full w-full h-full object-cover" />
                    </div>
                    <div className="flex items-end">
                        <p className="bg-gray-dark py-1 px-2 rounded-xl text-gray-light max-w-52">
                            {messageSample[5].message}
                        </p>
                        <p className="text-gray-light text-tiny ml-2">{messageSample[5].time}</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 px-4 text-sm">
                <div className="flex">
                    <div className="flex w-5 h-5 mr-2">
                        <img src={photo} className="rounded-full w-full h-full object-cover" />
                    </div>
                    <div className="flex items-end">
                        <p className="bg-gray-dark py-1 px-2 rounded-xl text-gray-light max-w-52">
                            {messageSample[6].message}
                        </p>
                        <p className="text-gray-light text-tiny ml-2">{messageSample[6].time}</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 px-4 text-sm mb-16">
                <div className="flex justify-end items-center">
                    <div className="flex flex-row-reverse items-end">
                        <p className="bg-gray-light py-1 px-2 rounded-xl text-gray-dark max-w-52">
                            {messageSample[7].message}
                        </p>
                        <p className="text-gray-light text-tiny mr-2">{messageSample[7].time}</p>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 h-16 w-full bg-gray-primary items-center flex">
                <button className="ml-2 text-gray-light">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                </button>
                <button className="ml-2 text-gray-light">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </button>
                <button className="ml-2 text-gray-light">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                    </svg>
                </button>
                <input
                    placeholder="Message..."
                    className="bg-gray-primary ml-2 sm:ml-4 h-2/3 border border-gray-light rounded-xl w-3/5 sm:w-1/2 px-2 text-gray-light focus:outline-none"
                />
            </div>
        </div>
    ) : (
        <div className="flex justify-center items-center h-screen my-auto">
            <div className="">
                <p className="text-gray-light w-auto mx-auto mb-4">Send Messages to Other Artists!</p>
                <button className="text-gray-light bg-blue-primary px-4 py-2 w-40 mx-auto block rounded">
                    Send Message
                </button>
            </div>
        </div>
    );
}

Message.propTypes = {
    photo: PropTypes.string.isRequired,
    showMessage: PropTypes.bool.isRequired,
};
