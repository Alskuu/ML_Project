import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Import images
import gradientImage from '../images/linear_regression/gradient.png';
import lmsImage from '../images/linear_regression/lms.png';
import sgdImage from '../images/linear_regression/sgd.png';
import algo1Image from '../images/linear_regression/algo1.png';

const LinearRegression: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-8">Supervised Learning: Linear Regression & Classification</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          Linear regression is a statistical method that models the relationship between a dependent variable (target) and one or more independent variables (predictors) using a linear equation. It is widely used in machine learning for prediction and data modeling.
          The difference between regression and classification is that we have continuous outputs that we want to predict.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Simple Linear Regression</h2>
        <p>
          Simple linear regression assumes a linear relationship between an independent variable <InlineMath math="x" /> and a dependent variable <InlineMath math="y" />.
          <br />
          <strong>x</strong> is an observation that has as size K, so <InlineMath math="x \in \mathbb{R}^K" />.
          The model can be expressed as:
        </p>
        <BlockMath math="\hat{y} = \theta^T x + \theta_0" />
        <p>where:</p>
        <ul>
          <li><InlineMath math="\hat{y}" /> is the predicted value,</li>
          <li><InlineMath math="\theta" /> is the regression vector (slope),</li>
          <li><InlineMath math="\theta_0" /> is the intercept.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Cost Function</h3>
        <p>
          During the training phase, which requires having observations for which we already now the labels.
          We will have many <InlineMath math="x^{(i)}" /> for which we have a label associated <InlineMath math="y^{(i)}" />.
          To adjust the model, we minimize the cost function, typically the Mean Squared Error (MSE):
        </p>
        <BlockMath math="J(\theta, \theta_0) = \frac{1}{n}\sum_{i=1}^{n}(\hat{y}_i - y_i)^2" />
        <p>where <InlineMath math="n" /> is the number of samples.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Gradient Descent</h2>
        <p>
          Gradient descent is an optimization technique used to minimize the cost function by iteratively updating the model parameters <InlineMath math="w" /> and <InlineMath math="b" />. The parameter updates are computed using the partial derivatives of the cost function:
        </p>
        <BlockMath math="\theta \leftarrow \theta - \lambda \cdot \frac{\partial J(\theta, \theta_0)}{\partial \theta}" />
        <p>where <InlineMath math="\lambda" /> is the learning rate, controlling the step size.</p>

        <h3 className="text-xl font-semibold mb-4">The Algorithm in pseudo language</h3>
        <p>There is the algorithm explained in pseudo-language.</p>
        <div className="flex justify-center my-6">
          <img src={algo1Image} alt="The Basic Gradient Descent" className="max-w-2xl w-full rounded-lg shadow-lg" />
          <p className="text-center text-sm text-gray-600 mt-2">The Basic Gradient Descent</p>
        </div>

        <p>And the definition of the gradient is:</p>
        <div className="flex justify-center my-6">
          <img src={gradientImage} alt="Gradient definition" className="max-w-2xl w-full rounded-lg shadow-lg" />
          <p className="text-center text-sm text-gray-600 mt-2">Gradient definition</p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Choosing the Learning Rate</h3>
        <p>Choosing the right learning rate <InlineMath math="\lambda" /> is crucial:</p>
        <ul>
          <li>If <InlineMath math="\lambda" /> is too small, convergence is slow.</li>
          <li>If <InlineMath math="\lambda" /> is too large, the model may oscillate or diverge.</li>
        </ul>
        <p>Cross-validation or experimentation can help find an optimal value.</p>
        <p>Adaptive methods like Adam and RMSprop also address this issue by adjusting the learning rate dynamically for each parameter:</p>
        <ul>
          <li><strong>Adam</strong> (Adaptive Moment Estimation): Combines the advantages of AdaGrad and RMSprop by using both the first and second moments of the gradients to adapt the learning rate.</li>
          <li><strong>RMSprop</strong> (Root Mean Square Propagation): Maintains a moving average of the squared gradients to adjust the learning rate, preventing excessive oscillations.</li>
          <li>These methods generally perform better in practice, especially for complex, high-dimensional data.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Stochastic Gradient Descent (SGD)</h2>
        <p>
          Stochastic Gradient Descent updates the parameters after each individual observation <InlineMath math="(x_i, y_i)" />:
        </p>
        <BlockMath math="\theta \leftarrow \theta - \lambda \cdot (\hat{y}_i - y_i)x_i" />
        <p>where:</p>
        <ul>
          <li><InlineMath math="x_i" /> is a single data point,</li>
          <li><InlineMath math="y_i" /> is the corresponding target value,</li>
          <li><InlineMath math="\lambda" /> is the learning rate.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">The Algorithm in pseudo language</h3>
        <div className="flex justify-center my-6">
          <img src={sgdImage} alt="The Stochastic Gradient Descent" className="max-w-2xl w-full rounded-lg shadow-lg" />
          <p className="text-center text-sm text-gray-600 mt-2">The Stochastic Gradient Descent</p>
        </div>

        <p>Where we define <InlineMath math="J^{(i)}(\theta)" /> like this:</p>
        <BlockMath math="J(\theta) = \sum_{i=1}^{N} J^{(i)}(\theta)" />
        <p>And</p>
        <BlockMath math="J^{(i)}(\theta) = \frac{1}{2}(\theta^Tx^{(i)}-y^{(i)})^2" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Comparison with Basic Gradient Descent</h2>
        <ul>
          <li><strong>Batch Size</strong>: SGD uses one sample at a time, while basic GD uses the entire dataset.</li>
          <li><strong>Convergence Speed</strong>: SGD is faster initially but more fluctuating.</li>
          <li><strong>Memory Efficiency</strong>: SGD is more memory-efficient for large datasets.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Advantages and Disadvantages of SGD</h2>
        <p><strong>Advantages</strong>:</p>
        <ul>
          <li>Fast initial convergence.</li>
          <li>Suitable for large datasets.</li>
          <li>Can escape local minima.</li>
        </ul>
        <p><strong>Disadvantages</strong>:</p>
        <ul>
          <li>Noisy convergence, potential for oscillation.</li>
          <li>Sensitive to the learning rate.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Least Mean Squares (LMS) Method</h2>
        <p>
          The Least Mean Squares (LMS) method is an iterative approach <strong>to minimize specifically the Mean Squared Error</strong> (MSE) and find the optimal parameters <InlineMath math="\theta" />. It is closely related to the stochastic gradient descent (SGD) method but was primarily developed for adaptive signal processing, particularly in fields like telecommunications and control systems.
        </p>
        <p>
          The goal of adaptive signal processing is to dynamically adjust filter parameters to optimize the filtering process in real-time. Unlike fixed filters, adaptive filters can change their characteristics based on the incoming data. The LMS method was designed to adjust these filters iteratively, minimizing the error between the desired output (such as a clean signal) and the actual output (often a noisy signal). For example, in noise-canceling headphones, the LMS algorithm helps adaptively filter out unwanted ambient noise. While its original application was in signal processing, its iterative approach to minimizing the Mean Squared Error (MSE) shares similarities with stochastic gradient descent (SGD), making it valuable in machine learning for tasks like linear regression and neural networks.
        </p>

        <h3 className="text-xl font-semibold mb-4">LMS Update Rule</h3>
        <p>
          Given an input vector <InlineMath math="x^{(i)}" /> and its corresponding target <InlineMath math="y^{(i)}" />, the prediction error at iteration <InlineMath math="i" /> is:
        </p>
        <BlockMath math="e^{(i)} = y^{(i)} - \theta^T x^{(i)}" />

        <p>The weight update rule for LMS is given by:</p>
        <BlockMath math="\theta \leftarrow \theta - \lambda e^{(i)} x^{(i)}" />

        <p>where:</p>
        <ul>
          <li><InlineMath math="\lambda" /> is the learning rate,</li>
          <li><InlineMath math="e^{(i)}" /> is the prediction error.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Algorithm in pseudo-language</h3>
        <div className="flex justify-center my-6">
          <img src={lmsImage} alt="Lean Mean Squares Method" className="max-w-2xl w-full rounded-lg shadow-lg" />
          <p className="text-center text-sm text-gray-600 mt-2">Lean Mean Squares Method</p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Relation to SGD</h3>
        <p>
          LMS can be viewed as a specific case of SGD, where the loss function is the squared error, and parameter updates are performed for each training example. LMS is efficient, simple, and widely used for online learning scenarios.
        </p>

        <h3 className="text-xl font-semibold mb-4">Closed form solution</h3>
        <p>
          In some cases we can find analytically the solution. We write the cost function in matrix form, then derive and we find the following solution:
        </p>
        <BlockMath math="\theta = (X^TX)^{(-1)}X^Ty" />

        <h3 className="text-xl font-semibold mb-4">Advantages and Disadvantages</h3>
        <p><strong>Advantages</strong>:</p>
        <ul>
          <li>Simple and easy to implement.</li>
          <li>Effective for real-time processing.</li>
        </ul>
        <p><strong>Disadvantages</strong>:</p>
        <ul>
          <li>Sensitive to the choice of learning rate.</li>
          <li>May converge slowly for complex problems.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">How to have better models?</h2>
        <p>
          When our linear model is not good enough, we can design input variables which are combinations of components of <strong>x</strong>.
        </p>
        <p>
          For example a polynom of one dimensional features <strong>x</strong>:
        </p>
        <BlockMath math="y(x,\theta) = \theta_0 + \sum_{i=0}^M \theta_jx^j" />
        <p>Then we optimize the model with the SGD method.</p>

        <h3 className="text-xl font-semibold mb-4">Model complexity:</h3>
        <p>
          But it can be dangerous to have a too high dimension, because the solution can then overfit the data, we have to select simple models.
        </p>
        <p><strong>What is a simple model?</strong></p>
        <ul>
          <li>A simple model is a model for which the solution vector <InlineMath math="\theta" /> has a few non-zero parameters. Because to avoid overfitting if most of the parameters are zero, it means the model is ignoring many features, making it simpler and less complex.</li>
          <li>We then have <InlineMath math="||\theta||_1" /> which will be small (<InlineMath math="L^1" /> norm)</li>
          <li>A simple model is a model where <InlineMath math="\theta" /> is almost uniform. This uniformity indicates that the model does not rely heavily on any particular feature, leading to a balanced and less complex representation.</li>
          <li><InlineMath math="||\theta||_2^2" /> will be small (<InlineMath math="L^2" /> norm)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Regularization:</h3>
        <p>To minimize the complexity of a model we then can regularize it.</p>
        <p>We can add to the loss function a regularization term.</p>

        <h4 className="text-lg font-semibold mb-4">Ridge Regression:</h4>
        <p>We add an <strong>L2 regularizer</strong> to our Linear Regression</p>
        <BlockMath math="J_{RR}(\theta) = J(\theta) + \lambda||\theta||_2^2" />
        <p>
          The <InlineMath math="\lambda" /> parameter controls the trade-off between minimizing the error (the first term) and keeping the model simple (the second term). You can optimize this parameters value with cross validation methods.
        </p>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>It mitigates multicollinearity (when two or more independent variables in a regression model are highly correlated) by adding a penalty term to the cost function.</li>
          <li>It is biased but the variance and the Mean Squared Error (MSE) are smaller.</li>
        </ul>
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>Shrink coefficients to zero but cannot produce a model in which the coefficients will be exactly zero.</li>
        </ul>

        <h4 className="text-lg font-semibold mb-4">LASSO Regression:</h4>
        <p>We add an <strong>L1 regularizer</strong> to our Linear Regression</p>
        <BlockMath math="J_{LASSO}(\theta) = J(\theta) + \lambda||\theta||_1" />
        <p>The <InlineMath math="\lambda" /> parameter has the same role as before.</p>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>It enforces the sparsity (that many of the parameters have exactly zero for value). It then select a subset of the most relevant parameters there.</li>
        </ul>
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>If a group of features (predictors) are highly correlated, LASSO will pick only one of them.</li>
        </ul>

        <h4 className="text-lg font-semibold mb-4">Elastic Net Regression:</h4>
        <p>It consists of adding an <strong>L1 and L2 regularizer</strong> to our Linear Regression:</p>
        <BlockMath math="J_{Elast-Net}(\theta) = J(\theta) + \lambda_1||\theta||_1 + \lambda_2||\theta||_2^2" />
        <p><strong>Advantages:</strong></p>
        <ul>
          <li>It enforces sparsity</li>
          <li>It encourages grouping (either select or exclude highly correlated features)</li>
        </ul>
        <p><strong>Disadvantages:</strong></p>
        <ul>
          <li>There will be double shrinkage, which can mean over-shrinking.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Conclusion:</h3>
        <p>
          The Linear regression is very simple but works very well in practice. It is used to predict continuous dependant variables, it is prefered when there is not too much training data and the model is easily interpretable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Classification as Regression:</h2>
        <p>
          Classification is used in a discrete case, for example when <InlineMath math="y \in \{-1,1\}" />.
        </p>
        <p>
          We can then use the initial linear regression method and then we do:
        </p>
        <BlockMath math="\hat{y} = \text{sign}(\theta_0 + \theta^T x)" />
        <p>Which can mathematically be written like:</p>
        <BlockMath math="\hat{y}(x) = \text{sign}(\theta_0 + \theta^Tx)" />
        <p>
          But using linear regression for classification is sensitive to imbalanced data (one class has significantly more instances than another class).
        </p>

        <h3 className="text-xl font-semibold mb-4">Logistic Regression:</h3>
        <p>Let's focus on a binary classification.</p>
        <p>Logistic regression aims to model:</p>
        <BlockMath math="p(label|data)" />
        <p>
          By training a classifier for which it takes no sense that <InlineMath math="y_i" /> takes values larger than <InlineMath math="1" /> or smaller than <InlineMath math="0" />.
        </p>
        <BlockMath math="y_i = \text{sign}(\theta^T x)" />
        <p>
          To do this, we need to replace the <InlineMath math="sign()" /> function with the sigmoid or logistic function:
        </p>
        <BlockMath math="y(x) = \sigma(\theta^Tx) = \frac{1}{1 + e^{-\theta^Tx}}" />
        <p>
          Then we have <InlineMath math="p(y=1|x;\theta) = y(x)" /> and <InlineMath math="p(y=0|x;\theta)= 1-y(x)" />. Which brings us a Bernouilli distribution:
        </p>
        <BlockMath math="p(y|x;\theta) = y(x)^y (1-y(x))^{1-y}" />

        <h4 className="text-lg font-semibold mb-4">How to train it?</h4>
        <p>
          By assuming that the m training examples were generated independently, we write the likelihood of the parameters:
        </p>
        <BlockMath math="L(\theta)= p(y|X;\theta) = \prod_{i=1}^m p(y^{(i)}|x^{(i)};\theta)" />
        <p>We will then have a maximisation likelihood problem:</p>
        <BlockMath math="\mathcal{L}(\theta)= \log(L(\theta))" />
        <p>
          And we can maximize this with the gradient ascent method or by performing the (stochastic) gradient descent method on the negative log-likelihood.
        </p>

        <h3 className="text-xl font-semibold mb-4">Conclusion:</h3>
        <p>
          We then can classify by using a probabilistic interpretation, it is easy to implement, quick to train, the accuracy is simple for many simple datasets and it is resistant to overfitting when used with regularization.
        </p>
        <p>
          We can extend it for multiple classes with what is called the softmax regression for example.
        </p>
      </section>
    </div>
  );
};

export default LinearRegression; 