import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

import distance_examples from '../images/Nonparametric/distance_examples.png';
import kdtree_split from '../images/Nonparametric/kd-tree_split.png';
import voronoi_knn from '../images/Nonparametric/voronoi_knn.png';

const Nonparametric: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Non-Parametric Learning and Nearest Neighbour Methods :</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Introduction</h2>
                <p>
                    Non-parametric learning denotes a family of methods whose model complexity grows with the amount of data. Unlike parametric models (e.g., linear regression), non-parametric algorithms adapt locally to data without assuming a fixed number of parameters.
                </p>
                <p className="mt-2">Key examples include:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Nearest Neighbour classifiers and regressors</li>
                    <li>Tree-based methods (e.g., decision trees, random forests)</li>
                    <li>Some kernel-based and support vector methods</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Similarity Measures</h2>
                <h3 className="text-xl font-bold mb-2">Distance Metrics</h3>
                <p>
                    A function <InlineMath math="d:\mathcal{X}\times\mathcal{X}\rightarrow\mathbb{R}_{\ge0}" /> is a metric if it satisfies:
                </p>
                <ol className="list-decimal list-inside ml-4">
                    <li><em>Non-negativity:</em> <InlineMath math="d(x,y)\ge0" />.</li>
                    <li><em>Identity:</em> <InlineMath math="d(x,y)=0" /> iff <InlineMath math="x=y" />.</li>
                    <li><em>Symmetry:</em> <InlineMath math="d(x,y)=d(y,x)" />.</li>
                    <li><em>Triangle inequality:</em> <InlineMath math="d(x,z)\le d(x,y)+d(y,z)" />.</li>
                </ol>

                <p className="mt-4">Common choices:</p>
                <table className="table-auto w-full my-4 border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Definition</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Euclidean (<InlineMath math="L_2" />)</td>
                            <td className="border px-4 py-2"><InlineMath math="d_2(x,y)=\|x-y\|_2" /></td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Manhattan (<InlineMath math="L_1" />)</td>
                            <td className="border px-4 py-2"><InlineMath math="d_1(x,y)=\|x-y\|_1" /></td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Lp-norm</td>
                            <td className="border px-4 py-2"><InlineMath math="d_p(x,y)=\|x-y\|_p=(\sum_i|x_i-y_i|^p)^{1/p}" /></td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Hamming</td>
                            <td className="border px-4 py-2"># differing coordinates for binary vectors</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Jaccard</td>
                            <td className="border px-4 py-2"><InlineMath math="1-\frac{|X\cap Y|}{|X\cup Y|}" /></td>
                        </tr>
                    </tbody>
                </table>
                <figure>
                    <img src={distance_examples} alt="Euclidean vs Manhattan distances" className="mx-auto w-3/4" />
                    <figcaption className="text-center mt-2">Illustration of Euclidean and Manhattan distances on the first figure. And the different Lp norms on the second one.</figcaption>
                </figure>
                <h3 className="text-xl font-bold mt-4 mb-2">From Distance to Similarity</h3>
                <p>
                    Similarity can be derived from distance, e.g. <InlineMath math="s(x,y)=\exp(-d(x,y)^2/\sigma^2)" />, or via cosine similarity for centered data:
                </p>
                <BlockMath math="\text{cosine}(x,y)=\frac{\langle x,y\rangle}{\|x\|_2\,\|y\|_2}." />
            </section>
            
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">The k-Nearest Neighbour Algorithm</h2>
                <p>Given a training set <InlineMath math="\{(x_i,y_i)\}_{i=1}^m" />:</p>
                <ol className="list-decimal list-inside ml-4">
                    <li>For a query <InlineMath math="x" />, compute distances <InlineMath math="d(x,x_i)" />.</li>
                    <li>Identify the <InlineMath math="k" /> points with smallest distances.</li>
                    <li><em>Classification:</em> assign the majority label among these neighbours.</li>
                    <li><em>Regression:</em> predict the average target value.</li>
                </ol>

                <h3 className="text-xl font-bold mt-4 mb-2">Effect of <em>k</em></h3>
                <p>
                    A small <InlineMath math="k" /> leads to high variance (noisy boundaries), while large <InlineMath math="k" /> increases bias (over-smoothing). A common rule of thumb is <InlineMath math="k=\sqrt{m}" />, but cross-validation is advised to choose optimal <InlineMath math="k" />.
                </p>

                <h3 className="text-xl font-bold mt-4 mb-2">Advantages and Drawbacks</h3>
                <dl>
                    <dt className="font-bold">Advantages:</dt>
                    <dd className="ml-4">fast training (store only data), simple to implement, non-parametric flexibility.</dd>
                    <dt className="font-bold mt-2">Drawbacks:</dt>
                    <dd className="ml-4">prediction cost <InlineMath math="O(mn)" /> per query, memory intensive, sensitive to irrelevant features (curse of dimensionality).</dd>
                </dl>
            </section>
            
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Efficient Search: k-D Trees</h2>
                <p>To speed up neighbour queries, one can organize data into a balanced k-dimensional binary tree.</p>
                <h3 className="text-xl font-bold mt-4 mb-2">Construction</h3>
                <p>Recursively split data along alternating axes at median hyperplanes.</p>
                <h3 className="text-xl font-bold mt-4 mb-2">Querying</h3>
                <p>Traverse the tree to locate the region containing <InlineMath math="x" />, then backtrack to explore other branches if necessary (prune using hyperplane distance).</p>
                <figure className="mt-4">
                    <img src={kdtree_split} alt="k-D tree construction" className="mx-auto w-3/4" />
                    <figcaption className="text-center mt-2">Example of k-D tree construction and query regions</figcaption>
                </figure>
            </section>
            
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Decision Boundaries and Voronoi Tessellation</h2>
                <p>
                    The boundary induced by 1-NN corresponds to the Voronoi diagram of training points. For <InlineMath math="k>1" />, boundaries become more complex.
                </p>
                <figure className="mt-4">
                    <img src={voronoi_knn} alt="Voronoi tessellation" className="mx-auto w-4/5" />
                    <figcaption className="text-center mt-2">Voronoi tessellation for 1-NN and decision regions for k-NN</figcaption>
                </figure>
            </section>
            
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Variants and Extensions</h2>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Weighted k-NN:</strong> weight votes by <InlineMath math="1/d(x,x_i)" /> or kernel functions.</li>
                    <li><strong>Metric learning:</strong> learn an appropriate distance metric from data.</li>
                    <li><strong>Approximate NN:</strong> hashing or locality-sensitive hashing to trade accuracy for speed.</li>
                    <li><strong>Dimensionality reduction:</strong> PCA or manifold learning to mitigate high-dimensional effects.</li>
                </ul>
            </section>
            
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Conclusion</h2>
                <p>
                    Nearest Neighbour methods are a cornerstone of non-parametric learning, offering intuitive local predictions at the expense of computational cost. Proper choice of similarity measure, <InlineMath math="k" />, and data structures can make k-NN practical for many applications.
                </p>
            </section>
        </div>
    );
};

export default Nonparametric; 