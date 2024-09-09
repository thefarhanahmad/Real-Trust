import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto p-6 lg:p-12">
            {/* Contact Form */}
            <div className="mb-12 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Send Us a Message</h3>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            id="name"
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Your Name"
                            aria-required="true"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Your Email"
                            aria-required="true"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700">Phone Number</label>
                        <input
                            id="phone"
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Your Phone Number"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700">Message</label>
                        <textarea
                            id="message"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Your Message"
                            aria-required="true"
                        />
                    </div>
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            className="h-4 w-4 text-red-600 border-gray-300 rounded"
                            id="gdpr"
                            aria-required="true"
                        />
                        <label htmlFor="gdpr" className="ml-2 text-gray-700">
                            I consent to having this website store my submitted information so they can respond to my inquiry.
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white p-3 rounded-lg hover:bg-yellow-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <h2 className="text-2xl font-bold mb-8 ml-6 text-black">Contact Real Trust</h2>

            {/* Contact Information */}
            <div className="mb-12 bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contact Information</h3>
                <ul className="text-gray-700 space-y-2">
                    <li><strong>Phone:</strong> 1-800-555-1234</li>
                    <li><strong>Mobile:</strong> 123-456-7890</li>
                    <li><strong>Fax:</strong> 1-800-555-1235</li>
                    <li><strong>Email:</strong> sales@yourwebsite.com</li>
                    <li><strong>Address:</strong> 3015 Grand Ave, Coconut Grove, Merrick Way, FL 12345</li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;
