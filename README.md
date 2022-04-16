# AWS Serverless API

![UML](/assets/aws-serverless-api-uml.png)

API Root URL: https://5zqum3rpmc.execute-api.us-west-2.amazonaws.com/

## Schema

```
{
  id: String,
  firstName: String,
  lastName: String,
  favoriteCake: String,
}
```

## Routes

### POST

* `/people` - inserts a record into the database, returns the object created

### GET

* `/people` - returns an array of objects representing the records in the database
* `/people/##` - returns an object representing one record, by its id (##)

### PUT

* `/people/##` - updates a record in the database, returns the updated record

### DELETE

* `/people/##` - Given an id (##) removes the matching record from the database, returns an empty object
