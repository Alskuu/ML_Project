import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

// Import images
import simpsonImage from '../images/Clustering/simpson.png';
import hiervparImage from '../images/Clustering/hiervpar.png';
import elbowruleImage from '../images/Clustering/elbowrule.png';
import convexpbImage from '../images/Clustering/convexpb.png';
import nonconvshapeImage from '../images/Clustering/nonconvshape.png';
import discoverdatastructImage from '../images/Clustering/discoverdatastruct.png';
import graphrepresentationImage from '../images/Clustering/graphrepresentation.png';
import spectexampleImage from '../images/Clustering/spectexample.png';
import laplaciangraphImage from '../images/Clustering/laplaciangraph.png';
import laplacianConnexionsImage from '../images/Clustering/laplacian_connexions.png';
import impactkImage from '../images/Clustering/impactk.png';
import eigengapImage from '../images/Clustering/eigengap.png';
import similaritymeasuresImage from '../images/Clustering/similaritymeasures.png';

const Clustering: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Clustering</h1>

      <section className="mb-8">
        <p className="mb-4">
          The goal of clustering is to group similar objects into clusters (classes that are unknown beforehand).
        </p>
        <p className="mb-4">
          It is great to understand the global data structure, visualize the data and infer some properties of a data point on how it relates to other data points.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Clustering Evaluation</h2>
        <div className="flex justify-center mb-6">
          <img src={simpsonImage} alt="Simpson's Paradox" className="w-3/4" />
        </div>
        <p className="mb-4">
          Clustering is unsupervised, so how do we evaluate the quality of a clustering algorithm?
        </p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            Based on the shape of the clusters:
            <ul className="list-disc pl-6 mt-2">
              <li>Points within the same cluster should be nearby/similar and points far from each other should belong to different clusters.</li>
            </ul>
          </li>
          <li>
            Based on the stability of the clusters:
            <ul className="list-disc pl-6 mt-2">
              <li>We should get the same results if we remove some data points, add noise, etc.</li>
            </ul>
          </li>
          <li>
            Based on domain knowledge (ground truth):
            <ul className="list-disc pl-6 mt-2">
              <li>The clusters should "make sense", discover meaningful/useful patterns.</li>
            </ul>
          </li>
        </ol>
        <p className="font-bold mt-4">
          BUT ALL OF THIS DEPENDS ON THE SIMILARITY MEASURE.
          We will see this right now.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Terminology and Approaches</h2>
        <p className="mb-4">
          Let's first define the centroid (the mean of the points in the cluster) and the medoid (the point in the cluster that is closest to the centroid).
        </p>
        <p className="mb-4">The main Partitional Approaches are the following ones:</p>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Partitional</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Construct various partitions and then evaluate them using some criterion, e.g., minimizing the sum of squared errors</li>
              <li>Typical methods: k-means, k-medoids</li>
            </ul>
          </li>
          <li>
            <strong>Hierarchical</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Create a hierarchical decomposition of the data set using some criterion</li>
              <li>Typical methods: Diana, Agnes, BIRCH, CHAMELEON, HDBSCAN</li>
            </ul>
          </li>
          <li>
            <strong>Density-based</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Find dense and sparse regions based on a density measure</li>
              <li>Typical methods: DBSCAN, OPTICS, DenClue, HDBSCAN</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Hierarchical vs. Partitional</h3>
        <div className="flex justify-center mb-6">
          <img src={hiervparImage} alt="Hierarchical vs Partitional" className="w-1/2" />
        </div>
        <p className="mb-4">
          In this lecture we will focus on the partitional clustering with 2 methods: K-means and Spectral clustering.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">K-means</h2>
        <h3 className="text-xl font-semibold mb-4">Algorithm:</h3>
        <ol className="list-decimal pl-6 space-y-4">
          <li>Choose the number of clusters K</li>
          <li>Start with some initial cluster centers</li>
          <li>
            Iterate between:
            <ul className="list-disc pl-6 mt-2">
              <li>Computing the distance of all point to all centers</li>
              <li>Assigning each point to the cluster with the closest center</li>
              <li>Recomputing the centers: means of the points in each cluster</li>
            </ul>
          </li>
        </ol>
        <p className="mb-4">
          Once there are no changes anymore in the center localisation, the algorithm is finished. And this algorithm always works, it converges.
        </p>

        <h3 className="text-xl font-semibold mb-4">Objective Function</h3>
        <p className="mb-4">Within-cluster sum of squares:</p>
        <div className="mb-4">
          <BlockMath math="\mathrm{Var}_{\text{in}}(C) = \frac{1}{|C|} \sum_{x \in C} \|x - \mu_C\|^2 \quad \text{(For a cluster \( C \))}" />
        </div>
        <div className="mb-4">
          <BlockMath math="V = \sum_{k=1}^{K} \sum_{x \in C_k} \frac{1}{|C_k|} \|x - \mu_{C_k}\|^2 \quad \text{(For all clusters)}" />
        </div>
        <p className="mb-4">
          This partition of the space make that the points in a cluster are those that are closer to its centroid than to any other centroid.
        </p>
        <p className="mb-4">
          Finding the optimal solution is a hard problem, the solution is always approximated (with an <InlineMath math="\epsilon" /> defining from how much).
        </p>

        <h3 className="text-xl font-semibold mb-4">Lloyd's Algorithm</h3>
        <p className="mb-4">It is a greedy strategy:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Partition the data into K clusters at random</li>
          <li>Compute the centroid of each cluster</li>
          <li>Assign each point to the cluster of the nearest centroid</li>
          <li>Repeat until cluster membership converges</li>
        </ul>

        <p className="mb-4">We select K with the elbow rule, defined visually:</p>
        <div className="flex justify-center mb-6">
          <img src={elbowruleImage} alt="Elbow Rule" className="w-3/4" />
        </div>
        <p className="mb-4">
          This a heuristic approach, other ones exists such as Bayesian information criteria...
        </p>

        <h3 className="text-xl font-semibold mb-4">Summary</h3>
        <p className="font-bold mb-2">Advantages:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Computational time is linear <InlineMath math="O(npkt)" />, t number of iterations and p the dimensions</li>
          <li>Easily implementable</li>
        </ul>
        <p className="font-bold mb-2">Drawbacks:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Need to select K (user-defined parameter)</li>
          <li>Sensitivity to noise and outliers</li>
          <li>Different initializations = different solutions</li>
          <li>Clusters have "spherical" (convex) shapes only</li>
        </ul>

        <div className="flex justify-center mb-6">
          <img src={convexpbImage} alt="Convex Problem Example" className="w-3/4" />
          <p className="text-sm text-gray-600 mt-2">Example showing why the convex case can be problematic</p>
        </div>

        <h3 className="text-xl font-semibold mb-4">K-means++</h3>
        <p className="mb-4">
          K-means++ is a way to improve the K-means algorithm.
        </p>
        <p className="mb-4">
          The quality of the solution depends on <em>initialization</em>:
          randomly choosing centroids far enough from each other may lead
          the algorithm to a good local minimum.
        </p>
        <p className="mb-4">
          <strong>k-means++</strong> by <em>Arthurs and Vassilvitskii</em> in 2007
        </p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>Select a random point and declare it a first centroid <InlineMath math="c_1" />.</li>
          <li>For all remaining data points <InlineMath math="x_j" />, compute the distances <InlineMath math="d(x_j, c_1)" />.</li>
          <li>Select a random point with probability proportional to <InlineMath math="d(x_j, c_1)^2" />.
            <br />
            This will give a point <InlineMath math="c_2" /> far enough from <InlineMath math="c_1" />.</li>
          <li>Repeat steps 2 and 3 for all <InlineMath math="k" /> centroids (using the distance to the nearest centroid for each point).</li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Spectral Clustering</h2>
        <p className="mb-4">
          What is great is that it works for non-convex shapes.
        </p>
        <div className="flex justify-center mb-6">
          <img src={nonconvshapeImage} alt="Non-convex Shapes" className="w-3/4" />
        </div>

        <h3 className="text-xl font-semibold mb-4">Key Idea</h3>
        <p className="mb-4">We start with unlabeled data.</p>
        <div className="flex justify-center mb-6">
          <img src={discoverdatastructImage} alt="Discover Data Structure" className="w-3/4" />
          <p className="text-sm text-gray-600 mt-2">We have to discover the data structure</p>
        </div>

        <div className="flex justify-center mb-6">
          <img src={graphrepresentationImage} alt="Graph Representation" className="w-3/4" />
          <p className="text-sm text-gray-600 mt-2">By Using a Graph Representation, it encodes how points are connected to each other.</p>
        </div>

        <p className="mb-4">
          We define our graph as G = (V,E), with E the edges and V the nodes/vertexes.
        </p>
        <p className="mb-4">
          It helps to map the data into a space where the structure is revealed.
        </p>

        <p className="mb-4">Our clustering algorithm then uses three new steps:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Build a similarity graph</li>
          <li>Map into a low dimensional space</li>
          <li>Cluster the transformed data</li>
        </ol>

        <h3 className="text-xl font-semibold mb-4">Step 1: Build a similarity graph</h3>
        <p className="mb-4">
          We build a graph to leverage graph clustering algorithms/tools for data with no inherent graph structure (e.g., points in a <InlineMath math="d" />-dimensional Euclidean space)
        </p>

        <p className="font-bold mb-2">How?</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Construct a similarity graph based on the topological relationships and distances between data points (e.g., kNN graph)</li>
          <li>
            The original clustering is transformed into a graph clustering problem:
            <ul className="list-disc pl-6 mt-2">
              <li>Leverage graph representation and analysis tools (next slides)</li>
            </ul>
          </li>
        </ul>

        <div className="flex justify-center mb-6">
          <img src={spectexampleImage} alt="Spectral Example" className="w-3/4" />
        </div>

        <p className="mb-4">
          A graph can be represented by the adjacency matrix <InlineMath math="A" />
          But how do we represent the graph adjacency Matrix?:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Matrix of size <InlineMath math="n \times n" />, where <InlineMath math="n = |V|" /> is the number of nodes (data points)</li>
          <li><InlineMath math="A_{ij} > 0" />, if <InlineMath math="i" /> and <InlineMath math="j" /> are connected</li>
          <li><InlineMath math="A_{ij} = 0" />, if <InlineMath math="i" /> and <InlineMath math="j" /> are not connected</li>
          <li>In case of <em>unweighted</em> graphs, <InlineMath math="A_{ij} = 1" />, if <InlineMath math="(i, j)" /> is an edge of the graph</li>
          <li>Space proportional to <InlineMath math="n^2" /></li>
        </ul>

        <p className="mb-4">
          Let <InlineMath math="G = (V, E)" /> be a graph. Then, the <strong>Laplacian matrix</strong> is defined as:
        </p>

        <div className="mb-4">
          <BlockMath math="L_{ij} = \begin{cases} k_i & \text{if } i = j \\ -1 & \text{if } (i, j) \in E \\ 0 & \text{otherwise} \end{cases}" />
        </div>

        <p className="mb-4">
          Diagonal degree matrix <InlineMath math="D" />, where <InlineMath math="D_{ii} = k_i" /> (node degree = number of connections)
        </p>

        <div className="flex justify-center mb-6">
          <img src={laplaciangraphImage} alt="Laplacian Graph" className="w-3/4" />
        </div>

        <div className="mb-4">
          <BlockMath math="\mathbf{L} = \mathbf{D} - \mathbf{A} = \begin{bmatrix} 3 & -1 & -1 & -1 \\ -1 & 2 & -1 & 0 \\ -1 & -1 & 2 & 0 \\ -1 & 0 & 0 & 1 \end{bmatrix}" />
        </div>

        <p className="mb-4">
          Why do we use the Laplacian matrix? <InlineMath math="\Rightarrow" /> <em>for its global and local structure encoding</em>
        </p>

        <h3 className="text-xl font-semibold mb-4">Step 2: Map into a low dimensional space</h3>
        <h4 className="text-lg font-semibold mb-4">Laplacian Spectrum and Connectivity</h4>

        <p className="mb-4">
          The eigenvalues/eigenvectors (spectrum) of the Laplacian express graph connectivity and structure.
        </p>

        <p className="font-bold mb-2">Spectrum</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>All eigenvalues of <InlineMath math="\mathbf{L}" /> are real and non-negative.</li>
          <li>The spectrum reveals the global + local structure of the graph.</li>
        </ul>

        <p className="font-bold mb-2">Spectrum and Connectivity</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The smallest eigenvalue <InlineMath math="\lambda_1" /> of <InlineMath math="\mathbf{L}" /> is zero (columns and rows sum to 0).</li>
          <li>If the second smallest eigenvalue <InlineMath math="\lambda_2 \ne 0" />, then <InlineMath math="\mathbf{G}" /> is connected.</li>
          <li>If <InlineMath math="\mathbf{L}" /> has <InlineMath math="n" /> zero eigenvalues, <InlineMath math="\mathbf{G}" /> has <InlineMath math="n" /> connected components.</li>
        </ul>

        <div className="flex justify-center mb-6">
          <img src={laplacianConnexionsImage} alt="Laplacian Connections" className="w-3/4" />
        </div>

        <p className="mb-4">
          Small eigenvalues implies fewer cuts needed to disconnect the graph and also smooth variations in similarities along the direction of the corresponding eigenvector (global structure).
        </p>

        <h3 className="text-xl font-semibold mb-4">Cluster the transformed data</h3>
        <h4 className="text-lg font-semibold mb-4">Option 1: Spectral Bisection</h4>
        <ol className="list-decimal pl-6 space-y-4">
          <li><strong>Pre-processing:</strong> Build Laplacian matrix <strong>L</strong> of the graph</li>
          <li><strong>Decomposition:</strong> Find eigenvalues <InlineMath math="\lambda" /> and eigenvectors <InlineMath math="v" /> of matrix <strong>L</strong>.</li>
          <li>Map vertices to corresponding components in <InlineMath math="v_2" /></li>
          <li>Assign vertices (data points) to one of two clusters based on the sign of the corresponding component in <InlineMath math="v_2" />.</li>
        </ol>

        <p className="mb-4">This method is great is K equals to 2.</p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>Compute the Laplacian matrix L with entries <InlineMath math="L_{ij}=D_{ij}-A_{ij}" /></li>
          <li>Find the second smallest eigenvector <InlineMath math="v_2" /> of L.</li>
          <li>Cluster membership of node i is <InlineMath math="s_i=sign([v_2]_i)" /></li>
        </ol>

        <p className="mb-4">And how do we do when K is bigger than 2?</p>
        <p className="font-bold mb-2">Two Standard Approaches</p>
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Recursive bi-partitioning</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Recursively apply a bi-partitioning algorithm in a hierarchical divisive manner</li>
              <li>Disadvantages: inefficient, unstable</li>
            </ul>
          </li>
          <li>
            <strong>Cluster multiple eigenvectors</strong>
            <ul className="list-disc pl-6 mt-2">
              <li>Build a reduced space from multiple eigenvectors</li>
              <li>Commonly used, preferable approach</li>
            </ul>
          </li>
        </ol>

        <h4 className="text-lg font-semibold mb-4">k-Way Spectral Clustering</h4>

        <p className="mb-4"><strong>Input:</strong> Graph <InlineMath math="G = (V, E)" /> and number of clusters <InlineMath math="k" /></p>
        <p className="mb-4"><strong>Output:</strong> Clusters <InlineMath math="C_1, C_2, \ldots, C_k" /> (i.e., cluster assignments for each node)</p>

        <ol className="list-decimal pl-6 space-y-4">
          <li>Let <InlineMath math="\mathbf{A}" /> be the adjacency matrix of the graph.</li>
          <li>Compute the (normalized) Laplacian matrix <InlineMath math="\mathbf{L} = \mathbf{D} - \mathbf{A}" />.</li>
          <li>
            Compute the first <InlineMath math="k" /> smallest eigenvectors of <InlineMath math="\mathbf{L}_n" />:
            <div className="my-4">
              <BlockMath math="\mathbf{V} = [\mathbf{v}_1 \,|\, \mathbf{v}_2 \,|\, \ldots \,|\, \mathbf{v}_k] \in \mathbb{R}^{n \times k}" />
            </div>
            For <InlineMath math="i = 1, \ldots, n" />, let <InlineMath math="y_i \in \mathbb{R}^k" /> be the vector corresponding to the <InlineMath math="i" />-th row of <InlineMath math="\mathbf{V}" />.
            <br />
            (The <InlineMath math="k" /> first entries of <InlineMath math="\mathbf{V}" /> correspond to <InlineMath math="i" />)
          </li>
          <li>Apply k-means to the points <InlineMath math="(y_i)_{i=1}^{n}" /> (i.e., rows of <InlineMath math="\mathbf{V}" />) to find the clusters <InlineMath math="C_1, C_2, \ldots, C_k" />.</li>
        </ol>

        <p className="mb-4">
          The eigenvectors of the Laplacian matrix provide an embedding of the data based on similarity. (compare for each point the coordinate from the line so each vector with the biggest similarity).
        </p>
        <p className="mb-4">We then have our clustering.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">In Practice</h2>
        <p className="mb-4">The performance depends a lot on the choice of:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The number of clusters k</li>
          <li>The similarity measure (k-NN, Gaussian, other kernels with associated parameters)</li>
          <li>The approach (k-way vs recursive bi-parititioning with associated parameters)</li>
          <li>The clustering algorithms (e.g., k-means)</li>
        </ul>

        <div className="flex justify-center mb-6">
          <img src={impactkImage} alt="Impact of k" className="w-3/4" />
        </div>

        <p className="mb-4">And how do we select k?</p>
        <p className="mb-4">
          We use the eigengap so the difference between two consecutive eigenvalues.
          The most stable clustering is generally the one with the value of k maximizing the eigengap.
        </p>

        <div className="flex justify-center mb-6">
          <img src={eigengapImage} alt="Eigengap Example" className="w-3/4" />
        </div>

        <div className="flex justify-center mb-6">
          <img src={similaritymeasuresImage} alt="Similarity Measures" className="w-3/4" />
          <p className="text-sm text-gray-600 mt-2">Example showing the importance of chosing the adapted similarity measures</p>
        </div>
      </section>
    </div>
  );
};

export default Clustering; 