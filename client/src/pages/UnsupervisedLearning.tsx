import React from 'react';

const UnsupervisedLearning: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          Unsupervised Learning
        </h1>
        <h2 className="text-xl text-gray-600 text-center mb-8">
          Discover patterns and structures in unlabeled data
        </h2>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-2xl font-semibold mb-4">
              Dimensionality Reduction
            </h3>
            <p className="mb-4">
              Learn how to reduce the number of features in your dataset while preserving important information.
            </p>
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600">
                Duration: 3 hours
              </span>
              <span className="text-blue-600">
                Level: Advanced
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Introduction
                </h4>
                <p className="mb-4">
                  Dimensionality reduction is a crucial technique in machine learning that helps reduce the number of features in a dataset while preserving the most important information. This process is essential for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Reducing computational complexity</li>
                  <li>Eliminating redundant features</li>
                  <li>Visualizing high-dimensional data</li>
                  <li>Improving model performance</li>
                  <li>Preventing the curse of dimensionality</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Principal Component Analysis (PCA)
                </h4>
                <p className="mb-4">
                  PCA is one of the most widely used dimensionality reduction techniques. It works by:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Finding the directions of maximum variance in the data</li>
                  <li>Projecting the data onto these principal components</li>
                  <li>Selecting the most important components to retain</li>
                </ul>
                <p className="mb-4">
                  The mathematical foundation of PCA involves:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Computing the covariance matrix</li>
                  <li>Finding eigenvalues and eigenvectors</li>
                  <li>Sorting components by explained variance</li>
                  <li>Transforming the data to the new space</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">
                  t-SNE (t-Distributed Stochastic Neighbor Embedding)
                </h4>
                <p className="mb-4">
                  t-SNE is particularly effective for visualizing high-dimensional data in two or three dimensions. It:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Preserves local structure of the data</li>
                  <li>Maintains clusters and relationships</li>
                  <li>Is especially useful for visualization</li>
                </ul>
                <p className="mb-4">
                  Key concepts in t-SNE include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Similarity measures in high dimensions</li>
                  <li>Student's t-distribution for low dimensions</li>
                  <li>Gradient descent optimization</li>
                  <li>Perplexity parameter tuning</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">
                  UMAP (Uniform Manifold Approximation and Projection)
                </h4>
                <p className="mb-4">
                  UMAP is a modern dimensionality reduction technique that:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Preserves both local and global structure</li>
                  <li>Is computationally efficient</li>
                  <li>Works well with large datasets</li>
                </ul>
                <p className="mb-4">
                  The algorithm involves:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Constructing a high dimensional graph</li>
                  <li>Optimizing the low-dimensional embedding</li>
                  <li>Using Riemannian geometry concepts</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Practical Applications
                </h4>
                <p className="mb-4">
                  Dimensionality reduction is applied in various domains:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Image processing and computer vision</li>
                  <li>Natural language processing</li>
                  <li>Bioinformatics and genomics</li>
                  <li>Financial data analysis</li>
                  <li>Recommendation systems</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">
                  Best Practices and Considerations
                </h4>
                <p className="mb-4">
                  When applying dimensionality reduction:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Choose the right technique for your specific problem</li>
                  <li>Consider the trade-off between information loss and dimensionality</li>
                  <li>Validate results using downstream tasks</li>
                  <li>Monitor the impact on model performance</li>
                  <li>Document the transformation process</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnsupervisedLearning; 