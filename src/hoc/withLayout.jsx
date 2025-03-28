import React from 'react';

const withLayout = (WrappedComponent) => {
  return function WithLayoutComponent(props) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-indigo-600">Logo</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4">
                  <a href="#home" className="text-gray-700 hover:text-gray-900 px-3 py-2">Home</a>
                  <a href="#features" className="text-gray-700 hover:text-gray-900 px-3 py-2">Features</a>
                  <a href="#testimonials" className="text-gray-700 hover:text-gray-900 px-3 py-2">Testimonials</a>
                  <a href="#contact" className="text-gray-700 hover:text-gray-900 px-3 py-2">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <WrappedComponent {...props} />

        {/* Footer */}
        <footer className="bg-gray-800">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-400">
              <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    );
  };
};

export default withLayout; 