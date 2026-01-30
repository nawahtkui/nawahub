import clientPromise from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { projectId, serviceName, apiKey } = req.body;

    try {
      const client = await clientPromise;
      const db = client.db("nawahhub");

      await db.collection("projects").updateOne(
        { _id: new require("mongodb").ObjectId(projectId) },
        { $push: { connectors: { serviceName, apiKey } } }
      );

      res.status(200).json({ message: "Connector added" });
    } catch (err) {
      res.status(500).json({ error: "Failed to add connector" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
