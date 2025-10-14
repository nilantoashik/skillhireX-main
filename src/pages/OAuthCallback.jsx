import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function OAuthCallback() {
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const handleOAuthCallback = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      const userParam = urlParams.get('user');

      if (token && userParam) {
        try {
          const userData = JSON.parse(decodeURIComponent(userParam));

          // Transform user data to match AuthContext format
          const formattedUserData = {
            id: userData._id,
            name: userData.name,
            email: userData.email,
            role: userData.role || 'candidate',
            avatar: userData.name.charAt(0),
            githubLink: userData.githubLink || '',
            linkedinLink: userData.linkedinLink || '',
            twitterLink: userData.twitterLink || '',
            profilePicture: userData.profilePicture || ''
          };

          login(formattedUserData, token);
          navigate('/profile');
        } catch (error) {
          console.error('Error parsing OAuth user data:', error);
          navigate('/signin');
        }
      } else {
        console.error('Missing token or user data in OAuth callback');
        navigate('/signin');
      }
    };

    handleOAuthCallback();
  }, [login, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Signing you in...</h1>
        <p className="text-indigo-200">Please wait while we complete your authentication.</p>
      </div>
    </div>
  );
}
