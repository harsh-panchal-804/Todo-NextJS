# Todo App

This is a simple Todo application built with Next.js and TypeScript. It uses Tailwind CSS for styling and MongoDB for data storage.

## Features

- Add, edit, and delete todos
- Mark todos as completed
- Filter todos by status (all, active, completed)
- Responsive design

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- MongoDB

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-next-sactions.git
   cd todo-next-sactions
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection string:

   ```env
   DATABASE_URL="your-mongodb-connection-string"
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create an optimized production build:

```bash
npm run build
npm start
```

### Linting

To run ESLint:

```bash
npm run lint
```

## License

This project is licensed under the MIT License.
