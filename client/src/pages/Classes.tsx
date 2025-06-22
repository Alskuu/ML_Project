import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Class {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  category: string;
}

const Classes: React.FC = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await fetch('/api/classes');
        if (!response.ok) {
          throw new Error('Failed to fetch classes');
        }
        const data = await response.json();
        setClasses(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchClasses();
  }, []);

  const categories = ['All', 'Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Non-Parametric Learning', 'Trees', 'Neural Networks'];

  const filteredClasses = selectedCategory === 'All'
    ? classes
    : classes.filter(c => c.category === selectedCategory);

  const getClassRoute = (classId: string) => {
    switch (classId) {
      case '1':
        return '/linear-regression';
      case '2':
        return '/probabilistic-classifier';
      case '5':
        return '/support-vector-machines';
      case '3':
        return '/clustering';
      case '4':
        return '/unsupervised-learning';
      case '6':
        return '/dimensionality-reduction';
      case '7':
        return '/nonparametric';
      case '8':
        return '/trees';
      case '9':
        return '/neural-networks';
      default:
        return `/class/${classId}`;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
        <p className="text-gray-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Classes</h1>
      
      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((classItem) => (
          <div
            key={classItem.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{classItem.title}</h2>
              <p className="text-gray-600 mb-4">{classItem.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {classItem.duration}
                </span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {classItem.level}
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  {classItem.category}
                </span>
              </div>
              <Link
                to={getClassRoute(classItem.id.toString())}
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Start Learning
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes; 