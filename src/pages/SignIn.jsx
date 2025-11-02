import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // API call to backend
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Use actual user data from API with all profile fields
        const userData = {
          id: data._id,
          name: data.name,
          email: data.email,
          role: data.role || 'candidate',
          avatar: data.name.charAt(0),
          githubLink: data.githubLink || '',
          linkedinLink: data.linkedinLink || '',
          twitterLink: data.twitterLink || '',
          profilePicture: data.profilePicture || '',
          phone: data.phone || '',
          location: data.location || '',
          bio: data.bio || '',
          skills: data.skills || [],
          experience: data.experience || '',
          resume: data.resume || '',
          createdAt: data.createdAt
        };

        login(userData, data.token);
        navigate('/profile');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again.');

      // For demo purposes, simulate successful login
      setTimeout(() => {
        const mockUser = {
          id: 1,
          name: "John Doe",
          email: email,
          role: "candidate",
          avatar: "JD",
          githubLink: "",
          profilePicture: ""
        };
        login(mockUser, "mock-token");
        navigate('/profile');
      }, 1000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white bg-opacity-20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Glassmorphism card */}
        <div className="backdrop-blur-xl bg-white bg-opacity-10 rounded-3xl p-8 shadow-2xl border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
          {/* Logo/Brand area */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-4 shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Welcome Back</h1>
            <p className="text-indigo-200 text-sm">Sign in to continue your journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-indigo-300 group-focus-within:text-indigo-400 transition-colors" />
              </div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-opacity-20"
                required
                data-testid="signin-email"
              />
            </div>

            {/* Password field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-indigo-300 group-focus-within:text-indigo-400 transition-colors" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-2xl pl-12 pr-12 py-4 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-opacity-20"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-indigo-300 hover:text-indigo-400 transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            {/* Forgot password */}
            <div className="text-right">
              <button type="button" className="text-sm text-indigo-300 hover:text-indigo-400 transition-colors hover:underline">
                Forgot password?
              </button>
            </div>

            {/* Sign in button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none group relative overflow-hidden"
            >
              <span className={`flex items-center justify-center space-x-2 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                <span>Sign in</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-white border-opacity-20"></div>
            <span className="px-4 text-sm text-indigo-200">or</span>
            <div className="flex-1 border-t border-white border-opacity-20"></div>
          </div>

          {/* Social login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => window.location.href = 'http://localhost:5000/api/users/auth/google'}
              className="flex items-center justify-center px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white hover:bg-opacity-20 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Google
            </button>
            <button
              onClick={() => window.location.href = 'http://localhost:5000/api/users/auth/github'}
              className="flex items-center justify-center px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white hover:bg-opacity-20 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>

          {/* Sign up link */}
          <p className="text-center mt-6 text-indigo-200">
            Don't have an account?{" "}
            <button className="text-white font-semibold hover:text-indigo-300 transition-colors hover:underline">
              Sign up
            </button>
          </p>
        </div>

        {/* Trust indicators */}
        <div className="flex items-center justify-center space-x-6 mt-6 text-indigo-300 text-sm">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Secure</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>Encrypted</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span>Trusted</span>
          </div>
        </div>
      </div>
    </div>
  );
}