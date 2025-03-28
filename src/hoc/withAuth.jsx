import React from 'react';

const withAuth = (WrappedComponent) => {
  return function WithAuthComponent(props) {
    // Here you would typically check for authentication
    const isAuthenticated = true; // Replace with actual auth check

    if (!isAuthenticated) {
      // Redirect to login or show unauthorized message
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Unauthorized Access</h2>
            <p className="mt-2 text-gray-600">Please login to access this page</p>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
              Login
            </button>
          </div>
        </div>
      );
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth; 