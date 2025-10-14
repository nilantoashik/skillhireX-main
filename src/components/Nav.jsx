import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, LogOut, Settings } from 'lucide-react';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setProfileMenuOpen(false);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    setProfileMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white shadow">
              <img src="/assets/logo.png" alt="SkillHIREX Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <Link to="/" className="text-lg font-semibold text-gray-800">SkillHIREX</Link>
              <div className="text-xs text-gray-500">AI-driven hiring marketplace</div>
            </div>
          </div>

          <nav className={`md:flex items-center gap-6 text-sm text-gray-600 ${menuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-white shadow-md p-4 md:static md:flex-row md:w-auto md:shadow-none md:p-0' : 'hidden'}`}>
            <Link to="/jobs" className="hover:text-gray-900">Jobs</Link>
            <Link to="/candidates" className="hover:text-gray-900">Candidates</Link>
            <Link to="/interview" className="hover:text-gray-900">Interview</Link>
            <Link to="/pricing" className="hover:text-gray-900">Pricing</Link>

            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {user?.avatar || user?.name?.charAt(0) || 'U'}
                  </div>
                  <span className="hidden md:block text-sm font-medium">{user?.name || 'User'}</span>
                </button>

                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <button
                      onClick={handleProfileClick}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </button>
                    <button
                      onClick={() => navigate('/settings')}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Settings className="w-4 h-4" />
                      Settings
                    </button>
                    <hr className="my-1" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/signup" className="ml-0 md:ml-2 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg text-sm mt-2 md:mt-0 hover:bg-indigo-50 transition-colors">Sign up</Link>
                <Link to="/signin" className="ml-0 md:ml-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm mt-2 md:mt-0 hover:bg-indigo-700 transition-colors">Sign in</Link>
              </>
            )}
          </nav>

          <div className="md:hidden">
            <button
              type="button"
              aria-label="toggle menu"
              className="p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
