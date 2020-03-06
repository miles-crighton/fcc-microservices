# Micro-service projects from FCC

The project directory for directions can be found here:
[https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/)

## Summary of API

### Timestamp Microservice
Converts a given date (UTC or Unix formatting), returning both the UTC and Unix encoding.

- GET `api/timestamp/:date_string?`

| Parameter | Required | Param Type | Value Type | Description |
| --- | --- | --- | --- | --- |
| `date_string` | False | Path | UTC/Unix Date String | Date to be processed |

### HeaderParser Microservice
A simple service that returns information related to the request client.

- GET `api/whoami`

### ShortUrl Microservice
Takes a given URL, performs a DNS resolution to check if valid, then stores it locally to be accessed
via shorthand route.

- POST `api/shorturl/new`: Log the given URL provided in body

| Parameter | Param Type | Value Type | Description |
| --- | --- | --- | --- |
| `address` | Body | String | URL to be shortened |

- GET `api/shorturl/:url_id`: Redirect to URL stored for shortened url_id

| Parameter | Param Type | Value Type | Description |
| --- | --- | --- | --- |
| `url_id` | Path | String | Shortened URL ID |

### Exercise Microservice
Intended to allow users to create and log exercises, with functionality to query exercise entries.

- POST `api/exercise/new-user`: Creates a new user to log exercises to.

| Parameter | Param Type | Value Type | Description |
| --- | --- | --- | --- |
| `username` | Body | String | Username to be added |

- POST `api/exercise/add`: Parse in form-data body to add an exercise 

| Parameter | Param Type | Value Type | Description |
| --- | --- | --- | --- |
| `userId` | Body | String | User to log exercise to |
| `description` | Body | String | Description of exercise |
| `date` | Body | UTC Date String | Date of exercise |
| `length` | Body | Integer | Duration of exercise |

- GET `api/exercise/log?{userId}[&from][&to][&limit]` 

| Parameter | Optional | Param Type | Value Type | Description |
| --- | --- | --- | --- | --- |
| `userId` | False | Body | String | User to query |
| `from` | True |Body | UTC Date String | Date for lower bound of query |
| `to` | True | Body | UTC Date String | Date for upper bound of query |
| `limit` | True | Body | Integer | Max number of logged exercises to return |

### FileAnalyse Microservice
Takes a given file provided by the client and returns related meta data.
- POST `api/fileanalyse/`: Returns meta data for posted file

| Parameter | Param Type | Value Type | Description |
| --- | --- | --- | --- |
| `upfile` | Form-data | File | File to be analysed |

## Technologies:
- Node
- Express