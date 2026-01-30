import { connectors } from "../../../lib/connectors";

export default function handler(req, res) {
  const { provider } = req.body;

  if (!provider || !connectors[provider]) {
    return res.status(400).json({ error: "Invalid provider" });
  }

  res.status(200).json({
    message: "Connector linked successfully",
    provider,
  });
}

