# Machine Learning Classes Website

A modern web application for showcasing Machine Learning classes and educational content.

## Features

- Responsive design that works on all devices
- Interactive class listings
- Detailed class information pages
- Modern and clean user interface
- Easy navigation and search functionality
- **Chat widget** available on every page
- **Serverless API** using Netlify Functions

## Tech Stack

- Frontend: React.js with TypeScript (in `/client`)
- Styling: Tailwind CSS
- Backend/API: Netlify Serverless Functions (in `/netlify/functions`)

### Prerequisites

- Node.js (v18 recommended)
- npm (v6 or higher)
- [Netlify CLI](https://docs.netlify.com/cli/get-started/) (for local development)

## Project Structure

```
├── client/             # Frontend React application
├── netlify/functions/  # Netlify serverless functions (API endpoints)
├── public/             # Static files
├── netlify.toml        # Netlify configuration
└── README.md           # Project documentation
```

## Local Development

1. **Install dependencies for the frontend:**
   ```sh
   cd client
   npm install
   ```
2. **Install Netlify CLI globally (if not already):**
   ```sh
   npm install -g netlify-cli
   ```
3. **Start the local development server (from the project root):**
   ```sh
   netlify dev
   ```
   - This will serve the React app and the Netlify Functions together.
   - The frontend will be available at [http://localhost:8888](http://localhost:8888)
   - API endpoints are available at [http://localhost:8888/.netlify/functions/*](http://localhost:8888/.netlify/functions/*)

## Deployment

1. **Push your code to your Git repository (GitHub, GitLab, etc.).**
2. **Connect your repository to Netlify.**
3. **Netlify will automatically build and deploy your site using the settings in `netlify.toml`:**
   - Build command: `cd client && npm install && npm run build`
   - Publish directory: `client/build`
   - Functions directory: `netlify/functions`
4. **Your site and serverless API will be live at your Netlify domain.**

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

The website is available on this link : https://mlprojetsku.netlify.app/

client/public/robots.txt