import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

const SupervisedLearning: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-8">Supervised Learning</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">What is Supervised Learning?</h2>
        <p>
          Supervised learning is a type of machine learning where the algorithm is trained using a dataset that contains both inputs and their corresponding correct outputs, also called <strong>labels</strong>. The goal of the algorithm is to learn a function that maps inputs to outputs, so that it can make accurate predictions on new, unseen data.
        </p>
        <p>
          <strong>Key idea:</strong> During training, the model makes predictions based on the input data, and then these predictions are <strong>explicitly compared to the known correct results</strong>. This feedback allows the model to adjust its internal parameters and improve its performance. The process continues until the model reaches a satisfactory level of accuracy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Key Concepts</h2>
        <ul>
          <li><strong>Labeled Data:</strong> Each example includes both input features and the correct output (label).</li>
          <li><strong>Prediction and Correction:</strong> The model's prediction is compared to the known output, and errors are used to update the model.</li>
          <li><strong>Generalization:</strong> After training, the model should be able to predict outputs for new, unseen inputs.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Formal Definition</h2>
        <p>
          Given a training dataset:
        </p>
        <BlockMath math="\mathcal{D} = \{(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)\}" />
        <p>
          where <InlineMath math="x_i" /> represents the input features and <InlineMath math="y_i" /> the corresponding labels, the objective is to learn a function <InlineMath math="f: \mathcal{X} \rightarrow \mathcal{Y}" /> that minimizes the error between predicted outputs <InlineMath math="\hat{y}_i = f(x_i)" /> and actual outputs <InlineMath math="y_i" />.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common Types</h2>
        <ul>
          <li><strong>Classification:</strong> Predict discrete categories (e.g., cat or dog, spam or not).</li>
          <li><strong>Regression:</strong> Predict continuous values (e.g., house price estimation).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <ul>
          <li>Email spam detection</li>
          <li>Medical diagnosis</li>
          <li>Credit scoring</li>
          <li>Image classification</li>
          <li>House price prediction</li>
        </ul>
      </section>
    </div>
  );
};

export default SupervisedLearning; 