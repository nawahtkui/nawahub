import jwt from "jsonwebtoken";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username } = req.body;

    // توليد JWT بسيط
    const token = jwt.sign(
      { username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
