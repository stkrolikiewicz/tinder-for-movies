# Tinder For Movies App

A Tinder-style single-page application for for selecting a movie. Swipe right or left on movies you want to skip and click green button if you accept reccomendation.

## Features

- Browse movie recommendations with title, image, summary, and rating
- Accept movies with a green button or reject with a red button/swipe
- Mobile-responsive design optimized for both desktop and mobile browsers
- Real-time synchronization with backend
- Modern, intuitive user interface

## Tech Stack

- **Frontend Framework:** React with TypeScript
- **Build Tool:** Vite
- **Testing:** Jest + React Testing Library
- **State Management:** React Context API
- **CI/CD:** GitHub Actions
- **Deployment:** GitHub Pages

## Installation

1. Clone the repository:
```bash
git clone https://github.com/stkrolikiewicz/tinder-for-movies.git

cd tinder-for-movies
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=your_api_base_url
```

## Development

Start the development server:
```bash
npm run dev
```

Run tests:
```bash
npm run test
```

Run linter:
```bash
npm run lint
```

## Build & Deployment

Build the application:
```bash
npm run build
```

Preview the build:
```bash
npm run preview
```

## Testing

This project uses Jest and React Testing Library for testing. Run the test suite with:

```bash
npm run test
```

For test coverage:
```bash
npm run test:coverage
```

## API Endpoints

The application interacts with the following endpoints:

- `GET /recommendations` - Fetch movie recommendations
- `PUT /recommendations/:id/accept` - Accept a movie
- `PUT /recommendations/:id/reject` - Reject a movie

## CI/CD

The project uses GitHub Actions for:
- Running tests and linter on pull requests
- Building and deploying to GitHub Pages on merges to master

## Project Structure

```
src/
├── components/        # Reusable UI components
├── context/          # React Context providers
├── hooks/            # Custom React hooks
├── services/         # API and other services
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── App.tsx          # Root component
```