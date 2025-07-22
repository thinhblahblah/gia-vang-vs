export default async function handler(req, res) {
  const { type } = req.query;
  const namespace = "vangvansang";

  const todayKey = new Date().toISOString().split("T")[0];
  const key = type === "today" ? `daily-${todayKey}` : "total";

  const apiUrl = `https://api.countapi.xyz/hit/${namespace}/${key}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({ value: data.value });
  } catch (error) {
    res.status(500).json({ error: "Đếm thất bại", detail: error.message });
  }
}
