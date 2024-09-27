# Simple-CRUD-Application-with-Express

This is a simple CRUD (Create, Read, Update, Delete) API built using Express.js. The app allows you to manage a collection of items, stored in memory, with basic functionality for adding, retrieving, updating, and deleting items. This project is ideal for demonstrating how to build RESTful APIs in Node.js using Express.

## Features

- **POST /items**: Add a new item to the list.
- **GET /items**: Retrieve all items.
- **GET /items/:id**: Retrieve a single item by its unique ID.
- **PUT /items/:id**: Update an existing item by its ID.
- **DELETE /items/:id**: Delete an item by its ID.

## Installation

1. Clone the repository or download the code.
   ```bash
   git clone https://github.com/rbrownGithub/Simple-CRUD-Application-with-Express.git
   ```
2. Navigate to the project directory.
   ```bash
   cd Simple-CRUD-Application-with-Express
   ```
3. Install dependencies.
   ```bash
   npm install
   ```

## Running the App

1. Start the server.

   ```bash
   node app.js
   ```

   Alternatively, if you have `nodemon` installed, you can run:

   ```bash
   nodemon app.js
   ```

2. The server will start on the default port `3000`. You can access the API at:
   ```
   http://localhost:3000
   ```

## API Endpoints

### POST /items

- **Description**: Add a new item to the collection.
- **Body Parameters**:
  - `name`: Name of the item (string).
  - `description`: A brief description of the item (string).
- **Example Request**:
  ```bash
  curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Item1", "description": "This is item 1"}'
  ```
- **Response**:
  ```json
  {
    "id": "1695683746275",
    "name": "Item1",
    "description": "This is item 1"
  }
  ```

### GET /items

- **Description**: Retrieve all items in the collection.
- **Response**:
  ```json
  [
    {
      "id": "1695683746275",
      "name": "Item1",
      "description": "This is item 1"
    }
  ]
  ```

### GET /items/:id

- **Description**: Retrieve an item by its unique ID.
- **URL Parameters**:
  - `id`: The unique ID of the item.
- **Response**:
  ```json
  {
    "id": "1695683746275",
    "name": "Item1",
    "description": "This is item 1"
  }
  ```

### PUT /items/:id

- **Description**: Update an existing item by its ID.
- **Body Parameters**:
  - Any fields you want to update (e.g., `name`, `description`).
- **Example Request**:
  ```bash
  curl -X PUT http://localhost:3000/items/1695683746275 \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Item", "description": "Updated description"}'
  ```
- **Response**:
  ```json
  {
    "id": "1695683746275",
    "name": "Updated Item",
    "description": "Updated description"
  }
  ```

### DELETE /items/:id

- **Description**: Delete an item by its ID.
- **URL Parameters**:
  - `id`: The unique ID of the item.
- **Response**: `204 No Content` (empty response).

## Error Handling

The app has basic error handling using Express's built-in error handling middleware. If an error occurs, the server responds with a `500` status code and a generic error message.

## Containerizing the Application with Docker

To run the Simple-CRUD-Application-with-Express inside a Docker container, follow the instructions below.

### Prerequisites

- [Docker](https://www.docker.com/get-started) must be installed on your local machine.

### Build the Docker Image

In the project root directory (where the `Dockerfile` is located), run the following command to build the Docker image:

```bash
docker build -t simple-crud-application-with-express .
```

This command builds a Docker image using the current directory (`.`) and names it `simple-crud-application-with-express`.

### Run the Docker Container

After building the Docker image, run a container using the image:

```bash
docker run -p 3000:3000 simple-crud-application-with-express
```

- `-p 3000:3000`: This maps port 3000 on your local machine to port 3000 inside the container.
- `simple-crud-application-with-express`: This is the name of the Docker image you just built.

Now the application will be accessible at [http://localhost:3000](http://localhost:3000).

### Stop the Docker Container

To stop the container, find the running container’s ID using:

```bash
docker ps
```

Then stop the container using:

```bash
docker stop <container_id>
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.


