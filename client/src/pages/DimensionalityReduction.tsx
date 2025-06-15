import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Import images
import tableImg from '../images/Dimensionality Reduction/table.png';
import droiteImg from '../images/Dimensionality Reduction/droite.png';
import schema1Img from '../images/Dimensionality Reduction/schema1.png';
import schema2Img from '../images/Dimensionality Reduction/schema2.png';
import realExampleImg from '../images/Dimensionality Reduction/real_example.png';
import example2Img from '../images/Dimensionality Reduction/example2.png';
import reductionSVDImg from '../images/Dimensionality Reduction/reductionSVD.png';
import errorMinImg from '../images/Dimensionality Reduction/error_min.png';
import projectionImg from '../images/Dimensionality Reduction/projection.png';
import pcaExampleImg from '../images/Dimensionality Reduction/PCA_example.png';

const DimensionalityReduction: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Dimensionality Reduction</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="mb-4">
          What are the problems with high dimensionality? Often real data have thousands or millions of dimensions (Facebook graphs with their number of users for example).
        </p>
        <p className="mb-4">
          The problem with those high dimensions is that data becomes very sparse, so some algorithms like the density-based clustering become meaningless.
        </p>
        <p className="mb-4">
          The complexity depends on the dimensionality and some algorithms become infeasible in this case (K-nearest neighbors for example).
        </p>
        <p className="font-bold mb-4">
          Every method seen in this class corresponds to unsupervised learning
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Begin Dimensionality Reduction</h2>
        <p className="mb-4">
          Usually data can be described with fewer dimensions, like in the following case for example:
        </p>
        <div className="flex justify-center mb-4">
          <img src={tableImg} alt="Table example" className="max-w-lg" />
        </div>
        <p className="mb-4">
          The above matrix is in reality "2-dimensional": all rows can be reconstructed by scaling [1 1 1 0 0] or [0 0 0 1 1]
        </p>
        <p className="mb-4">
          One method is to use the rank of a matrix to define its dimensionality.
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Cloud of points in a 3D space</h3>
          <p className="mb-2">Think of point positions as a matrix:</p>
          <div className="mb-4">
            <BlockMath math="\mathbf{A} = \begin{pmatrix} 1 & 2 & 1 \\ -2 & -3 & 1 \\ 3 & 5 & 0 \end{pmatrix} \quad \begin{matrix} \textcolor{red}{A} \\ \textcolor{red}{B} \\ \textcolor{red}{C} \end{matrix}" />
          </div>
          <p className="italic">1 row per point</p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">We can rewrite the coordinates more efficiently</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Old basis vectors: <span className="text-blue-600">[1 0 0], [0 1 0], [0 0 1]</span></li>
            <li>New basis vectors: <span className="text-purple-600">[1 2 1], [-2 -3 1]</span></li>
            <li>Then <strong>A</strong> has new coordinates:
              <span className="text-blue-600">A: [1 0]</span>,
              <span className="text-red-600">B: [0 1]</span>,
              <span className="text-teal-600">C: [1 -1]</span>
            </li>
            <li><strong>Notice:</strong> <span className="text-brown-600">We reduced the number of coordinates</span></li>
          </ul>
        </div>

        <p className="mb-4">
          Of course it is often not as easy as this, we can modelize our data as:
        </p>
        <div className="text-center mb-4">
          <p className="text-xl">Data = useful signal + noise</p>
        </div>
        <p className="mb-4">
          Then we approximate our useful part in a lower dimensional space.
        </p>
        <div className="flex justify-center mb-4">
          <img src={droiteImg} alt="Projection example" className="max-w-3xl" />
        </div>
        <p className="mb-4">
          Rather than representing the points with 2 coordinates, we give them 1 which is the position on the red line. With this we accept some errors because the points are not directly on the line.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Utility</h3>
        <p className="mb-4">Why is dimensionality Reduction so useful?</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>It helps to discover hidden correlations in the data.</li>
          <li>Eliminate the noisy or non-relevant features that make it harder for the algorithms to learn.</li>
          <li>Better Data Visualization</li>
          <li>Easier to interpret</li>
          <li>Easier storage and processing of the data</li>
          <li>Better computational complexity (time and space)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Data in the form of a Matrix</h3>
        <p className="mb-4">
          Let's consider that we have m objects and n attributes describing this one, it will be represented as a <InlineMath math="m \times n" /> matrix named <InlineMath math="\mathbf{A}" />.
        </p>
        <p className="mb-4">
          And our goal will be to produce a new <InlineMath math="m\times k" /> matrix <InlineMath math="\mathbf{B}" /> with <InlineMath math="k \ll n" /> which conserves the information from A and reveals something about the structure of the data in <InlineMath math="\mathbf{A}" />.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Singular Value Decomposition (SVD)</h2>
        <p className="mb-4">
          We have to enounce the very famous Spectral Theorem which says:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p className="mb-2">Let <InlineMath math="A \in \mathbb{R}^{n \times n}" /> be a real symmetric matrix. Then:</p>
          <p className="mb-2">There exists an orthogonal matrix <InlineMath math="U \in \mathbb{R}^{n \times n}" /> and a diagonal matrix <InlineMath math="D \in \mathbb{R}^{n \times n}" /> such that:</p>
          <BlockMath math="A = U D U^T" />
          <p className="mt-2">or equivalently:</p>
          <BlockMath math="Q^T A Q = D" />
        </div>

        <p className="mb-4">where:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><InlineMath math="U" /> is an orthogonal matrix, i.e., <InlineMath math="U^T U = UU^T = I" /></li>
          <li><InlineMath math="D" /> is a diagonal matrix whose entries are the real eigenvalues of <InlineMath math="A" /></li>
          <li>The columns of <InlineMath math="U" /> are the orthonormal eigenvectors of <InlineMath math="A" /></li>
        </ul>

        <p className="font-bold mb-4">Conclusion: Every real symmetric matrix is orthogonally diagonalizable.</p>

        <p className="mb-4">
          So we will take this into an example for our next representation of A, a matrix that will not necessarily have the same number of columns as of lines.
        </p>

        <p className="mb-4">
          <strong>The SVD of a real matrix</strong> <InlineMath math="A \in \mathbb{R}^{m \times n}" /> <strong>is defined as:</strong>
        </p>
        <BlockMath math="\mathbf{A} = \mathbf{U} \boldsymbol{\Sigma} \mathbf{V}^\top" />

        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><span className="text-blue-600"><InlineMath math="\mathbf{U}" /></span> is the <InlineMath math="m \times r" /> orthogonal matrix that contains the left-singular vectors of <InlineMath math="A" /></li>
          <li><span className="text-blue-600"><InlineMath math="\mathbf{V}" /></span> is the <InlineMath math="n \times r" /> orthogonal matrix that contains the right-singular vectors of <InlineMath math="A" /></li>
          <li><span className="text-blue-600"><InlineMath math="\boldsymbol{\Sigma}" /></span> is the <InlineMath math="r \times r" /> <strong>diagonal matrix with nonnegative entries: the singular values <InlineMath math="\sigma_i" />, sorted from high to low.</strong></li>
        </ul>

        <p className="mb-4">
          <strong><span className="text-purple-600">Note:</span></strong> for symmetric matrices, the singular values correspond to the absolute values of the eigenvalues.
        </p>
        <p className="mb-4">
          r corresponds to the rank of our matrix <InlineMath math="\mathbf{A}" />
        </p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Definition of singular values:</h3>
          <p className="mb-4">
            The singular values of <InlineMath math="A \in \mathbb{R}^{m \times n}" /> are the square roots of the eigenvalues of the matrix <InlineMath math="A^\top A" /> and <InlineMath math="A A^\top" />.
          </p>
          <p className="mb-4">The singular values are:</p>
          <BlockMath math="\sigma_i = \sqrt{\lambda_i}, \quad i = 1, \dots, r" />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Definition of right-singular vectors:</h3>
          <p className="mb-4">
            The columns of <InlineMath math="\mathbf{V} \in \mathbb{R}^{n \times r}" /> are the eigenvectors of <InlineMath math="A^\top A" />. These are called the <strong>right-singular vectors</strong> of <InlineMath math="A" />.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Definition of left-singular vectors:</h3>
          <p className="mb-4">
            The columns of <InlineMath math="\mathbf{U} \in \mathbb{R}^{m \times r}" /> are the eigenvectors of <InlineMath math="A A^\top" />. These are called the <strong>left-singular vectors</strong> of <InlineMath math="A" />.
          </p>
        </div>

        <p className="mb-4">It can then be schematized like this:</p>
        <div className="flex justify-center mb-4">
          <img src={schema1Img} alt="SVD Schema 1" className="max-w-3xl" />
        </div>
        <div className="flex justify-center mb-4">
          <img src={schema2Img} alt="SVD Schema 2" className="max-w-3xl" />
        </div>

        <p className="mb-4">This decomposition is always possible.</p>

        <div className="flex justify-center mb-4">
          <img src={realExampleImg} alt="Real example" className="max-w-3xl" />
        </div>
        <p className="mb-4">One real case example with the users and their movie rankings</p>

        <div className="flex justify-center mb-4">
          <img src={example2Img} alt="Example 2" className="max-w-3xl" />
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Interpretation</h3>
        <p className="mb-4">So our case is an user to movie example and we can interpret the components as following:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>U is the user-to-concept similarity matrix</li>
          <li>V is the movie-to-concept similarity matrix</li>
          <li><InlineMath math="\sum" /> gives with its diagonal elements the 'strength' of each concept.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Its role in dimensionality reduction</h3>
        <div className="flex justify-center mb-4">
          <img src={reductionSVDImg} alt="SVD Reduction" className="max-w-2xl" />
        </div>

        <p className="mb-4">
          The goal is to use only one coordinate on the vector (represented by the line) instead of two coordinates (in 2D).
        </p>

        <p className="mb-4">
          But how do we choose this vector? <InlineMath math="\xrightarrow{}" /> SVD minimize what we call <strong>a reconstruction error</strong>
        </p>

        <div className="flex justify-center mb-4">
          <img src={errorMinImg} alt="Error minimization" className="max-w-2xl" />
        </div>

        <p className="mb-4">Our goal is to minimize the sum of reconstruction errors:</p>
        <BlockMath math="\sum_{i=1}^N \sum_{j=1}^D ||x_{ij}-z_{ij}||^2" />

        <p className="mb-4">Where <InlineMath math="x_{ij}" /> are the 'old' and <InlineMath math="z_{ij}" /> the 'new' coordinates.</p>

        <p className="mb-4">And so SVD gives the best axis to project on.</p>

        <p className="mb-4">Let's take again our example from before and show how to link both:</p>
        <div className="flex justify-center mb-4">
          <img src={projectionImg} alt="Projection" className="max-w-2xl" />
        </div>

        <p className="mb-4">The values inside of <InlineMath math="\mathbf{\sum}" /> design the variance (the spread) on the <InlineMath math="v_1" /> axis.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Detailed Explanation</h3>
        <p className="mb-4">
          Let's see how dimensionality reduction is exactly done.
        </p>
        <p className="mb-4">
          First we have to set the smallest singular value to zero (1.3 in the example from before) because it can be considered as noise.
          So it is the same as taking out the values of each one of the lines and columns linked only to this new value equal to 0.
        </p>

        <div className="mb-6">
          <BlockMath math="\begin{bmatrix} 1 & 1 & 1 & 0 & 0 \\ 3 & 3 & 3 & 0 & 0 \\ 4 & 4 & 4 & 0 & 0 \\ 5 & 5 & 5 & 0 & 0 \\ 0 & 2 & 0 & 4 & 4 \\ 0 & 0 & 0 & 5 & 5 \\ 0 & 1 & 0 & 2 & 2 \\ \end{bmatrix} \approx \begin{bmatrix} \bm{0.13} & -0.02 \\ \bm{0.41} & -0.07 \\ \bm{0.55} & -0.09 \\ \bm{0.68} & -0.11 \\ 0.15 & \bm{0.59} \\ 0.07 & \bm{0.73} \\ 0.07 & \bm{0.29} \\ \end{bmatrix} \times \begin{bmatrix} 12.4 & 0 \\ 0 & 9.5 \\ \end{bmatrix} \times \begin{bmatrix} 0.56 & 0.59 & 0.56 & 0.09 & 0.09 \\ -0.12 & 0.02 & -0.12 & \bm{0.69} & \bm{0.69} \\ \end{bmatrix}" />
        </div>

        <p className="mb-4">
          So now how do we approximate a matrix A of dimensions <InlineMath math="m\times n" /> with a rank k matrix (k<InlineMath math="\ll" />n)?
        </p>
        <p className="mb-4">
          It will mean that all rows and columns are combinations of a set of only k rows.
        </p>
        <p className="mb-4">
          It means that we have to chose k vectors.
        </p>

        <p className="mb-4">
          So we keep only the top k left singular vectors from <InlineMath math="U" /> (<InlineMath math="m\times k" /> matrix), same for <InlineMath math="V^T" /> (<InlineMath math="k\times n" /> matrix).
          And keep the only top k singular values in <InlineMath math="\mathbf{\sum}" />.
        </p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">How to determine k?</h4>
          <p className="mb-4">
            The Answer is that we use what we call the rule-of-thumb.
            So we keep approximately 80 to 90% of the 'energy' in the data.
          </p>
          <p className="mb-4">The energy is defined like following:</p>
          <BlockMath math="\sum_{i}\sigma_i^2" />
          <p className="mb-4">With <InlineMath math="\sigma_i" /> defined in the part 3 of this course.</p>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Conclusion for SVD</h3>
        <p className="mb-4">
          To compute SVD the complexity is <InlineMath math="\min(O(nm^2),O(n^2m))" />.
        </p>
        <p className="mb-4">But:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Less work, if we just want singular values</li>
          <li>Or if we want the k first singular vectors</li>
          <li>Or if the matrix is sparse</li>
        </ul>
        <p className="mb-4">
          And it is already implemented on packages like LINPACK, Matlab, scipy from Python and so on...
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Principal Component Analysis (PCA)</h2>
        <p className="mb-4">
          It is a straightforward application of SVD:
          The goal is to find a low-dimensional space such that information loss is minimized when data is projected onto that space.
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>It is unsupervised learning: look at the data not at any class labels</li>
          <li>It recalls the FDA algorithm</li>
        </ul>

        <p className="mb-4">We will try to maximize the variance (which means minimize the loss):</p>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Definition of the dataset</h3>
          <BlockMath math="\mathcal{D} = \{ \mathbf{x}^1, \mathbf{x}^2, \dots, \mathbf{x}^m \}, \quad \mathbf{x} \in \mathbb{R}^n" />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Mean of feature j</h3>
          <BlockMath math="\mu_j = \frac{1}{m} \sum_{i=1}^{m} x_j^i" />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Variance of feature j</h3>
          <BlockMath math="\sigma_j^2 = \frac{1}{m} \sum_{i=1}^{m} \left( x_j^i - \mu_j \right)^2" />
        </div>

        <p className="mb-4">
          Features that take large values will have larger variances, this is problematic in our case, so one solution is to standardize our features like following (scaling):
        </p>

        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Mean centering: give each feature a mean of 0</li>
          <li>Variance scaling: give each feature a variance of 1: <InlineMath math="x_j^i= \frac{x_j^i-\mu_j}{\sigma_j}" /></li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Optimization Problem</h3>
        <p className="mb-4">
          We will then project <InlineMath math="X" /> onto a direction of <InlineMath math="w" /> and maximize the variance with an optimization problem.
        </p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">1. Projection of matrix <InlineMath math="X" /> onto the direction of <InlineMath math="w" />:</h4>
          <BlockMath math="\mathbf{z} = X \mathbf{w}" />
          <BlockMath math="(m,1) = (m,n) \times (n,1)" />
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">2. Compute <InlineMath math="\mathrm{Var}(\mathbf{z})" /> as a function of <InlineMath math="\mathbf{w}" /> and <InlineMath math="X" />:</h4>
          <p className="mb-4">Let's not forget that the data is centered so the esperance of X is equal to 0.</p>
          <BlockMath math="\begin{align*} \mathrm{Var}(\mathbf{z}) &= \mathrm{Var}(X \mathbf{w}) = \mathrm{Var}(\mathbf{w}^\top X^\top) \\ &= \mathbb{E}[(\mathbf{w}^\top X^\top - \mathbb{E}[\mathbf{w}^\top X^\top])^2] \\ &= \mathbb{E}[(\mathbf{w}^\top X^\top - \mathbf{w}^\top \mathbb{E}[X])^2] \\ &= \mathbb{E}[\mathbf{w}^\top X^\top X \mathbf{w}] \\ &= \mathbf{w}^\top \mathbb{E}[X^\top X] \mathbf{w} \end{align*}" />
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Additional notations</h4>
          <BlockMath math="\Sigma = X^\top X \quad \text{(Sample covariance matrix)}" />
          <BlockMath math="\mathrm{Var}(X) = \mathbb{E}[(X - \mathbb{E}[X])^2]" />
          <BlockMath math="\|\mathbf{w}\| = 1 \quad \text{(unit vector)}" />
          <BlockMath math="\mathrm{cov}[X_i, X_j] = \mathbb{E}[(X_i - \mathbb{E}[X_i])(X_j - \mathbb{E}[X_j])]" />
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Principal Component Analysis - Optimization Formulation</h3>
        <p className="mb-4">Find</p>
        <BlockMath math="\mathbf{w}_1 = \arg\max_{\mathbf{w} \in \mathbb{R}^n} \mathrm{Var}(X \mathbf{w}) \quad \text{subject to } \|\mathbf{w}\| = 1" />

        <p className="mb-4">This can be rewritten as:</p>
        <BlockMath math="\mathbf{w}_1 = \arg\max_{\|\mathbf{w}\| = 1} \sum_{i=1}^{m} (\mathbf{w}^\top \mathbf{x}_i)^2" />
        <BlockMath math="= \arg\max_{\|\mathbf{w}\| = 1} \mathbf{w}^\top X^\top X \mathbf{w}" />

        <p className="mb-4">
          The principal component of the data reduced to compute the largest eigenvalue of the covariance matrix and its corresponding eigenvector.
        </p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Rayleigh quotient:</h4>
          <BlockMath math="\frac{\mathbf{w}^\top X^\top X \mathbf{w}}{\mathbf{w}^\top \mathbf{w}}" />
          <p className="mb-4">
            For <InlineMath math="X^TX" />, the maximization of the Rayleigh quotient is the largest eigenvalue, <InlineMath math="w" /> is the corresponding eigenvector.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-3">Second principal component:</h4>
          <BlockMath math="\mathbf{w}_2 = \arg\max_{\|\mathbf{w}\| = 1} \sum_{i=1}^{m} \left[\mathbf{w}^\top (\mathbf{x}_i - \mathbf{w}_1 \mathbf{w}_1^\top \mathbf{x}_i)\right]^2" />
          <p className="mb-4">
            In the sum, what is substracted is the PCA reconstruction of each <InlineMath math="x_i" />.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Example</h3>
        <div className="flex justify-center mb-4">
          <img src={pcaExampleImg} alt="PCA Example" className="max-w-2xl" />
        </div>
        <p className="mb-4">
          We have as input 2-d dimensional points.
          So our first princiapl axis is the direction of the maximal variance.
        </p>
        <p className="mb-4">
          Then the second principal axis is the direction of maximal variance after removing the projection of the data along the first principal axis.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Algorithm Formulation</h3>
        <p className="mb-4">Input: data matrix <InlineMath math="X" /> of size <InlineMath math="m \times n" />, target dimension <InlineMath math="k" /></p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>Standardize the data: <InlineMath math="C_j = X_j - M_j / \sigma_j, \quad j = 1, \ldots, n" /></li>
          <li>Compute the covariance matrix <InlineMath math="\Sigma = \frac{C^\top C}{m - 1}" /></li>
          <li>Principal axes: the <InlineMath math="k" /> eigenvectors <InlineMath math="U[1 \ldots k]" /> of <InlineMath math="\Sigma" /> corresponding to the <InlineMath math="k" /> largest eigenvalues</li>
          <li>Principal components: project the data onto the new space <InlineMath math="X_{\text{pca}} = C \, U[1 \ldots k]" /></li>
        </ol>

        <p className="mb-4">
          We could ask ourselves again how many eigenvalues we should retain.
        </p>
        <p className="mb-4">
          The answer is the same as for SVD.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Furthermore</h2>
        <p className="mb-4">
          If you want to go further you can go try to learn also about non-linear dimensionality reduction.
          This is much more complicated as what we have talked about earlier.
        </p>

        <p className="mb-4">
          The method used is called multidimensional scaling to place each object in an n-dimensional space, such that the relative between-object distances are preserved.
        </p>

        <p className="mb-4">
          We use isomapping to find a low dimensional map that preserves the "geodesic distances" of the data pairs. In other words the geodesic distance between two objects is also the minimal distance between two points.
        </p>

        <p className="mb-4">
          To do some isomapping, we first need to construct a neighbourhood graph, by usng k-NNs for example (there is a class about it available on the website).
        </p>

        <p className="mb-4">
          Then find the shortest path distance between nodes in the graph and create the distance matrix <InlineMath math="\mathbf{D}" />.
        </p>

        <p className="mb-4">
          Finally construct a d-dimensional embedding by applying Multidimensional Scaling (MDS).
        </p>

        <p className="mb-4">
          If you are curious you can also go learn about Local Linear Embedding.
        </p>
      </section>
    </div>
  );
};

export default DimensionalityReduction; 