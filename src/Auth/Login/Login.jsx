import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonGroup from './ButtonGroup';
import OtpForm from './OtpForm';
import ErrorMessage from './ErrorMessage';

const Login = () => {
    const [isHomeSeeker, setIsHomeSeeker] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [error, setError] = useState('');
    const [countdown, setCountdown] = useState(0);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [referralCode, setReferralCode] = useState('');
    const [showReferralPage, setShowReferralPage] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        let timer;
        if (countdown > 0) {
            timer = setInterval(() => {
                setCountdown(prev => prev - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [countdown]);

    const handleToggle = (isHomeSeeker) => {
        setIsHomeSeeker(isHomeSeeker);
        setIsOtpSent(false);
        setOtp('');
        setError('');
        setCountdown(0);
    };

    const handleSendOtp = () => {
        if (!phoneNumber) {
            setError('Phone number is required.');
            return;
        }
        setError('');
        setIsOtpSent(true);
        setCountdown(20);
    };

    const handleResendOtp = () => {
        setCountdown(20);
        setError('');
    };

    const handleLogin = () => {
        const correctOtp = isHomeSeeker ? '1212' : '1313';

        if (otp !== correctOtp) {
            setError('Invalid OTP.');
            return;
        }
        setError('');
        setIsAuthenticated(true);
        setShowReferralPage(true);
    };

    const handleReferralSubmit = (e) => {
        e.preventDefault();
        // Save data to local storage
        localStorage.setItem('phoneNumber', phoneNumber);
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('email', email);
        localStorage.setItem('referralCode', referralCode);

        // Redirect based on role
        if (isHomeSeeker) {
            navigate('/userprofile');
        } else {
            navigate('/ownerprofile');
        }
    };

    return (
        <div className="flex justify-center items-center bg-gray-100 mt-10 px-4 py-20 sm:px-6 lg:px-8">
            <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 w-full max-w-md mx-auto">
                <h1 className="text-2xl font-semibold text-yellow-600 mb-6 text-center">
                    {showReferralPage ? 'Enter Your Details' : (isHomeSeeker ? 'Home Seeker Login' : 'Property Owner Login')}
                </h1>
                <ButtonGroup isHomeSeeker={isHomeSeeker} onToggle={handleToggle} />
                <ErrorMessage message={error} />
                {showReferralPage ? (
                    <form onSubmit={handleReferralSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                type="text"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                       
                        <button
                            type="submit"
                            className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                            Submit
                        </button>
                    </form>
                ) : (
                    <OtpForm
                        phoneNumber={phoneNumber}
                        otp={otp}
                        isOtpSent={isOtpSent}
                        countdown={countdown}
                        onPhoneNumberChange={setPhoneNumber}
                        onSendOtp={handleSendOtp}
                        onOtpChange={setOtp}
                        onLogin={handleLogin}
                        onResendOtp={handleResendOtp}
                    />
                )}
                <p className="mt-4 text-center text-gray-600">
                    {isHomeSeeker ? 'Not a member?' : 'Not a member?'}
                    <a href="/signup" className="text-yellow-600 hover:underline ml-1">Sign Up</a>
                </p>
            </div>
        </div>
    );
};

export default Login;
