import React from 'react';
import img1 from '../../assets/Images/Home-img/slider1.jpeg';
import img2 from '../../assets/Images/Home-img/slider2.jpeg';
import img3 from '../../assets/Images/Home-img/slider3.jpeg';
import img4 from '../../assets/Images/Home-img/slider4.jpeg';
import img5 from '../Home/Properties/img/property1.jpeg';
import img6 from '../Home/Properties/img/property2.jpeg';
import img7 from '../Home/Properties/img/property3.jpeg';
import img8 from '../Home/Properties/img/property4.jpeg';
import img9 from '../Home/Properties/img/property5.jpeg';
import img10 from '../Home/Properties/img/property6.jpeg';
import img11 from '../Home/Properties/img/property7.jpeg';

const Gallery = () => {
    const images = [
        { src: img1, category: 'All' },
        { src: img2, category: 'All' },
        { src: img3, category: 'All' },
        { src: img4, category: 'All' },
        { src: img5, category: 'Rent' },
        { src: img6, category: 'Rent' },
        { src: img7, category: 'Rent' },
        { src: img8, category: 'Rent' },
        { src: img9, category: 'Sale' },
        { src: img10, category: 'Sale' },
        { src: img11, category: 'Sale' },
    ];

    const [selectedCategory, setSelectedCategory] = React.useState('All');

    const filteredImages = images.filter(img => selectedCategory === 'All' || img.category === selectedCategory);

    return (
        <div className="p-4 sm:p-10 lg:p-20 bg-gray-100 mt-10 sm:mt-20">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h1 className="text-xl sm:text-2xl font-bold text-black mb-4 sm:mb-0">Discover Your Dream Property</h1>
                <div className="flex space-x-2 sm:space-x-4">
                    <button
                        className={`px-3 sm:px-4 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm font-medium ${selectedCategory === 'All' ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => setSelectedCategory('All')}
                    >
                        All
                    </button>
                    <button
                        className={`px-3 sm:px-4 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm font-medium ${selectedCategory === 'Rent' ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => setSelectedCategory('Rent')}
                    >
                        Rent
                    </button>
                    <button
                        className={`px-3 sm:px-4 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm font-medium ${selectedCategory === 'Sale' ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-800'}`}
                        onClick={() => setSelectedCategory('Sale')}
                    >
                        Sale
                    </button>
                </div>
            </div>
            <p className="text-gray-600 mb-6 sm:mb-8 text-center sm:text-left">Explore our curated selection of properties available for rent and sale. Browse through our gallery to find your next home!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredImages.map((img, index) => (
                    <div key={index} className="w-full h-48 sm:h-64 overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={img.src}
                            alt={`Gallery ${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
