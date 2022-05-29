import { posts } from "../../dummy/posts";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(posts);
  }

  if (req.method === "POST") {
    const title = req.body.title;
    const body = req.body.body;
    const id = posts.length + 1;
    posts.push({ title: title, body: body, id: id });

    res.status(201).json(posts);
  }
}
