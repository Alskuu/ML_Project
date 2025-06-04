import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Import images
import linear1Image from '../images/SVMs/linear1.png';
import linear2Image from '../images/SVMs/linear2.png';
import marginImage from '../images/SVMs/margin.png';
import supportVectImage from '../images/SVMs/support_vect.png';
import largestMarginImage from '../images/SVMs/largest_margin.png';
import problemImage from '../images/SVMs/problem.png';
import supportVectorsImage from '../images/SVMs/support_vectors.png';
import overlap1Image from '../images/SVMs/overlap1.png';
import overlap2Image from '../images/SVMs/overlap2.png';
import xiImage from '../images/SVMs/xi.png';
import cParamImage from '../images/SVMs/C_param.png';
import lagrangianBisImage from '../images/SVMs/lagrangian_bis.png';
import kernel1Image from '../images/SVMs/kernel_1.png';
import kernel2Image from '../images/SVMs/kernel_2.png';
import kernel3Image from '../images/SVMs/kernel_3.png';

const SupportVectorMachines: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-8">Support Vector Machines</h1>

      <section className="mb-8">
        <p>To begin this chapter we have to know that:</p>
        <ul>
          <li>SVM have a strong theory that supports its performance.</li>
          <li>It can work well with very high dimensional problems.</li>
          <li>It is now one of the most popular and strong methods.</li>
          <li>For text categorization, linear SVM performs very well.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Linear SVMs</h2>
        <p>Firstly let's consider linearly separable data.</p>
        <p><strong>What is linearly separable data?</strong></p>
        
        <div className="flex justify-center my-6">
          <img src={linear1Image} alt="Linearly separable data example 1" className="max-w-2xl w-full rounded-lg shadow-lg" />
          <p className="text-center text-sm text-gray-600 mt-2">A straight line can separate the two classes there.</p>
        </div>

        <div className="flex justify-center my-6">
          <img src={linear2Image} alt="Linearly separable data example 2" className="max-w-2xl w-full rounded-lg shadow-lg" />
        </div>

        <p>Our goal is now to compute the separating line or hyperplane.</p>

        <h3 className="text-xl font-semibold mb-4">Definitions</h3>
        <p>Let's define some terms:</p>
        
        <p><strong>The margin:</strong></p>
        <div className="flex justify-center my-6">
          <img src={marginImage} alt="Margin visualization" className="max-w-2xl w-full rounded-lg shadow-lg" />
          <p className="text-center text-sm text-gray-600 mt-2">The margin is twice the distance from the separating hyperplane to the nearest training points.</p>
        </div>

        <p><strong>The support vectors:</strong></p>
        <div className="flex justify-center my-6">
          <img src={supportVectImage} alt="Support vectors visualization" className="max-w-2xl w-full rounded-lg shadow-lg" />
          <p className="text-center text-sm text-gray-600 mt-2">The support vectors are the data points that are the closest to the decision boundary in each class</p>
        </div>

        <p><strong>Largest margin classifier:</strong></p>
        <div className="flex justify-center my-6">
          <img src={largestMarginImage} alt="Largest margin classifier" className="max-w-2xl w-full rounded-lg shadow-lg" />
          <p className="text-center text-sm text-gray-600 mt-2">The concept of a largest margin classifier in SVMs aims to find a hyperplane that maximizes the margin between the nearest data points of different classes. That's how we will determine our new classes.</p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Problem Formulation</h3>
        <p>But how do we design an optimal margin classifier, in other terms a separating hyperplane <InlineMath math="\mathbf{w}" /> with maximal margin.</p>
        <p>We define a training set <InlineMath math="D = \{(x^1,y^1),...(x^n,y^n)\}, \forall i \in \{1,...,n\}, x^i\in\mathbb{R}^p \text{ and } y^i\in\{-1,1\}" /></p>

        <p>We need to find a linear function <InlineMath math="f(x) = w^Tx + b" />, <InlineMath math="w\in\mathbb{R}^p" />, <InlineMath math="b\in\mathbb{R}" /> that classifies samples such that:</p>
        <ul>
          <li><InlineMath math="f(x)>0 \implies x" /> is assigned to class <InlineMath math="+1" /></li>
          <li><InlineMath math="f(x)<0 \implies x" /> is assigned to class <InlineMath math="-1" /></li>
        </ul>

        <div className="flex justify-center my-6">
          <img src={problemImage} alt="Problem visualization" className="max-w-2xl w-full rounded-lg shadow-lg" />
          <p className="text-center text-sm text-gray-600 mt-2">This figure schematizes the problem.</p>
        </div>

        <h3 className="text-xl font-semibold mb-4">Optimization Problem</h3>
        <p>Let's first prove that <InlineMath math="\gamma=\frac{2}{||w||}" />.</p>
        <p>Let's consider points in the boundaries from our last figure (the orange one and the turquoise one). The point <InlineMath math="\mathbf{x}" /> considered respects the following equation:</p>
        <BlockMath math="\mathbf{w}^Tx+b \pm1=0 \iff \mathbf{w}^Tx+b = \pm1 \iff x^{j}=\pm \frac{(1-b)}{||\mathbf{w}||} \text{ for j } \in \{+,-\}" />
        <p>Then <InlineMath math="\gamma" /> (the width) takes for value:</p>
        <BlockMath math="\gamma = (x^+-x^-)\frac{\mathbf{w}}{||\mathbf{w}||} =\frac{2}{||\mathbf{w}||}" />
        <p>So our optimization problem can be resumed as maximizing the width (<InlineMath math="\gamma" />) and then finding the vector <InlineMath math="\mathbf{w}" /> for which <InlineMath math="\gamma" /> is maximal or <InlineMath math="1/\gamma" /> is minimal <InlineMath math="\iff" /> searching for <InlineMath math="min\frac{1}{2}||\mathbf{w}||^2" />.</p>

        <p>Our maximisation problem can then be written as following:</p>
        <p><InlineMath math="D = \{(x^1,y^1),...(x^n,y^n)\}, \forall i \in \{1,...,n\}, x^i\in\mathbb{R}^p \text{ and } y^i\in\{-1,1\}" /></p>
        <p>Linear separating hyperplane:</p>
        <p><InlineMath math="\exists (\mathbf{w},b) \in \mathbb{R}^p x \mathbb{R}" /> for which:</p>
        <BlockMath math="\begin{cases} \langle\mathbf{w},\mathbf{x}^i\rangle + b > 0 \text{ if } y^i = 1\\ \langle \mathbf{w},\mathbf{x}^i\rangle + b < 0 \text{ if } y^i = -1 \end{cases}" />

        <p>We need to find <InlineMath math="(\mathbf{w}^*,b^*)" /> defining the hyperplane with the largest margin and that classifies correctly each sample.</p>

        <p>So the correct classification is finally:</p>
        <p>For positive labels: <InlineMath math="\langle\mathbf{w},\mathbf{x}^i\rangle + b \geq 1" /></p>
        <p>For negative labels: <InlineMath math="\langle\mathbf{w},\mathbf{x}^i\rangle + b \leq -1" /></p>

        <p>This is subject to:</p>
        <p><InlineMath math="y^i(\mathbf{w}^Tx^i+b) -1 \geq 0, i = 1,...,n" /> by minimizing: <InlineMath math="\frac{||\mathbf{w}||^2}{2}" /></p>

        <p>This is what we call the Primal Optimization Problem.</p>

        <h4 className="text-lg font-semibold mb-4">Lagrange formulation</h4>
        <p>So we can define the following functions:</p>
        <p><InlineMath math="f(\mathbf{w}) = \frac{||w||^2}{2}" /> and <InlineMath math="g(\mathbf{w}) = y(\langle\mathbf{w},\mathbf{x}\rangle +b) -1" />.</p>

        <p>We can then use the method of Lagrange multipliers:</p>
        <p><InlineMath math="L(\mathbf{w},\alpha) = f(\mathbf{w}) - \alpha g(\mathbf{w})" /></p>
        <p><InlineMath math="\alpha" /> is called the Lagrange multiplier (its role is to have the best classification possible at the end, parallely to having the minimization problem)</p>
        <p>we have then:</p>
        <p><InlineMath math="\alpha g(\mathbf{w} = \sum_{i=1}^{n} \alpha_i g_i(\mathbf{w})" /></p>

        <p>We now have to add b in the parameters of the function <InlineMath math="L" /> too (<InlineMath math="L(\mathbf{w},b,\alpha)" />) and <InlineMath math="\alpha \in \mathbb{R}_+^n" /></p>

        <p>So we have the following equation:</p>
        <BlockMath math="L(\mathbf{w},b,\alpha) = \frac{||\mathbf{w}||^2}{2} - \sum_{i=1}^n \alpha_i[y^i(\mathbf{w}^T\mathbf{x}^i+b)-1]" />

        <p>After some studies, we find out that <InlineMath math="\mathbf{L}" /> is convex in <InlineMath math="\mathbf{w}" /> and in <InlineMath math="b" />. So it will help to minimize our inital function to use the gradients.</p>
        <p>We now set the derivative of <InlineMath math="L" /> with <InlineMath math="\mathbf{w}" /> to zero:</p>

        <BlockMath math="\nabla_w \mathcal{L}(w, b, \alpha) = w - \sum_{i=1}^{n} \alpha_i y^i x^i = 0 => w = \sum_{i=1}^n\alpha_iy^ix^i" />

        <p>Same for b</p>
        <BlockMath math="\frac{\partial}{\partial b} \mathcal{L}(w, b, \alpha) = \sum_{i=1}^{n} \alpha_i y^i = 0" />

        <p>We can plug <InlineMath math="\mathbf{w}" /> back into the Lagrangian, we express w and b as a function of <InlineMath math="\alpha" /> by minimizing <InlineMath math="L" /> in function of w and b.</p>
        <BlockMath math="L(\mathbf{w},b,\alpha) = \sum_{i=1}^n \alpha_i - \frac{1}{2}\sum_{i,j=1}^ny^iy^j\alpha_i\alpha_j(x^i)^T-0" />

        <p>So now we have to maximize this function:</p>
        <BlockMath math="L(\mathbf{w},b,\alpha)= \sum_{i=1}^n \alpha_i - \frac{1}{2}\sum_{i,j=1}^n\alpha_i\alpha_jy^iy^j\langle\mathbf{x}^i,\mathbf{x}^j\rangle" />
        <p>subject to <InlineMath math="\alpha_i \geq 0, i=1,...,n" /> and <InlineMath math="\sum_{i=1}^n\alpha_iy^i=0" /></p>
        <p>This problem is a dual optimization problem.</p>

        <p>We want to maximize the impact of our <InlineMath math="\alpha" />. We want only a small subset of his components to be nonzero, so the corresponding <InlineMath math="\mathbf{x}_i" /> will be the support vectors. (they are the only one who play a role in the prediction! What is great too is that an inner product appears in the optimization problem.</p>

        <p>The nonzeros will be the <InlineMath math="\alpha_i" /> for which we have only:</p>
        <BlockMath math="y^i(\langle\mathbf{w},x^i\rangle+b)=1" />

        <div className="flex justify-center my-6">
          <img src={supportVectorsImage} alt="Support vectors" className="max-w-2xl w-full rounded-lg shadow-lg" />
        </div>

        <h3 className="text-xl font-semibold mb-4">The Optimal Hyperplane</h3>
        <p>Once the optimal <InlineMath math="\alpha^*" /> is found, we recover (<InlineMath math="\mathbf{w}^*,b^*" />) such as</p>
        <BlockMath math="\begin{cases} \mathbf{w}^* = \sum_{i=1}^n \alpha_i^*y^ix^i \\ b^* = -\frac{\max_{i : y^i = -1} \langle \mathbf{w}^*, \mathbf{x}^i \rangle + \min_{i : y^i = +1} \langle \mathbf{w}^*, \mathbf{x}^i \rangle}{2} \end{cases}" />

        <p>For the optimal <InlineMath math="b^*" /> we can explain it by this:</p>
        <ul>
          <li>Closest positive point to the separating hyperplane corresponds to the min with <InlineMath math="y^i=1" />: <InlineMath math="\langle\mathbf{w}^*,\mathbf{x}\rangle+b^*=1" /></li>
          <li>For the closest negative point to the separating hyperplane it corresponds to the max expression, we then have the same equation with <InlineMath math="-1" /> and <InlineMath math="b^*" /> can be found by substracting the two equations and isolating <InlineMath math="b^*" />.</li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Decision function</h3>
        <p>We can now create our decision function, which will help us classify correctly each point:</p>
        <BlockMath math="f^*(x) = \langle\mathbf{w}^*,\mathbf{x}\rangle + b^* = \sum_{i=1}^n \alpha_i^*y^i\langle\mathbf{x^i},\mathbf{x}^j\rangle + b^*" />

        <h3 className="text-xl font-semibold mb-4">Conclusion</h3>
        <p>The Primal Optimization Problem predicts based on the learnt (n+1) values (w,b), it is called a parametric approach.</p>
        <p>The Dual Optimization Problem, takes only the support vectors to play a role in the classification, and a significant proportion of data points can be discarded.</p>
        <p>This last optimization used with the Lagrange function is much better to implement in terms of memory.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Overlapping Case: Soft Margin SVMs</h2>
        <p>Let's take the case of two classes, with points that overlap our classic margin.</p>

        <div className="flex justify-center my-6">
          <img src={overlap1Image} alt="Overlapping classes" className="max-w-2xl w-full rounded-lg shadow-lg" />
        </div>

        <p>How can we define the margin?</p>

        <div className="flex justify-center my-6">
          <img src={overlap2Image} alt="Margin definition" className="max-w-2xl w-full rounded-lg shadow-lg" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Loss Function</h3>
        <p>We will have to make a trade-off between a large margin and some classification errors:</p>
        <p><InlineMath math="min_f(\frac{1}{margin(f)}+C\times error(f))" /></p>
        <p>How do we define error(f):</p>
        <ul>
          <li>We want for all i: <InlineMath math="y^id(\textbf{x}^i) \geq 1" /></li>
          <li>We can formulate an error like the Hinge loss function:</li>
        </ul>
        <BlockMath math="l_{hinge}(u,y) = max(1-yu,0)" />
        <p>where u is the output of the classifier with our decision function.</p>

        <p>We then can formulate our problem like this:</p>
        <BlockMath math="arg min_{w,b}(\frac{1}{2}||\mathbf{w}||^2 + C\sum_{i=1}^n max(0,1-y^i(<\mathbf{w},\mathbf{x}^i>+b)))" />

        <p>We can then define: <InlineMath math="\xi_i = l_{hinge}(y^i,x^i)" /> which are the components of the sum.</p>
        <p>We can visualize this like this:</p>

        <div className="flex justify-center my-6">
          <img src={xiImage} alt="Xi visualization" className="max-w-2xl w-full rounded-lg shadow-lg" />
        </div>

        <h3 className="text-xl font-semibold mb-4">How to define C?</h3>
        <p>C is a user-defined parameter which helps to do a trade-off between the training error and the model complexity. Also between the slack errors and margin maximization.</p>

        <div className="flex justify-center my-6">
          <img src={cParamImage} alt="C parameter visualization" className="max-w-2xl w-full rounded-lg shadow-lg" />
        </div>

        <p>In the case when C is too big there may be some big overfitting problems because we actually don't let some misclassification happen. We don't have to forget that <InlineMath math="\xi" /> depends on <InlineMath math="\mathbf{w}" /></p>
        <p>Finally we have a new type of Lagrangian optimization:</p>

        <div className="flex justify-center my-6">
          <img src={lagrangianBisImage} alt="Lagrangian optimization" className="max-w-2xl w-full rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The Non-Linearly Separable Case: Kernel SVMs</h2>
        <p>What to do when we have non-linear boundaries?</p>

        <div className="flex justify-center my-6">
          <img src={kernel1Image} alt="Non-linear boundaries" className="max-w-2xl w-full rounded-lg shadow-lg" />
        </div>

        <p>The data may be linearly separable in another feature space such as a higher dimensional space:</p>

        <div className="flex justify-center my-6">
          <img src={kernel2Image} alt="Higher dimensional space" className="max-w-2xl w-full rounded-lg shadow-lg" />
        </div>

        <p>We can add this simple example to better understand how kernel are used:</p>

        <div className="flex justify-center my-6">
          <img src={kernel3Image} alt="Kernel example" className="max-w-2xl w-full rounded-lg shadow-lg" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Linearity in a Higher-Dimensional Space</h3>
        <p>How to form linear decision boundaries in the new space:</p>
        <ol>
          <li>Step 1: Take <InlineMath math="\varphi(.)" /> that maps the data into a new feature space: <InlineMath math="x->\varphi(x)" /></li>
          <li>Step 2: Replace the dot products between the original inputs with transformed feature points: <InlineMath math="x_i^Tx_j->\varphi(x_i)^T\varphi(x_j)" /></li>
          <li>Find a linear decision boundary in the feature new space. With the dual problem formulation.</li>
        </ol>
        <BlockMath math="L(\mathbf{w}, b, \boldsymbol{\alpha}) = \sum_{i=1}^n \alpha_i - \frac{1}{2} \sum_{i=1}^n \sum_{j=1}^n \alpha_i \alpha_j y^i y^j \langle \mathbf{x}^i, \mathbf{x}^j \rangle \Rightarrow L(\mathbf{w}, b, \boldsymbol{\alpha}) = \sum_{i=1}^n \alpha_i - \frac{1}{2} \sum_{i=1}^n \sum_{j=1}^n \alpha_i \alpha_j y^i y^j \langle \phi(\mathbf{x}^i), \phi(\mathbf{x}^j) \rangle" />

        <p>But how do you find a useful feature transformation <InlineMath math="\varphi" />?</p>
        <p>Generally it is very difficult to define it explicitly.</p>

        <h4 className="text-lg font-semibold mb-4">Mathematical Formulation</h4>
        <p>Let's use the following theorem:</p>
        <p>K is a kernel if it is positive definite.</p>

        <ul>
          <li>A function <InlineMath math="K(\mathbf{x}, \mathbf{x}')" /> defined on a set <InlineMath math="\mathcal{X}" /> is positive definite iff it is symmetric and satisfies:</li>
        </ul>
        <BlockMath math="\forall N \in \mathbb{N}, \forall (\mathbf{x}^1, \mathbf{x}^2, \ldots, \mathbf{x}^N) \in \mathcal{X}^N \text{ and } (a_1, a_2, \ldots, a_N) \in \mathbb{R}^N, \quad \sum_{i=1}^{N} \sum_{j=1}^{N} a_i a_j K(\mathbf{x}^i, \mathbf{x}^j) \geq 0" />

        <ul>
          <li>A function <InlineMath math="K(\mathbf{x}, \mathbf{x}')" /> defined on a set <InlineMath math="\mathcal{X}" /> is a kernel if it exists a Hilbert space <InlineMath math="\mathcal{H}" /> and a mapping <InlineMath math="\varphi \colon \mathcal{X} \to \mathcal{H}" /> such that, for any <InlineMath math="\mathbf{x}, \mathbf{x}' \in \mathcal{X}" />:</li>
        </ul>
        <BlockMath math="K(\mathbf{x}, \mathbf{x}') = \langle \Phi(\mathbf{x}), \Phi(\mathbf{x}') \rangle_{\mathcal{H}}" />

        <p>So when we compute K(x,x') it means computing an underlying inner product in a transformed space and we don't need to know <InlineMath math="\varphi()" /> explicitly.</p>
        <p>Many ML algorithms can be expressed as inner products between vectors and then we can express the dual problem.</p>
        <p>But it is not easy to find <InlineMath math="\varphi" /> and to compute the explicit mappings <InlineMath math="\varphi(x_1), \varphi(x_2)" /> and their inner product can be computationally expensive O(<InlineMath math="n^3" />),O(<InlineMath math="n^2" />),...</p>
        <p>And so the kernel trick is to represent directly the kernel in the mapping (without defining <InlineMath math="\varphi" />) we will see the examples later it will be clearer.</p>

        <h3 className="text-xl font-semibold mb-4">SVMs with a Kernel Function</h3>
        <p>We then have to maximize:</p>
        <BlockMath math="L(w,b,\alpha) = \sum_{i=1}^n\alpha_i - \frac{1}{2}\sum_{i,j=1}^n\alpha_i\alpha_jy^iy^jK(x^i,x^j)" />
        <p>With: <InlineMath math="\alpha_i \geq0, i=1,...,n" /> and <InlineMath math="\sum_{i=1}^n\alpha_iy^i=0" />.</p>
        <p>And we will predict using the function below:</p>
        <BlockMath math="f(x)= \sum_{i=1}^n \alpha_i^*y^iK(x^i,x)+b^*" />

        <h3 className="text-xl font-semibold mb-4">Kernel Examples</h3>
        <p>The Polynomial kernel:</p>
        <BlockMath math="K(x^i, x^j)=(x^{i^T}x^j+1)^d" />
        <p>The Gaussian kernel:</p>
        <BlockMath math="K(x^i,x^j)=exp(-\frac{||x^i-x^j||^2}{2\sigma^2})" />

        <p>In practice we choose the kernel function by testing it, using model order selection techniques and cross-validation on the hyperparameters (d,<InlineMath math="\sigma" /> for example there)</p>
      </section>
    </div>
  );
};

export default SupportVectorMachines; 