# Express.js Basic API Example

This is a simple Express.js application that creates a basic API with two routes. It provides information about a person named Sanjay and allows you to append "_hello" to a query parameter named "sn."

## Getting Started

1. Clone this repository to your local machine.

2. Install dependencies:

   ```shell
   npm install
   ```

3. Start the server:

   ```shell
   node app.js
   ```

4. Access the API in your browser or using API testing tools like Postman.

## API Routes

1. **Get Sanjay's Information**

   - **Endpoint:** `/sanjay`
   - **HTTP Method:** GET

   This route returns information about a person named Sanjay, including their name and roll number.

2. **Append "_hello" to a Query Parameter**

   - **Endpoint:** `/paji`
   - **HTTP Method:** GET

   This route appends "_hello" to a query parameter named "sn" and returns the modified value.

## Configuration

- This application uses Express.js for handling HTTP requests.
- By default, it listens on port 3000, but you can change the `PORT` variable in `app.js` if needed.

