# timestamp-api
FreeCodeCamp Project - TimeStamp API
https://erichoog-timestamp-api.herokuapp.com/

## User stories:

- I can pass a string as a parameter and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
- If it does, it returns both the Unix timestamp and the natural language form of that date.
- If it does not contain a date or Unix timestamp, it returns null for those properties.
            
## Example usage:
      
`https://erichoog-timestamp-api.herokuapp.com/October%2014,%202014`

`https://erichoog-timestamp-api.herokuapp.com/1413244800`
      
## Example output:

`{"unix":1413244800,"natural":"October 14, 2014"}`
