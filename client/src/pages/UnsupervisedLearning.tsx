import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const UnsupervisedLearning: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-8">What is Unsupervised Learning?</h1>

      <section className="mb-8">
        <p>
          Unsupervised learning is a type of machine learning where the algorithm is trained on a dataset that contains <strong>no labels</strong> — that is, only input data is provided, and there are no known outputs to compare predictions to.
        </p>
        <p>
          <strong>Key idea:</strong> Unlike supervised learning, in unsupervised learning the model is not told what the "correct" outputs are. Instead, it must <strong>find structure, patterns, or groupings</strong> within the data all by itself. There is <strong>no direct way to verify its predictions</strong>, since no ground truth is provided.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul>
          <li><strong>Unlabeled Data:</strong> The dataset contains only inputs — no target values.</li>
          <li><strong>Pattern Discovery:</strong> The algorithm tries to group, organize, or simplify the data.</li>
          <li><strong>No External Supervision:</strong> There is no feedback from correct answers — learning is self-guided.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Tasks in Unsupervised Learning</h2>
        <ul>
          <li><strong>Clustering:</strong> Grouping similar data points together (e.g., customer segmentation).</li>
          <li><strong>Dimensionality Reduction:</strong> Simplifying high-dimensional data while retaining its structure (e.g., PCA).</li>
          <li><strong>Anomaly Detection:</strong> Identifying rare or unusual patterns in data.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Illustrative Example</h2>
        <p>
          A business has data on thousands of customers but no labels describing their behavior. An unsupervised algorithm can group these customers into segments based on spending habits, age, or preferences — without being told in advance what those groups should be.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
        <ul>
          <li>No clear way to evaluate accuracy, since no ground truth is available.</li>
          <li>Interpreting the discovered patterns often requires human expertise.</li>
        </ul>
      </section>
    </div>
  );
};

export default UnsupervisedLearning; 