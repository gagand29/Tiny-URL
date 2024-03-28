# TinyURL - URL Shortener

TinyURL is a simple URL shortening service built using Node.js and Express. It allows users to shorten long URLs into more manageable and shareable links.

## Features

- **URL Shortening**: Convert long URLs into short, easy-to-share links.
- **Custom Short Codes**: Generates unique short codes for each shortened URL.
- **Redirection**: Redirects users from shortened URLs to the original long URLs.

## Technologies Used

- **Node.js**: A JavaScript runtime for building server-side applications.
- **Express**: A web application framework for Node.js, used for building the server and handling HTTP requests.
- **uuid**: A package for generating universally unique identifiers (UUIDs), used for creating unique short codes.
- **body-parser**: Middleware for parsing request bodies in Express applications.
- **morgan**: Middleware for logging HTTP requests in Express applications.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/gagand29/tiny-url.git
   ```

2. Navigate to the project directory:

   ```bash
   cd tiny-url
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Open your web browser and go to `http://localhost:3000` to access the URL shortener interface.

3. Enter a long URL into the provided input field and click the "Shorten URL" button to generate a shortened URL.

4. Copy the shortened URL and share it with others.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

