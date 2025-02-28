import React from 'react';

const Test = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-blue-500">Tailwind Test</h1>
            <p className="mt-2 text-gray-700">Testing if Tailwind CSS is working properly.</p>
            <div className="mt-4 p-4 bg-white rounded shadow">
                <p>This is a white background box.</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="p-4 bg-red-500 text-white rounded">Red</div>
                <div className="p-4 bg-blue-500 text-white rounded">Blue</div>
                <div className="p-4 bg-green-500 text-white rounded">Green</div>
                <div className="p-4 bg-yellow-500 text-white rounded">Yellow</div>
            </div>
        </div>
    );
};

export default Test; 