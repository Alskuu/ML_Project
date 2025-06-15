import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../../client/build')));

// API routes
app.get('/api/classes', (req, res) => {
  const classes = [
    {
      id: 1,
      title: 'Linear Regression',
      description: 'Learn the fundamentals of linear regression, a basic yet powerful statistical method for modeling relationships between variables.',
      duration: '2 hours',
      level: 'Beginner',
      category: 'Supervised Learning'
    },
    {
      id: 2,
      title: 'Probabilistic Classifier',
      description: 'Explore probabilistic classification methods, including Naive Bayes and Fisher Linear Discriminant Analysis.',
      duration: '3 hours',
      level: 'Intermediate',
      category: 'Supervised Learning'
    },
    {
      id: 5,
      title: 'Support Vector Machines',
      description: 'Master Support Vector Machines (SVMs), a powerful supervised learning algorithm for classification and regression problems.',
      duration: '3 hours',
      level: 'Advanced',
      category: 'Supervised Learning'
    },
    {
      id: 3,
      title: 'K-Means Clustering',
      description: 'Master the K-means clustering algorithm, a popular unsupervised learning method for data segmentation.',
      duration: '2.5 hours',
      level: 'Intermediate',
      category: 'Unsupervised Learning'
    },
    {
      id: 4,
      title: 'Q-Learning',
      description: 'Discover Q-learning, a fundamental reinforcement learning algorithm for decision-making processes.',
      duration: '4 hours',
      level: 'Advanced',
      category: 'Reinforcement Learning'
    },
    {
      id: 6,
      title: 'Dimensionality Reduction',
      description: 'Learn advanced techniques for reducing the number of features in your dataset while preserving important information.',
      duration: '3 hours',
      level: 'Advanced',
      category: 'Unsupervised Learning'
    }
  ];
  res.json(classes);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 