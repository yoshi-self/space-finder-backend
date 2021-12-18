import { APIGatewayProxyEvent } from "aws-lambda";
import { handler } from "../../services/SpacesTable/Read";

/*
const event = {
  body: {
    location: "Paris",
  },
};
*/

const event: APIGatewayProxyEvent = {
  queryStringParameters: {
    spaceId: "6b53deb2-2233-41f2-b8cf-691a1faca265",
  },
} as any;

const result = handler(event as any, {} as any).then((apiResult) => {
  const items = JSON.parse(apiResult.body);
  console.log(123);
});
