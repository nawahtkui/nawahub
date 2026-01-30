import { connectors } from "../../../lib/connectors";

export default function handler(req, res) {
  res.status(200).json({
    available: Object.keys(connectors),
  });
}
