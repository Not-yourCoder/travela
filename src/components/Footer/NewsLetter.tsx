/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const NewsletterSection = ({ data }: any) => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log('Newsletter signup:', email);
        setEmail('');
    };

    return (
        <div className="bg-blue-900 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-6 md:mb-0">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-4">
                        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                            <span className="text-blue-900 font-bold text-lg">✈</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg lg:text-2xl font-bold mb-1">{data.title}</h2>
                        <p className="text-blue-200 text-sm md:text-md lg:text-lg">{data.subtitle}</p>
                    </div>
                </div>

                <div className="flex gap-2 mx-4 lg:mx-0">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={data.emailPlaceholder}
                        className="px-4 py-2 rounded-md w-56 lg:w-64 text-gray-900 placeholder-gray-500 bg-white"
                    />
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold transition-colors"
                    >
                        {data.buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
};