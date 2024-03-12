# Movie CRUD API

This is a simple CRUD (Create, Read, Update, Delete) API built using Express.js for managing movie data.

## Purpose

The purpose of this API is to allow users to perform CRUD operations on a collection of movie data. It provides endpoints for retrieving a list of movies, getting a single movie by ID, adding a new movie, updating movie data, and deleting a movie.

## Endpoints

### GET /movie

- **Description**: Retrieve a list of all movies.
- **Response**: Returns an array of movie objects containing details like ID, title, director, and release date.

### GET /movie/:id

- **Description**: Retrieve a single movie by its ID.
- **Parameters**:
  - `id`: The ID of the movie to retrieve.
- **Response**: Returns the movie object corresponding to the provided ID.

### POST /movie

- **Description**: Add a new movie.
- **Request Body**: Expects a JSON object with the following properties:
  - `title` (string): The title of the movie.
  - `director` (string): The director of the movie.
  - `releaseDate` (string): The release date of the movie in YYYY-MM-DD format.
- **Response**: Returns a success message indicating that the movie has been added.

### PUT /movie/:id

- **Description**: Update movie data by its ID.
- **Parameters**:
  - `id`: The ID of the movie to update.
- **Request Body**: Expects a JSON object with the following properties (all optional):
  - `title` (string): The updated title of the movie.
  - `director` (string): The updated director of the movie.
  - `releaseDate` (string): The updated release date of the movie in YYYY-MM-DD format.
- **Response**: Returns a success message indicating that the movie data has been updated.

### DELETE /movie/:id

- **Description**: Delete a movie by its ID.
- **Parameters**:
  - `id`: The ID of the movie to delete.
- **Response**: Returns a success message indicating that the movie has been deleted.

## Postman Operations

1. **GET All Movies**:
   - Method: GET
   - URL: `http://localhost:3000/movie`
   - Description: Retrieves a list of all movies.

2. **GET Movie by ID**:
   - Method: GET
   - URL: `http://localhost:3000/movie/id`
   - Description: Retrieves a single movie by its ID.

3. **Add New Movie**:
   - Method: POST
   - URL: `http://localhost:3000/movie`
   - Description: Adds a new movie to the collection.
   - Body: Raw JSON data containing movie details.

4. **Update Movie Data**:
   - Method: PUT
   - URL: `http://localhost:3000/movie/id`
   - Description: Updates movie data by its ID.
   - Body: Raw JSON data containing updated movie details.

5. **Delete Movie by ID**:
   - Method: DELETE
   - URL: `http://localhost:3000/movie/id`
   - Description: Deletes a movie by its ID.

### JSON Format for Movie Data

```json
{
    "id": 1,
    "title": "Movie Title",
    "director": "Director Name",
    "releaseDate": "YYYY-MM-DD"
}
```


### This README file provides an overview of the purpose of the API, describes each endpoint, explains how to perform operations using Postman, and specifies the JSON format for movie data. Adjust the URLs and descriptions as necessary based on your actual usage.
