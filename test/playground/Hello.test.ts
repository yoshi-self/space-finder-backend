import { APIGatewayProxyEvent } from "aws-lambda";
import { handler as create } from "../../services/SpacesTable/Create";
import { handler as read } from "../../services/SpacesTable/Read";

/*
const eventCreate = {
  body: {
    location: "Paris",
  },
};

const result = create(event as any, {} as any).then((apiResult) => {
  const items = JSON.parse(apiResult.body);
  console.log(123);
});
*/

/*
const eventRead: APIGatewayProxyEvent = {
  queryStringParameters: {
    spaceId: "6b53deb2-2233-41f2-b8cf-691a1faca265",
  },
} as any;
*/

const eventRead: APIGatewayProxyEvent = {
  queryStringParameters: {
    location: "London",
  },
} as any;

const result = read(eventRead as any, {} as any).then((apiResult) => {
  const items = JSON.parse(apiResult.body);
  console.log(123);
});
