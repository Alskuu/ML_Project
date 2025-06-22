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
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Classes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Supervised Learning - Linear Regression */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Supervised Learning
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Linear Regression
              </h3>
              <p className="text-gray-600 mb-4">
                Learn the basics of linear regression and how to apply it to real-world problems.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                  2h duration
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                  Beginner
                </span>
              </div>
              <Link
                to="/linear-regression"
                className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Start Learning
              </Link>
            </div>
          </div>

          {/* Unsupervised Learning - Clustering */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Unsupervised Learning
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Clustering
              </h3>
              <p className="text-gray-600 mb-4">
                Explore clustering algorithms and their applications in discovering data patterns.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                  2h duration
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                  Beginner
                </span>
              </div>
              <Link
                to="/clustering"
                className="block w-full text-center bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Start Learning
              </Link>
            </div>
          </div>

          {/* Neural Networks - Neural Networks and Deep Learning */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  Neural Networks
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Neural Networks and Deep Learning
              </h3>
              <p className="text-gray-600 mb-4">
                An introduction to neural networks, from perceptrons to CNNs and deep learning.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm">
                  3.5h duration
                </span>
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">
                  Advanced
                </span>
              </div>
              <Link
                to="/neural-networks"
                className="block w-full text-center bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to explore more classes and advance your machine learning skills?
          </p>
          <Link
            to="/classes"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:-translate-y-0.5 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View All Classes
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;