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

## Deployment

This project is configured for continuous deployment on Netlify.

1.  The code is pushed to the main branch of the linked Git repository.
2.  Netlify automatically triggers a new build using the settings in `netlify.toml`.
3.  The site is deployed and live at the Netlify domain.

**Live Website**: [https://mlprojetsku.netlify.app/](https://mlprojetsku.netlify.app/)

**Youtube Video**: 

## API Endpoints

All API endpoints are implemented as Netlify Functions in `/netlify/functions`.

- Example: `/api/classes` is now available at `/.netlify/functions/classes`

## Chatbot Widget 

A Chatbot on the website linked to a workflow created directly on n8n.
You can see on the report how complicated this step was, and how even more complicated it was to do this freely. 
As it is free, the chatbot is only accessible when the owner of the workflow created (Alskuu) is online on the n8n deployed freely online.

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

I even tried to add some small SEO optimisation by creating the following file which helps the Google bots to analyse my website and consider where to rank it online
client/public/robots.txt
But it does not really work.

