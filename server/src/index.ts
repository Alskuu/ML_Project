import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../../client/build')));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Nouvelle route pour retourner la liste des cours
app.get('/api/classes', (req, res) => {
  const classes = [
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
  ];
  res.json(classes);
});

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});