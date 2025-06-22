import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

import impurity_measures from '../images/Trees/impurity_measures.png';
import random_forest from '../images/Trees/random_forest.png';
import adaboost_weigthing from '../images/Trees/adaboost_weigthing.png';

const Trees: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Decision Trees and Ensemble Learning :</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Decision Trees</h2>
                <p>
                    A decision tree partitions the feature space into axis-aligned regions by recursively applying tests on input attributes. Each internal node tests one feature, and each leaf assigns a predicted value or class.
                </p>
                <h3 className="text-xl font-bold mt-4 mb-2">Tree Induction Algorithm</h3>
                <p>Given training data <InlineMath math="\mathcal{D}=\{(x_i,y_i)\}_{i=1}^n" />:</p>
                <ol className="list-decimal list-inside ml-4">
                    <li>At node <InlineMath math="t" />, compute impurity <InlineMath math="I(t)" /> (Section on Impurity Measures).</li>
                    <li>For each feature <InlineMath math="j" /> and candidate threshold <InlineMath math="\theta" />, partition <InlineMath math="\mathcal{D}" /> into left <InlineMath math="L = \{x_i: x_{i,j}\le\theta\}" /> and right <InlineMath math="R = \{x_i: x_{i,j}>\theta\}" />.</li>
                    <li>Compute impurity reduction:
                        <BlockMath math="\Delta I=I(t)-\frac{|L|}{|\mathcal{D}|}I(L)-\frac{|R|}{|\mathcal{D}|}I(R)." />
                    </li>
                    <li>Choose <InlineMath math="(j^*,\theta^*)" /> maximizing <InlineMath math="\Delta I" />, split node, and recurse on children until stopping criteria.</li>
                </ol>

                <h3 className="text-xl font-bold mt-4 mb-2">Impurity Measures</h3>
                <p>For classification with class proportions <InlineMath math="p_j" /> at node <InlineMath math="t" />:</p>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Gini index:</strong> <InlineMath math="G(t)=1-\sum_j p_j^2" /></li>
                    <li><strong>Entropy:</strong> <InlineMath math="H(t)=-\sum_j p_j\log_2 p_j" /></li>
                    <li><strong>Misclassification error:</strong> <InlineMath math="E(t)=1-\max_j p_j" /></li>
                </ul>
                <p className="mt-2">Figure 1 compares <InlineMath math="G(t)" /> and <InlineMath math="H(t)" /> as functions of <InlineMath math="p_j" /> for two classes.</p>
                <figure className="mt-4">
                    <img src={impurity_measures} alt="Gini index and entropy curves" className="mx-auto w-3/5" />
                    <figcaption className="text-center mt-2">Figure 1: Gini index and entropy curves</figcaption>
                </figure>

                <h3 className="text-xl font-bold mt-4 mb-2">Handling Different Attribute Types</h3>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Continuous features:</strong> search thresholds via sorted unique values or percentiles.</li>
                    <li><strong>Categorical features:</strong> for <InlineMath math="m" /> categories, consider binary splits of the power set (approximate via heuristic for large <InlineMath math="m" />).</li>
                </ul>
                
                <h3 className="text-xl font-bold mt-4 mb-2">Stopping Criteria and Pruning</h3>
                <p>To avoid overfitting:</p>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Pre-pruning:</strong> stop when depth <InlineMath math=">d_{\max}" />, leaf samples <InlineMath math="<n_{\min}" />, or impurity reduction <InlineMath math="<\epsilon" />.</li>
                    <li><strong>Post-pruning:</strong> grow full tree then prune using cost-complexity criterion:
                        <BlockMath math="R_\alpha(T)=\sum_{t\in\text{leaves}} R(t) + \alpha|T|," />
                        where <InlineMath math="R(t)" /> is leaf error and <InlineMath math="|T|" /> number of leaves. Use cross-validation to choose <InlineMath math="\alpha" />.
                    </li>
                </ul>

                <h3 className="text-xl font-bold mt-4 mb-2">Complexity Analysis</h3>
                <p>Time complexity for building a tree is <InlineMath math="O(n\,d\,\log n)" /> if sorting per feature once and using efficient splits; prediction per instance is <InlineMath math="O(d)" /> depth. Memory usage grows with number of nodes <InlineMath math="O(n)" /> in worst case.</p>
            </section>
            
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Ensemble Methods</h2>
                <p>Ensemble learning constructs multiple base learners and aggregates them to improve generalization.</p>
                
                <h3 className="text-xl font-bold mt-4 mb-2">Bagging and Random Forests</h3>
                <p><strong>Bagging</strong> (Bootstrap AGGregatING) trains <InlineMath math="M" /> trees on bootstrap samples <InlineMath math="\mathcal{D}_m" /> of size <InlineMath math="n" /> drawn with replacement, then predicts by majority vote or averaging.</p>
                <p className="mt-2"><strong>Random Forests</strong> introduce additional randomness: at each split, a random subset of <InlineMath math="k" /> features is considered. Typical default <InlineMath math="k=\sqrt{d}" /> for classification.</p>
                <p className="mt-2">Key advantages:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Reduces variance without increasing bias significantly.</li>
                    <li>In-built estimation of out-of-bag (OOB) error: average error on samples not included in each tree's bootstrap.</li>
                    <li>Feature importance via mean decrease in impurity or permutation importance.</li>
                </ul>
                <figure className="mt-4">
                    <img src={random_forest} alt="Random forest sampling" className="mx-auto w-3/4" />
                    <figcaption className="text-center mt-2">Random forest sampling and feature selection</figcaption>
                </figure>
                
                <h3 className="text-xl font-bold mt-4 mb-2">Boosting</h3>
                <p>Boosting sequentially fits weak learners to reweighted data:</p>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>AdaBoost:</strong> weight update:
                        <BlockMath math="\alpha_t=\tfrac12\ln\frac{1-\epsilon_t}{\epsilon_t},\quad w_i\leftarrow w_i\exp(-\alpha_t y_i h_t(x_i))." />
                    </li>
                    <li><strong>Gradient boosting:</strong> fit each new learner to the negative gradient of the loss function (e.g., least-squares residuals for regression).</li>
                </ul>
                <figure className="mt-4">
                    <img src={adaboost_weigthing} alt="AdaBoost weighting" className="mx-auto w-3/5" />
                    <figcaption className="text-center mt-2">AdaBoost sequential training and weight updates</figcaption>
                </figure>

                <h3 className="text-xl font-bold mt-4 mb-2">Hyperparameters and Tuning</h3>
                <p>Common parameters:</p>
                <table className="table-auto w-full my-4 border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 border">Method</th>
                            <th className="px-4 py-2 border">Parameter</th>
                            <th className="px-4 py-2 border">Effect</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Decision tree</td>
                            <td className="border px-4 py-2">max depth, min leaf size</td>
                            <td className="border px-4 py-2">controls bias–variance</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Random forest</td>
                            <td className="border px-4 py-2">n_estimators, max_features</td>
                            <td className="border px-4 py-2">ensemble size, diversity</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">AdaBoost</td>
                            <td className="border px-4 py-2">learning rate, n_estimators</td>
                            <td className="border px-4 py-2">speed of convergence</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Gradient boosting</td>
                            <td className="border px-4 py-2">learning rate, tree depth</td>
                            <td className="border px-4 py-2">overfitting risk</td>
                        </tr>
                    </tbody>
                </table>
                <p>Use grid search or Bayesian optimization with cross-validation.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Practical Considerations</h2>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Feature scaling:</strong> trees invariant to monotonic transforms, but boosting may benefit from normalization.</li>
                    <li><strong>Missing values:</strong> handle via surrogate splits or imputation.</li>
                    <li><strong>Imbalanced data:</strong> adjust class weights or use specialized splitting criteria.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Conclusion</h2>
                <p>Decision trees provide interpretable models but risk overfitting. Ensembles like random forests and boosting leverage multiple trees to achieve high accuracy. Understanding algorithmic details and tuning hyperparameters is essential for robust performance.</p>
            </section>
        </div>
    );
};

export default Trees; 