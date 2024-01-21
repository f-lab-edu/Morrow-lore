import { http, HttpResponse } from "msw";

const allPosts = new Map();

export const handlers = [
  http.get("/posts", () => {
    console.log('Captured a "GET /posts" request');
  }),
  http.post("/posts", () => {
    console.log('Captured a "POST /posts" request');
  }),
  http.delete("/posts/:id", ({ params }) => {
    console.log(`Captured a "DELETE /posts/${params.id}" request`);
  }),
  http.get("/posts", () => {
    // Construct a JSON response with the list of all posts
    // as the response body.
    return HttpResponse.json(Array.from(allPosts.values()));
  }),
];
