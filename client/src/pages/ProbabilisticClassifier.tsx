import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Import images
import fdaImage from '../images/prob_classifier/image.png';

const ProbabilisticClassifier: React.FC = () => {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-8">Probabilistic Classifier</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          During the last chapter we assumed that it was a distribution-free classification. So we assumed that there was no underlying distribution.
          <br />
          In this chapter we assume that our model has a specific distribution and our goal will be to estimate the parameters of our model.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Generative model</h2>
        <p>
          It describes how the data is distributed using a probabilistic model.
          <br />
          So we will use the Bayesian Rules to determine <InlineMath math="p(label|data)" /> by using <InlineMath math="p(data|label)" />.
          <br />
          A Generative model tells us more about classes and data and performs better if the model is accurate.
          <br />
          It can be very efficient to compute because there are only a few parameters to learn.
        </p>

        <h3 className="text-xl font-semibold mb-4">Probabilistic Classifiers</h3>
        <p>
          We know the Maximum Likelihood Estimate (MLE) defined as:
        </p>
        <BlockMath math="\theta^{MLE} = \arg \max_{\theta}\prod_{i=1}^N p(x^{(i)}|\theta)" />
        <p>
          But if we have prior knowledge we search for the Maximum a Posteriori Estimate (MAP):
        </p>
        <BlockMath math="\theta^{MAP} = \prod_{i=1}^N p(x^{(i)}|\theta)p(\theta)" />
        <p>
          <InlineMath math="p(\theta)" /> is called the prior.
          <br />
          <strong>What is a Bayes Classifier?</strong>
          <br />
          posterior <InlineMath math="= \frac{\text{prior} \times \text{class likelihood}}{\text{evidence}}" />
          <br />
          Which brings us to:
        </p>
        <BlockMath math="P(C|x) = \frac{P(x|C)P(C)}{P(x)}" />
        <p>
          <InlineMath math="P(x|C)" /> is also called the event model of Naïve Bayes.
          <br />
          The following rules will of course be respected:
          <br />
          <InlineMath math="P(C=0|x)+P(C=1|x)= 1" /> and <InlineMath math="P(x)=P(x|C=1)P(C=1) + P(x|C=0)P(C=0)" />
          <br />
          We then take the following decision:
        </p>
        <BlockMath math="C = \begin{cases} 1 & \text{if } P(C=1|x)>P(C=0|x) \\ 0 & \text{otherwise} \end{cases}" />

        <h3 className="text-xl font-semibold mb-4">Example</h3>
        <p>
          Our generative classifier assumes that <InlineMath math="P(x|C)" /> is distributed according to a Gaussian distribution. And let's first assume that it is a 1-D problem.
          <br />
          Let's also assume that the N data points that we have are independent and identically distributed:
        </p>
        <BlockMath math="p(x^{(1)},...,x^{(N)}|C) = \prod_{i=1}^N p(x^{(i)}|C) = \prod_{i=1}^N \frac{1}{\sqrt{2\pi\sigma_C}}\exp(-\frac{(x^{(i)}-\mu_C)^2}{2\sigma_C^2})" />
        <p>
          Now we want to maximize its log-likelihood or minimize its negative by derivating it and searching its zero.
          <br />
          The parameter MLEs for a Gaussian distribution are the followings:
        </p>
        <BlockMath math="\mu = \frac{1}{N}\sum_{i=1}^N x^{(i)} \text{ and } \sigma^2 = \frac{1}{N}\sum_{i=1}^N (x^{(i)}-\mu)^2" />

        <p>
          <strong>What if it is a multidimensional case? (d dimensions)</strong>
          <br />
          In this case we define <InlineMath math="\Sigma" /> which is a matrix d×d size.
          <br />
          And we have <InlineMath math="p(\mathbf{x} \mid C = 0) \sim \mathcal{N}(\mu_0, \Sigma)" /> and <InlineMath math="p(\mathbf{x} \mid C = 1) \sim \mathcal{N}(\mu_1, \Sigma)" />
          <br />
          Where:
        </p>
        <ul>
          <li><InlineMath math="\mu_0 = \frac{\sum_{n=1}^N \mathbf{1}\{C^{(n)} = 0\} \mathbf{x}^{(n)}}{\sum_{n=1}^N \mathbf{1}\{C^{(n)} = 0\}}" /></li>
          <li><InlineMath math="\mu_1 = \frac{\sum_{n=1}^N \mathbf{1}\{C^{(n)} = 1\} \mathbf{x}^{(n)}}{\sum_{n=1}^N \mathbf{1}\{C^{(n)} = 1\}}" /></li>
          <li><InlineMath math="\Sigma = \frac{1}{N} \sum_{n=1}^N (\mathbf{x}^{(n)} - \mu_{C^{(n)}})(\mathbf{x}^{(n)} - \mu_{C^{(n)}})^T" /></li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">Decision</h3>
        <p>
          We associate a probability for each label <InlineMath math="p(label\in \{0;1\}|\mathbf{x})=1" />
        </p>

        <h3 className="text-xl font-semibold mb-4">Naïve Bayes</h3>
        <p>
          The idea is to assume that the features are conditionally independent (this is a Naïve assumption).
          <br />
          Let's take a case where we have K classes and <InlineMath math="\mathbf{x}" /> is a d-dimensional vector.
        </p>
        <BlockMath math="P(C_k|\mathbf{x}) = \frac{p(\mathbf{x}|C_k)P(C_k)}{\sum_{k=1}^K p(\mathbf{x}|C_k)P(C_k)}" />
        <BlockMath math="p(x_1, \ldots, x_d|C_k) = p(x_1|C_k)p(x_2|C_k) \cdots p(x_d|C_k)" />
        <p>
          Thus, <InlineMath math="P(C_k|x_1, \ldots, x_d) \propto p(C_k, x_1, \ldots, x_d)" />
        </p>
        <BlockMath math="\propto p(C_k)p(x_1|C_k)p(x_2|C_k)p(x_3|C_k)\cdots" />
        <BlockMath math="\propto p(C_k) \prod_{i=1}^d p(x_i|C_k)" />
        <p>
          We then do a classification by using the Maximum a Posteriori Estimate with the MAP rule:
          <br />
          <InlineMath math="\hat{y} = \arg \max_{k=1,...,K} p(C_k)\prod_{i=1}^d p(x_i|C_k)" />. <InlineMath math="\hat{y}" /> is the estimated label/category.
        </p>

        <h3 className="text-xl font-semibold mb-4">Example, Naïve Bayes Spam Filtering</h3>
        <p>
          In this problem, there are emails as input, and the output is a determination to know if it is a spam or a normal email by the words that appear in this email.
          <br />
          We have the features which are a bag of words of size d corresponding to the d words in the dictionary.
          <br />
          <InlineMath math="x\in \{0,1\}" />.
          <br />
          Each email is the outcome of d Beroulli trials (two possible outcomes for every word).
          <br />
          Our Naive assumption is that the trials are independent.
          <br />
          <InlineMath math="p(x_j|spam) = p_j^{x_j}(1-p_j)^{(1-x_j)}" />
        </p>
        <ul>
          <li><InlineMath math="p_j" /> is the probability that the class 'spam' generates the word j.</li>
          <li>Generally <InlineMath math="p_j = S_j/S" />, where <InlineMath math="S_j" /> is the number of spams containing the word j in the training set and S the number of spams in the training set.</li>
          <li><InlineMath math="x_j" /> is the value of the feature j (0 or 1)</li>
        </ul>
        <p>
          So now we can write:
          <br />
          <InlineMath math="P(spam|(x_1,x_2,...,x_d)) = p(x_1|spam)p(x_2|spam)...p(x_d|spam)\times\frac{1}{Z}" />
          <br />
          We then do the same and we decide by using the MAP rule.
        </p>

        <h3 className="text-xl font-semibold mb-4">Conclusion</h3>
        <p>
          The Naive assumption allows us to estimate scalar/univariate densities only because we always consider a single feature at a time.
          <br />
          It helps to process unseen combinations of features.
          <br />
          And it is adapted to discrete data like in our example.
          <br />
          The three main steps are the following:
        </p>
        <ul>
          <li>Find a probability distribution that could correspond to the density repartition.</li>
          <li>Estimate the distribution parameters for each class, like MLE and the frequency.</li>
          <li>And finally decide the class by using the MAP rule.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Fisher Linear Discriminant Analysis (FDA/FLDA)</h2>
        <h3 className="text-xl font-semibold mb-4">Fisher Discriminant Analysis</h3>
        <p>
          FDA is a method to reduce dimensionality while enforcing the class separation.
          <br />
          Let's consider that we have N D-dimensional vectors in input. And two classes (K=2).
          <br />
          We obtain the new data <InlineMath math="\mathbf{y}" /> by projecting the samples <InlineMath math="\mathbf{x}" /> onto a line <InlineMath math="y=w^Tx" />.
          <br />
          To find the best <InlineMath math="\mathbf{w}" /> (the one that maximizes the class separability), we have to know how measure the class separation.
          <br />
          To do this, let's say that for <InlineMath math="i \in \{1,2\} \text{  } N_i" /> is the number of samples that belong to class <InlineMath math="C_i" />.
          <br />
          Let's define some new variables:
        </p>
        <BlockMath math="\begin{cases} \mu_i = \frac{1}{N_i}\sum_{x\in C_i} x  \text{  original space}\\ \tilde{\mu}_i = \frac{1}{N_i}w^T\sum_{x\in C_i}x = w^T\mu_i \text{  new space} \end{cases}" />
        <p>
          We could then choose the distance between the projected means as our objective function is:
        </p>
        <BlockMath math="J(w) = |\tilde{\mu}_1 - \tilde{\mu}_2| = |w^T(\mu_1-\mu_2)|" />
        <p>
          <strong>Finally it does not consider how the data is spread around the mean: variance within classes.</strong>
          <br />
          We consider only the between-class distance.
        </p>

        <h3 className="text-xl font-semibold mb-4">Fisher's Solution</h3>
        <p>
          So the solution is then to add the minimizing of the within-class distance.
          <br />
          So we add to this the variance, the scatter or covariance matrix and the within-class scatter matrix <InlineMath math="S_w" />
        </p>
        <BlockMath math="\begin{cases} S_i = \sum_{x\in C_i}(x-\mu_i)(x-\mu_i)^T \\ S_1+S_2 = S_w \\ \text{Where $S_w$ has size d$\times$d and $S_i$ is the covariance matrix per class.} \end{cases}" />
        <p>
          Our new goal is then to find <InlineMath math="\mathbf{w}" /> by minimizing the within the within-class distance and maximizing the between-class distance.
          <br />
          We define our between class scatter matrix:
        </p>
        <BlockMath math="S_b = \sum_{j=1}^2 n_j(\mu_j-\mu)(\mu_j-\mu)^T" />
        <p>
          Where <InlineMath math="\mu_j" /> is the mean vector of j-th class, <InlineMath math="\mu" /> the total mean and <InlineMath math="n_j" /> is the number of instances in class j.
          <br />
          The distance between classes can then be defined as following:
        </p>
        <BlockMath math="(\tilde{\mu}_1-\tilde{\mu}_2)^2=(w^T\mu_1-w^T\mu_2)^2 = w^T(\mu_1-\mu_2)(\mu_1-\mu_2)^Tw=w^TS_bw" />

        <h3 className="text-xl font-semibold mb-4">Fisher's Criterion</h3>
        <p>
          We can now express our objective function like this:
        </p>
        <BlockMath math="J(w) = \frac{w^TS_bw}{w^TS_ww}" />
        <p>
          This is the fraction between the distance between the projected means and the projected within-class variance.
          <br />
          We search for the <InlineMath math="\mathbf{w}" /> <strong>that maximizes the objective function</strong>.
          <br />
          This is known as Fisher's criterion.
        </p>

        <h3 className="text-xl font-semibold mb-4">Optimization</h3>
        <p>
          To find the maximum of J(w) we take the derivative and set to zero:
        </p>
        <BlockMath math="\frac{d}{dw}[J(w)]= 0" />
        <p>
          And we have to know that for a symetric matrix (it is always the case for a covariance matrix like in our case):
        </p>
        <BlockMath math="\frac{d[w^TS_{w,b}w]}{dw}=2S_{w,b}w" />
        <p>
          After simplifying our calculations the result is:
        </p>
        <ul>
          <li><InlineMath math="S_bw - [\frac{w^TS_bw}{w^TS_ww}]S_ww=0" /></li>
          <li>By naming <InlineMath math="[\frac{w^TS_bw}{w^TS_ww}]" /> <InlineMath math="\lambda" /> we then have a generalized eigenvalue problem which will be the following:</li>
          <li><InlineMath math="S_w^{-1}S_bw-\lambda w=0" /></li>
        </ul>

        <h3 className="text-xl font-semibold mb-4">The Fisher Discriminant Analysis's (FDA) Algorithm</h3>
        <div className="flex justify-center my-6">
          <img src={fdaImage} alt="FDA Algorithm" className="max-w-2xl w-full rounded-lg shadow-lg" />
        </div>
        <p>
          In Fisher Discriminant Analysis (FDA), we select the K−1 largest eigenvalues (and their corresponding eigenvectors) rather than K because the rank of the between-class scatter matrix <InlineMath math="S_b" /> is at most K−1.
          <br />
          So our matrix that we will name <InlineMath math="\mathbf{W}" /> has the dimension (K-1)×d.
          <br />
          So <InlineMath math="X_{FDA}=\mathbf{W}^TX" />
        </p>

        <h3 className="text-xl font-semibold mb-4">Limitations</h3>
        <p>
          One of the limitations that we can see is that we can not apply the FDA Algorithm if the number of classes is bigger than the number of features.
          <br />
          But in cases of high dimensionality this is rarely the case.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Further more</h2>
        <p>
          FDA is only one of the techniques that exist to ensure dimensionality reduction.
          <br />
          For those who want more techniques, there exist for example the Linear Discriminant Analysis called LDA or the PCA (which we may treat in another chapter).
        </p>

        <h3 className="text-xl font-semibold mb-4">LDA</h3>
        <p>
          How to classify a new data instance <InlineMath math="\mathbf{x}" /> to one of the possible K classes.
          <br />
          We follow these steps:
        </p>
        <ul>
          <li>Find the centroids of each class in our new space and get <InlineMath math="\mu_j^{FDA}" /> for <InlineMath math="j\in\{1,...,K\}" /></li>
          <li><InlineMath math="\mathbf{x}" /> is projected onto the new space defined by <InlineMath math="\mathbf{W}" /> (<InlineMath math="x_{FDA}" />)</li>
          <li>Then the point is assigned to the closest class with the Euclidean distance between <InlineMath math="x_{FDA}" /> and the centroid vectors of each class.</li>
          <li>It could also be by using probabilities knowing the law that is the most accurate for the repartition of the data. We can then use the Bayes rule and decide after that to classify with MAP.</li>
        </ul>
      </section>
    </div>
  );
};

export default ProbabilisticClassifier; 