# Lore Tools Server

This is a server built with Express and Node.js that provides various API endpoints for generating fantasy-themed content using OpenAI's GPT-3 language model. The server listens on port 3000 and serves the client-side `index.html` file upon visiting the root directory.

## Installation

To install the server, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` to install the necessary dependencies.
3. Create a `.data` directory at the root of the project.
4. Create an `api_key.json` file inside the `.data` directory, and add your OpenAI API key in the following format: `{ "key": "YOUR_API_KEY" }`.
5. Run `npm start` to start the server.

## Usage

The server provides the following API endpoints:

- `GET /gen/:type/prompt/:prompt`: This endpoint generates content based on the specified type (`quote`, `npc`, `item`, `location`, `plothook`, `quest`, `spell`, or `monster`) and prompt (`:prompt`). It sends an API request to the OpenAI API and returns the generated text as a response to the client.

- `GET /:prompt`: This endpoint generates content based on the specified prompt (`:prompt`). It sends an API request to the OpenAI API and returns the generated text as a response to the client.

## Dependencies

The server relies on the following dependencies:

- `express`: A web application framework for Node.js.
- `cors`: A package for enabling Cross-Origin Resource Sharing (CORS).
- `fs`: A package for working with the file system.
- `node-fetch`: A package for making HTTP requests.

## License

This project is licensed under the MIT License.
