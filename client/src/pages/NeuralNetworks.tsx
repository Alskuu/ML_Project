import React from 'react';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

import perceptrons_diagram from '../images/Neural Networks/perceptrons_diagram.png';
import mlp_structure from '../images/Neural Networks/mlp_structure.png';
import activation_function from '../images/Neural Networks/activation_function.png';
import back_propa from '../images/Neural Networks/back_propa.png';
import back_propa2 from '../images/Neural Networks/back_propa2.png';
import convolution_operation from '../images/Neural Networks/convolution_operation.png';

const NeuralNetworks: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold mb-4">Neural Networks and Deep Learning</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Biological Inspiration and History</h2>
                <p>
                    Artificial neural networks (ANNs) are loosely inspired by biological neurons. Early work by McCulloch and Pitts (1943) formalized binary threshold units; Rosenblatt's perceptron (1962) introduced learning weights.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">The Perceptron Model</h2>
                <h3 className="text-xl font-bold mt-4 mb-2">Definition</h3>
                <p>A perceptron computes:</p>
                <BlockMath math="z = \mathbf w^T\mathbf x + b,\quad\hat y = \phi(z)" />
                <p>where <InlineMath math="\phi" /> is a step activation: <InlineMath math="\phi(z)=1" /> if <InlineMath math="z>0" />, else 0.</p>

                <h3 className="text-xl font-bold mt-4 mb-2">Learning Algorithm</h3>
                <p>Rosenblatt's rule updates weights on errors:</p>
                <BlockMath math="w_j \leftarrow w_j + \eta(y-\hat y)x_j,\quad b\leftarrow b + \eta(y-\hat y)" />
                <p>with learning rate <InlineMath math="\eta>0" />.</p>
                <figure className="mt-4">
                    <img src={perceptrons_diagram} alt="Perceptron architecture" className="mx-auto w-1/2" />
                    <figcaption className="text-center mt-2">Perceptron architecture and decision boundary</figcaption>
                </figure>
                
                <h3 className="text-xl font-bold mt-4 mb-2">Limitations</h3>
                <p>Perceptrons can only solve linearly separable tasks; they fail on XOR (Minsky and Papert, 1969).</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Multi-Layer Perceptrons (MLPs)</h2>
                <h3 className="text-xl font-bold mt-4 mb-2">Architecture</h3>
                <p>An MLP with one hidden layer of <InlineMath math="H" /> units:</p>
                <BlockMath math="\mathbf h = \sigma(W^{(1)}\mathbf x + b^{(1)}),\quad \hat y = f(W^{(2)}\mathbf h + b^{(2)})" />
                <p>Activation <InlineMath math="\sigma" /> can be sigmoid, tanh, or ReLU.</p>
                <figure className="mt-4">
                    <img src={mlp_structure} alt="MLP structure" className="mx-auto w-3/4" />
                    <figcaption className="text-center mt-2">A 1-layer neural network and a feed-forward MLP</figcaption>
                </figure>

                <h3 className="text-xl font-bold mt-4 mb-2">Activation Functions</h3>
                <p>Common choices:</p>
                <ul className="list-disc list-inside ml-4">
                    <li>Sigmoid: <InlineMath math="\sigma(z)=1/(1+e^{-z})" /></li>
                    <li>Tanh: <InlineMath math="\tanh(z)=(e^z-e^{-z})/(e^z+e^{-z})" /></li>
                    <li>ReLU: <InlineMath math="\max(0,z)" /></li>
                </ul>
                <figure className="mt-4">
                    <img src={activation_function} alt="Activation function curve" className="mx-auto w-3/4" />
                    <figcaption className="text-center mt-2">Activation function curve using the sigmoid function</figcaption>
                </figure>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Training via Backpropagation</h2>
                <h3 className="text-xl font-bold mt-4 mb-2">Loss Functions</h3>
                <p>For regression: mean squared error</p>
                <BlockMath math="L(\theta)=\tfrac1N\sum_i(\hat y_i - y_i)^2." />
                <p>For classification: cross-entropy</p>
                <BlockMath math="L(\theta)=-\tfrac1N\sum_i\sum_k y_{i,k}\log\hat p_{i,k}." />

                <h3 className="text-xl font-bold mt-4 mb-2">Gradient Computation</h3>
                <p>Backpropagation applies the chain rule to compute <InlineMath math="\nabla_\theta L" />. Each layer stores activations and local gradients.</p>
                <figure className="mt-4">
                    <img src={back_propa} alt="Backpropagation locally" className="mx-auto w-3/4" />
                    <figcaption className="text-center mt-2">Image of what Backpropagation corresponds to locally</figcaption>
                </figure>
                <figure className="mt-4">
                    <img src={back_propa2} alt="Backward propagation of errors" className="mx-auto w-3/4" />
                    <figcaption className="text-center mt-2">Backward propagation of errors</figcaption>
                </figure>
                
                <h3 className="text-xl font-bold mt-4 mb-2">Stochastic Gradient Descent (SGD)</h3>
                <p>Parameters updated per mini-batch:</p>
                <BlockMath math="\theta \leftarrow \theta - \eta\nabla_\theta L_{\mathcal B}." />
                <p>Variants: momentum, RMSprop, Adam.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Practical Tips and Regularization</h2>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Initialization:</strong> small random weights (e.g., He or Xavier init).</li>
                    <li><strong>Learning rate scheduling:</strong> step decay, cosine annealing.</li>
                    <li><strong>Overfitting:</strong> use dropout, weight decay (<InlineMath math="L_2" /> regularization), early stopping.</li>
                    <li><strong>Batch normalization:</strong> normalize layer inputs to speed convergence.</li>
                </ul>
            </section>
            
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Convolutional Neural Networks (CNNs)</h2>
                <h3 className="text-xl font-bold mt-4 mb-2">Motivation</h3>
                <p>Images have spatial structure; full connections are wasteful. CNNs share weights via convolutional filters.</p>
                
                <h3 className="text-xl font-bold mt-4 mb-2">Convolution Operation</h3>
                <p>Feature map <InlineMath math="[F* x]_{i,j}=\sum_{u,v}F_{u,v}\,x_{i-u,j-v}" />.</p>
                <figure className="mt-4">
                    <img src={convolution_operation} alt="2D convolution" className="mx-auto w-3/5" />
                    <figcaption className="text-center mt-2">2D convolution of an image with a filter</figcaption>
                </figure>

                <h3 className="text-xl font-bold mt-4 mb-2">Pooling and Architectures</h3>
                <p>Pooling (max or average) reduces spatial size. Common architectures: LeNet, AlexNet, VGG, ResNet.</p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Advanced Topics Overview</h2>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Recurrent Neural Networks (RNNs):</strong> sequence modelling. LSTM and GRU cells.</li>
                    <li><strong>Autoencoders:</strong> unsupervised representation learning.</li>
                    <li><strong>Generative Models:</strong> GANs and VAEs.</li>
                    <li><strong>Transformers:</strong> attention-based models for sequences.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-2">Summary</h2>
                <p>Neural networks are powerful function approximators trained via gradient methods. Careful architecture design, hyperparameter tuning, and regularization are essential for good performance.</p>
            </section>
        </div>
    );
};

export default NeuralNetworks; 