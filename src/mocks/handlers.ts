import { http } from "msw";

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
];
