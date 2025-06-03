import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

interface ClassDetail {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  topics: string[];
}

const ClassDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [classData, setClassData] = useState<ClassDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClassDetail = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/classes`);
        if (!response.ok) {
          throw new Error('Failed to fetch class details');
        }
        const data = await response.json();
        const allClasses = data.categories.flatMap((category: any) => category.classes);
        const foundClass = allClasses.find((c: ClassDetail) => c.id === parseInt(id || "1"));
        setClassData(foundClass || null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchClassDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">Loading class details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-600">Error: {error}</div>
      </div>
    );
  }

  if (!classData) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Class Not Found</h2>
        <Link to="/classes" className="text-blue-600 hover:text-blue-800">
          Return to Classes
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{classData.title}</h1>
          <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {classData.level}
          </span>
        </div>

        <p className="text-gray-600 text-lg mb-6">{classData.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-1">Duration</h3>
            <p className="text-gray-800">{classData.duration}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-500 mb-1">Level</h3>
            <p className="text-gray-800">{classData.level}</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Topics Covered</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {classData.topics.map((topic, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">{topic}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/classes"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Back to Classes
        </Link>
      </div>
    </div>
  );
};

export default ClassDetail; 