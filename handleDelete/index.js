const dynamoose = require('dynamoose');

const personSchema = new dynamoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  favoriteCake: String,
});
const personModel = dynamoose.model('people', personSchema);

exports.handler = async (event) => {
  let { id } = event.queryStringParameters;
  let response = { statusCode: null, body: null };

  let records = null;

  try {
    records = await personModel.delete(id);
    response.statusCode = 200;
    response.body = JSON.stringify(records);
  } catch (error) {
    response.statusCode = 500;
    response.body = JSON.stringify(new Error('couldn\'t delete a person'));
  }
  return response;
};
