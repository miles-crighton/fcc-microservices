# Micro-service projects from FCC

The project directory for directions can be found here:
[https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/)

## Summary of API

### Timestamp Microservice
Converts a given date (UTC or Unix formatting), returning both the UTC and Unix encoding.

- GET `api/timestamp/:date_string?`

### HeaderParser Microservice
A simple service that returns information related to the request client.

- GET `api/whoami`

### ShortUrl Microservice
Takes a given URL, performs a DNS resolution to check if valid, then stores it locally to be accessed
via shorthand route.

- POST `api/shorturl/new`: Log the given URL provided in body { address }

| Params | Param Type | Param Value | Description |
| --- | --- | --- | --- |
| `address` | Body | String | URL to be shortened |

- GET `api/shorturl/:url_id`: Redirect to URL stored for shortened url_id

| Params | Param Type | Param Value | Description |
| --- | --- | --- | --- |
| `url_id` | Path | String | Shortened URL ID |

### Exercise Microservice
Intended to allow users to create and log exercises, with functionality to query exercise entries.

- POST `api/exercise/new-user`: Creates a new user to log exercises to
- POST `api/exercise/add`: Parse in form-data to add an exercise 
`Expected body: { userId: User to log exercise to, description: Describe your exercise, date: Date of exercise, length: Duration of exercise }`
- GET `api/exercise/log?{userId}[&from][&to][&limit]` 
```
    Expected query parameters:
    - userId<string>: User to query
    - from<UTC Date string> (optional): Date for lower bound of query
    - to<UTC Date string> (optional): Date for upper bound of query
    - limit<number>: Max number of logged exercises to return
```

### FileAnalyse Microservice
Takes a given file provided by the client and returns related meta data.
- POST `api/fileanalyse/`: (Content-type: multipart/form-data)

## Technologies:
- Node
- Express