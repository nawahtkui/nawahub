import clientPromise from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, description, owner } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db("nawahhub");

      const result = await db.collection("projects").insertOne({
        name,
        description,
        owner,
        connectors: [],
        createdAt: new Date(),
      });

      res.status(201).json({ projectId: result.insertedId });
    } catch (err) {
      res.status(500).json({ error: "Failed to create project" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
