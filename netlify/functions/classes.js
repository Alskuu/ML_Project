exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify([
      {
        id: 1,
        title: 'Linear Regression',
        description: 'Learn the basics of linear regression and how to apply it.',
        duration: '2h',
        level: 'Beginner',
        category: 'Supervised Learning',
      },
      {
        id: 2,
        title: 'Probabilistic Classifier',
        description: 'Understand probabilistic models for classification.',
        duration: '2.5h',
        level: 'Intermediate',
        category: 'Supervised Learning',
      },
      {
        id: 3,
        title: 'Clustering',
        description: 'Explore clustering algorithms and their applications.',
        duration: '2h',
        level: 'Beginner',
        category: 'Unsupervised Learning',
      },
      {
        id: 4,
        title: 'Unsupervised Learning',
        description: 'Dive into unsupervised learning techniques.',
        duration: '1.5h',
        level: 'Beginner',
        category: 'Unsupervised Learning',
      },
      {
        id: 5,
        title: 'Support Vector Machines',
        description: 'Master SVMs for classification and regression.',
        duration: '3h',
        level: 'Advanced',
        category: 'Supervised Learning',
      },
      {
        id: 6,
        title: 'Dimensionality Reduction',
        description: 'Reduce data dimensions for better performance.',
        duration: '2h',
        level: 'Intermediate',
        category: 'Unsupervised Learning',
      },
      {
        id: 7,
        title: 'Non-Parametric Learning',
        description: 'Learn about non-parametric methods like k-NN.',
        duration: '1.5h',
        level: 'Intermediate',
        category: 'Supervised Learning',
      },
      {
        id: 8,
        title: 'Decision Trees and Ensemble Learning',
        description: 'Learn about decision trees and ensemble methods like Random Forests and Boosting.',
        duration: '2.5h',
        level: 'Intermediate',
        category: 'Supervised Learning',
      },
      {
        id: 9,
        title: 'Neural Networks and Deep Learning',
        description: 'An introduction to neural networks, from perceptrons to CNNs.',
        duration: '3.5h',
        level: 'Advanced',
        category: 'Neural Networks',
      },
    ])
  };
};