# StarWars Search Application

This is a StarWars search application built with React, TypeScript, and Material-UI. The application allows users to search for StarWars entities (people, films, planets, etc.) using the StarWars API (https://swapi.dev). The search results are displayed with autocomplete suggestions, and users can view all results for a category and perform CRUD operations on the "people" category.

## Features

- Search for StarWars entities (people, films, planets, etc.)
- Autocomplete suggestions as you type
- View top 3 search results per category
- View all results for a category
- Edit and delete people entries (locally)
- Create new people entries (locally)

## Technologies Used

- React
- TypeScript
- Material-UI
- Axios
- Webpack
- Babel

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [Node.js](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/shulamyt/esh-task.git
   cd starwars-search
   ```

2. Install dependencies:

   ```bash
   npm i
   ```

### Running the Application:

To start the development server, run:

```bash
npm run start
```

This will start the application in development mode and open it in your default browser. The application will be available at http://localhost:3000.

### Building the Application

To build the application for production, run:

```bash
npm run build
```

This will create a dist directory with the production build of the application.
