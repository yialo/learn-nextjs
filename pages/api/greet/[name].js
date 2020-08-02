export default function greetByName(req, res) {
  res.json({ yourName: req.query.name });
}
