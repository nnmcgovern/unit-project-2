# random-data-api
This API uses randomly generated JSON data courtesy of [JSON Generator](https://json-generator.com/#). This project utilizes:
- MongoDB (database)
- Mongoose (data modeling)
- Express (server)
- Heroku (deployment)

## GET Requests & Endpoints
#### Base URL
```
https://random-data-api-50875b874049.herokuapp.com/api
```
Without parameters, this will return all of the documents in the API.

Querying
---
### By ID:
#### Request URL
```
https://random-data-api-50875b874049.herokuapp.com/api/DOCUMENT_ID
```
#### Example
```
https://random-data-api-50875b874049.herokuapp.com/api/64bc528f474689bddfb72e67
```
This will return the document where the value of _id is "64bc528f474689bddfb72e67".

---
### With a single query parameter:
#### Request URL
```
https://random-data-api-50875b874049.herokuapp.com/api?KEY=VALUE
```
#### Example
```
https://random-data-api-50875b874049.herokuapp.com/api?eyeColor=blue
```
This will return all documents in the API where the value of eyeColor is "blue".

---
### With multiple query parameters:
#### Request URL
```
https://random-data-api-50875b874049.herokuapp.com/api?KEY=VALUE&KEY=VALUE
```
#### Example
```
https://random-data-api-50875b874049.herokuapp.com/api?eyeColor=blue&name=Barber%20Bray
```
This will return all documents where the value of eyeColor is "blue" **AND** the value of name is "Barber Bray".

## POST Requests
A POST request to the base URL will add a new document to the API. A body containing raw JSON data must be submitted with the request with the following format:
```json
{
  "_id": String,
  "index": Number,
  "guid": String,
  "isActive": Boolean,
  "balance": String,
  "picture": String,
  "age": Number,
  "eyeColor": String,
  "name": String,
  "gender": String,
  "company": String,
  "email": String,
  "phone": String,
  "address": String,
  "about": String,
  "registered": String,
  "latitude": Number,
  "longitude": Number,
  "tags": [String],
  "friends": [{
    "id": Number,
    "name": String
  }],
  "greeting": String,
  "favoriteFruit": String
}
```

## PUT Requests
To update one or more documents in the API, a PUT request can be made to:
- The base URL (using query paramters to specify which document(s) to update)
- The /DOCUMENT_ID endpoint to specifiy a single document to update by its ID.
</br>

A PUT request must be submitted with a body of raw JSON data. The body only needs to contain the key-value pairs to be updated. For example, to update the greeting and favoriteFruit values for the document with ID "64bc528f34f5fa568f4bc1aa", you would send a put request to the URL
```https://random-data-api-50875b874049.herokuapp.com/api/64bc528f34f5fa568f4bc1aa```
with the following JSON:
```json
{
    "greeting": "Hello, this is my new greeting!",
    "favoriteFruit": "apple"
}
```
To add values to a field where the value type is an array, values to be added must be in an array. For example, the following JSON body can be sent with a PUT request to add new values to the "tags" and "friends" keys:
```json
{
  "friends": [
    {"id": 123, "name": "New Friend 1"},
    {"id": 456, "name": "New Friend 2"}
  ],
  "tags": [
    "New Tag 1",
    "New Tag 2"
  ]
}
```

## DELETE Requests
To delete one or more documents from the API, a DELETE request can be made to either the base URL (using query parameters to specify which document(s) to delete) or to the ```/DOCUMENT_ID``` endpoint.
<br />
To remove ALL documents, a delete request can be made to the base URL with no query parameters specified.

## Installation
Requires:
  - Node Package Manager (NPM)
  - MongoDB

To install and run the API server locally, clone this repository to your local machine, then run the following commands in the terminal from the repository's root directory:
```
npm install
```
...to install the necessary dependancies listed in the ```package.json``` file,
```
npm run db:seed
```
...to create and seed the database, and
```
npm start
```
...to start the server. (Note: the server is set to use port ```3030```)
