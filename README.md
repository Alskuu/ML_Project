# Machine Learning Classes Website

A modern, interactive web application designed to provide clear and concise educational content on key Machine Learning concepts.

## Features

- **Interactive Learning Modules**: Detailed pages for various ML topics.
- **Featured Classes**: A homepage that highlights key areas of study.
- **Responsive Design**: A clean and modern UI that works on all devices.
- **Chat Widget**: An AI-powered assistant available on every page to help with questions.
- **Serverless Backend**: Powered by Netlify Functions for a scalable and efficient API.

## Available Topics

The platform currently covers the following machine learning topics:

- **Core Concepts**:
  - Introduction to Supervised Learning
  - Introduction to Unsupervised Learning
- **Supervised Learning**:
  - Linear Regression & Classification
  - Probabilistic Classifiers
  - Support Vector Machines (SVMs)
  - Decision Trees & Ensemble Methods
  - Neural Networks & Deep Learning
- **Unsupervised Learning**:
  - Dimensionality Reduction (PCA, t-SNE)
  - Clustering (K-Means, Hierarchical)
- **Other Topics**:
  - Nonparametric Methods

## Tech Stack

- **Frontend**: React.js with TypeScript (`/client`)
- **Styling**: Tailwind CSS
- **Backend/API**: Netlify Serverless Functions (`/netlify/functions`)
- **Interactive Math**: KaTeX for rendering mathematical formulas.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (or a compatible package manager)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) (for local development)

## Project Structure

```
.
├── client/             # Frontend React application
│   ├── src/
│   │   ├── components/ # Reusable React components
│   │   ├── pages/      # Page components for each route
│   │   └── App.tsx     # Main app component with routing
│   └── ...
├── netlify/
│   └── functions/      # Serverless API endpoints
├── netlify.toml        # Netlify configuration
└── README.md           # This file
```

## Local Development

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install frontend dependencies:**
    ```sh
    cd client
    npm install
    ```

3.  **Install Netlify CLI (if you haven't already):**
    ```sh
    npm install -g netlify-cli
    ```

4.  **Run the development server from the project root:**
    ```sh
    netlify dev
    ```

    This command starts the React development server and the Netlify Functions API simultaneously. The application will be accessible at `http://localhost:8888`.

## Deployment

This project is configured for continuous deployment on Netlify.

1.  Push your code to the main branch of your linked Git repository.
2.  Netlify automatically triggers a new build using the settings in `netlify.toml`.
3.  The site is deployed and live at your Netlify domain.

**Live Website**: [https://mlprojetsku.netlify.app/](https://mlprojetsku.netlify.app/)

## API Endpoints

All API endpoints are implemented as Netlify Functions in `/netlify/functions`.

- Example: `/api/classes` is now available at `/.netlify/functions/classes`

## License

The website includes:
- A modern, responsive design using Tailwind CSS
- Pages for:
  - Home: Showcasing featured classes
  - Classes: Listing all available classes
  - Class Detail: Detailed information about each class
  - About: Information about the platform
- A backend using Netlify Functions for API endpoints
- Easy deployment on Netlify

The website is built with:
- React + TypeScript for the frontend
- Netlify Functions for the backend
- Tailwind CSS for styling
- Modern development tools and best practices

client/public/robots.txt