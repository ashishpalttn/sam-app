const AWS = require('aws-sdk');
let response;

exports.lambdaHandler = async (event, context) => {

    AWS.config.update({region: 'ap-south-1'});
    const dynamo = new AWS.DynamoDB.DocumentClient();
    const dynamodbTableName = 'sam-deploy-third-DynamoDBTable-P9TPLDV1OVEF';    
    const params = {
      TableName: dynamodbTableName,
      Item: {
        id: "1",
        info: {
          name: "Ashish Pal",
          email: "ashishpal778@gmail.com",
          age: 29,
          address: "India"
        },
      },
    };
    try{
        await dynamo.put(params).promise();
        console.log("Data inserted Successfully");
    }
    catch(err){
        console.log('Error while inserting the data: ',err);
    }

    // const data = await dynamo.scan({ TableName: dynamodbTableName }).promise();


    try {
        // const ret = await axios(url);
        response = {
          statusCode: 200,
          body: JSON.stringify({
            message: "hello world asm-app today is 12 Augest 2024",
            // location: ret.data.trim()
          }),
        };
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};

