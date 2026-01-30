import { connectors } from "../../../lib/connectors";

export default async function handler(req, res) {
  const result = {};

  for (const key in connectors) {
    result[key] = await connectors[key].test();
  }

  res.status(200).json(result);
}
