import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Learn Machine Learning
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Explore our comprehensive collection of machine learning classes designed to help you master the fundamentals and advanced concepts.
        </p>
        <Link
          to="/classes"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Browse Classes
        </Link>
      </section>

      {/* Featured Classes Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Class Cards */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Introduction to Machine Learning
              </h3>
              <p className="text-gray-600 mb-4">
                Learn the basics of machine learning algorithms and their applications.
              </p>
              <Link
                to="/classes/1"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Deep Learning Fundamentals
              </h3>
              <p className="text-gray-600 mb-4">
                Dive into neural networks and deep learning architectures.
              </p>
              <Link
                to="/classes/2"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Natural Language Processing
              </h3>
              <p className="text-gray-600 mb-4">
                Master the techniques of processing and analyzing text data.
              </p>
              <Link
                to="/classes/3"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 