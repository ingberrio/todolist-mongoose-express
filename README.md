
---

# To-Do List Web App

A simple to-do list web application built using Express.js and MongoDB. This application allows you to add and view tasks.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [License](#license)

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/ingberrio/todolist-mongoose-express.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todolist-mongoose-express
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the application:

   ```bash
   npm start
   ```

2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the to-do list web app.

## Features

- Add new tasks to the list.
- View tasks in the list.
- Separate task lists based on categories.

## Dependencies

- Express.js: Fast, unopinionated, minimalist web framework for Node.js.
- Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.

## Getting Started

1. Configure MongoDB Connection:
   - Modify the MongoDB connection URL in the `mongoose.connect` function to match your MongoDB server configuration.

2. Run the Application:
   - Start the application using `npm start`.
   - Access the app in your browser at [http://localhost:3000](http://localhost:3000).

3. Usage:
   - Add tasks using the input field on the home page.
   - Choose a category for the task ("Today" or "Work").
   - View tasks on the home page, categorized by selected categories.
   - Visit the "About" page for more information about the app.

## License

This project is licensed under the [MIT License](LICENSE).

---

Please remember to replace `"yourusername/your-repo"` in the installation instructions with the actual repository URL, and make sure to include the `LICENSE` file containing your chosen license. You can customize the README as needed to match the specifics of your project.