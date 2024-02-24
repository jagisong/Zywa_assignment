# Assignment Overview

This README file outlines the approach, technologies used, architectural decisions, and possible improvements for a project developed using Node.js, Express.js, and MongoDB. The project involves processing data from a CSV file, storing it in a MongoDB database, and creating an API endpoint to retrieve the latest status of a card.

## Approach

1. **Data Processing**: Data is read from a CSV file and pushed into a MongoDB database. Four schemas are created to represent different statuses (delivered, returned, pickup, delivery exception).

2. **API Development**: An API endpoint (`/get_card_status`) is created using Express.js to retrieve the latest status of a card based on its ID.

3. **Data Retrieval**: Upon receiving a card ID, the API endpoint queries the database for the latest status of the card, sorts the results based on timestamp, and returns the latest status to the client.

## Technologies Used

- **Node.js**: Used for server-side development due to its event-driven architecture and non-blocking I/O.
- **Express.js**: Chosen as the web application framework for its simplicity, flexibility, and robust middleware ecosystem.
- **MongoDB**: Selected as the database for its flexibility with unstructured data and ease of integration with Node.js through libraries like Mongoose.
- **Mongoose**: Used as an Object Data Modeling (ODM) library for MongoDB, simplifying interactions with the database.

## Architectural Decisions

1. **Schema Design**: Four schemas are created to represent different card statuses. This design choice allows for efficient querying and retrieval of status data.

2. **API Endpoint**: An endpoint is created to provide a convenient interface for retrieving card statuses. The endpoint is designed to be intuitive and RESTful, accepting a card ID as input and returning the latest status.

3. **Error Handling**: Error handling middleware is implemented to gracefully handle errors and provide meaningful responses to clients.

## Possible Improvements

1. **Input Validation**: Implement input validation to ensure that only valid card IDs are accepted by the API endpoint.

2. **Authentication & Authorization**: Add authentication and authorization mechanisms to secure the API endpoints and restrict access to authorized users.

3. **Error Logging**: Integrate logging functionality to record errors and application events, aiding in debugging and monitoring.

4. **Performance Optimization**: Optimize database queries and application code for better performance, especially as the size of the dataset grows.

5. **Unit Testing**: Implement unit tests to ensure the correctness of individual components and improve the maintainability of the codebase.

6. **Documentation**: Provide comprehensive documentation for the API endpoints, data models, and deployment instructions to facilitate usage and maintenance.

## Running the Project

To run the project:

1. Download and unzip the project files.
2. Open a terminal and navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Start the server by running `node index.js` or `nodemon index.js`.
5. Access the API endpoint `http://localhost:3000/get_card_status` using a tool like Postman, providing a card ID in the request body as "cardId".

## Conclusion

This project demonstrates the usage of Node.js, Express.js, and MongoDB to develop a web application for managing and retrieving card status data. By following best practices in architecture, development, and documentation, the project aims to provide a reliable and scalable solution for tracking card statuses.
